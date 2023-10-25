const AggregationTable: React.FC<{ data: AggregatedData[] }> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg mt-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Aggregated Data</h2>
      <table className="w-full text-gray-800">
        <thead>
          <tr>
            <th className="text-left py-2 px-3">Description</th>
            <th className="text-left py-2 px-3">Total Debit</th>
            <th className="text-left py-2 px-3">Total Credit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((aggregatedItem, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-blue-100 bg-gray-100 ${
                index % 2 === 0 ? "bg-gray-50" : ""
              }`}
            >
              <td className="py-2 px-3">{aggregatedItem.Description}</td>
              <td className="py-2 px-3">{aggregatedItem.TotalDebit}</td>
              <td className="py-2 px-3">{aggregatedItem.TotalCredit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface AggregatedData {
  Description: string;
  TotalDebit: number;
  TotalCredit: number;
}

export default AggregationTable;
