import { useState, useEffect, useRef } from "react";
import { api } from "../api/api";
import IndicatorCard from "../components/IndicatorCard";
import EmissionsChart from "../components/EmissionsChart";
import TopCompaniesTable from "../components/TopCompaniesTable";
import EmissionsBySectorChart from "../components/EmissionsBySectorChart";
import {
    FireIcon,
    BoltIcon,
    CalendarDaysIcon
} from "@heroicons/react/24/solid";

export default function Dashboard() {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fileInputRef = useRef(null);

    const fetchSummary = async () => {
        try {
            const res = await api.get("/indicators/summary");

            if (res.status === 204 || !res.data) {
                setData(null);
                return;
            }

            setData(res.data);
        } catch (err) {
            console.error("Error fetching summary:", err);
            setData(null);
        }
    };

    useEffect(() => {
        fetchSummary();
    }, []);

    const handleUpload = async () => {
        if (!file) {
            setError("Please select an Excel file first.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("file", file);

            await api.post("/indicators/import", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            await fetchSummary();

            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (err) {
            console.error(err);
            setError("Error processing the file.");
        } finally {
            setLoading(false);
        }
    };

    const chartData = data?.totalCO2PerYear
        ? Object.entries(data.totalCO2PerYear).map(([year, value]) => ({
            year,
            value
        }))
        : [];

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-6">
            <h1 className="text-2xl mb-4 font-bold">Tech2C Dashboard</h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".xlsx"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="bg-white p-2 rounded border w-full sm:w-auto"
                />
                <button
                    onClick={handleUpload}
                    disabled={!file || loading}
                    className={`px-4 py-2 rounded text-white w-full sm:w-auto ${loading || !file
                        ? "bg-gray-400"
                        : "bg-green-600 hover:bg-green-700"
                        }`}
                >
                    {loading ? "Processing..." : "Upload"}
                </button>
            </div>

            {error && <p className="text-red-600 mt-3">{error}</p>}

            {data && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        <IndicatorCard
                            title="Average Energy Consumption (MWh)"
                            value={data.averageEnergyConsumption}
                            icon={BoltIcon}
                            color="bg-blue-500"
                        />

                        <IndicatorCard
                            title="Total CO₂ Last Year"
                            value={Object.values(data.totalCO2PerYear).slice(-1)[0]}
                            icon={FireIcon}
                            color="bg-red-500"
                        />

                        <IndicatorCard
                            title="Years Processed"
                            value={Object.keys(data.totalCO2PerYear).length}
                            icon={CalendarDaysIcon}
                            color="bg-green-600"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                        <EmissionsChart data={chartData} />
                        <TopCompaniesTable companies={data.top5Companies} />
                    </div>

                    {data.emissionsBySectorPerYear &&
                        Object.keys(data.emissionsBySectorPerYear).length > 0 && (
                            <div className="mt-8">
                                <h2 className="text-xl font-semibold mb-4">
                                    Emissions by Sector (per Year)
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {Object.entries(
                                        data.emissionsBySectorPerYear
                                    ).map(([year, sectors]) => (
                                        <EmissionsBySectorChart
                                            key={year}
                                            title={`Emissions by Sector - ${year}`}
                                            data={sectors}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                </>
            )}
        </div>
    );
}
