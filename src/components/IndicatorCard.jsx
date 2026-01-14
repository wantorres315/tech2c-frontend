export default function IndicatorCard({ title, value, icon: Icon, color }) {
    return (
        <div className="bg-white p-4 rounded shadow flex items-center gap-4">
            <div
                className={`p-3 rounded-full ${color} text-white flex items-center justify-center`}
            >
                {Icon && <Icon className="w-6 h-6" />}
            </div>

            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-xl font-bold">{value}</p>
            </div>
        </div>
    );
}
