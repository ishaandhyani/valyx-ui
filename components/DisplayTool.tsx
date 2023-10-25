import React, { useState } from "react";
import CSVData from "@/types/CSVData";
import { filterData } from "@/helpers/filter";

interface DisplayToolProps {
  data: CSVData[];
  keyword: string;
  startDate: string;
  endDate: string;
}

const DisplayTool: React.FC<DisplayToolProps> = ({
  data,
  keyword,
  startDate,
  endDate,
}) => {
  const filteredData = filterData(data, keyword, startDate, endDate);
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSaveClick = () => {
    setSaveModalOpen(true);
  };

  const handleSaveConfirm = () => {
    if (fileName) {
      let csvContent = "Date,Description,Debit,Credit,Balance\n";
      filteredData.forEach((row) => {
        const { Date, Description, Debit, Credit, Balance } = row;
        csvContent += `${Date},${Description},${Debit},${Credit},${Balance}\n`;
      });

      const blob = new Blob([csvContent], { type: "text/csv" });

      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${fileName}.csv`;
      a.click();
      setSaveModalOpen(false);
      setFileName("");
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-lg p-4 shadow-md max-w-6xl mx-auto mt-4">
      {filteredData.length > 0 ? (
        <table className="w-full bg-white text-gray-800">
          <thead>
            <tr>
              <th className="text-left py-2 px-3">Date</th>
              <th className="text-left py-2 px-3">Description</th>
              <th className="text-left py-2 px-3">Debit</th>
              <th className="text-left py-2 px-3">Credit</th>
              <th className="text-left py-2 px-3">Balance</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-blue-100 bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <td className="py-2 px-3">{row.Date}</td>
                <td className="py-2 px-3">{row.Description}</td>
                <td className="py-2 px-3">{row.Debit}</td>
                <td className="py-2 px-3">{row.Credit}</td>
                <td className="py-2 px-3">{row.Balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-600 p-2">No data to display.</div>
      )}
      {filteredData.length>0 && <div className="flex justify-end">
        <button
          onClick={handleSaveClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 "
        >
          Save
        </button>
      </div>}

      {isSaveModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-300 rounded-md p-4 w-80">
            <p className="text-lg mb-2">Enter the file name:</p>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="File Name"
              className="w-full p-2 border rounded-md"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSaveConfirm}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setSaveModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayTool;
