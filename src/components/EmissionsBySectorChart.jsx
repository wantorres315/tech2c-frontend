import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4560",
    "#00E396"
];

export default function EmissionsBySectorChart({ title, data }) {
    return (
        <div className="bg-white p-4 rounded shadow h-[420px] relative">
            <h3 className="mb-2 font-semibold">{title}</h3>

            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="total_co2"
                        nameKey="sector"
                        cx="50%"
                        cy="40%"
                        outerRadius={120}
                        labelLine={false}
                        label={false}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip formatter={(value) => value.toFixed(2)} />

                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        layout="horizontal"
                        wrapperStyle={{
                            position: "absolute",
                            bottom: 40,
                            width: "100%",
                            fontSize: "12px"
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
