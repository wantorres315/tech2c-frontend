import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function EmissionsChart({ data }) {
    return (
        <div className="bg-white p-4 rounded shadow h-64">
            <h3 className="mb-2 font-semibold">Emissões de CO₂ por Ano</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#16a34a" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
