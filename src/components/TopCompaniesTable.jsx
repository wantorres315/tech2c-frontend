export default function TopCompaniesTable({ companies }) {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-2 font-semibold">Top 5 Empresas com mais Emissões</h3>
            <table className="w-full">
                <thead>
                    <tr className="text-left border-b">
                        <th>Empresa</th>
                        <th>Emissões (t)</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((c, i) => (
                        <tr key={i} className="border-b">
                            <td>{c.company}</td>
                            <td>{c.emissions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
