import React, { useEffect, useRef, useState } from "react";
import CSVData from "@/types/CSVData";
import { filterData } from "@/helpers/filter";
import aggregateData from "@/helpers/aggregate";
import AggregationTable from "./AggregationTable";
import renderLineChart from "@/helpers/renderLineChart";
import { Chart } from "chart.js";

interface DisplayToolProps {
  data: CSVData[];
  keyword: string;
  startDate: string;
  endDate: string;
}

const TrendTool: React.FC<DisplayToolProps> = ({
  data,
  keyword,
  startDate,
  endDate,
}) => {
  const filteredData = filterData(data, keyword, startDate, endDate);
  const [isAggregating, setAggregating] = useState(false);
  const aggregatedData = aggregateData(filteredData);
  const [isAnalyzing, setAnalyzing] = useState(false);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (isAnalyzing && chartRef.current) {
      // Destroy the existing chart if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      const chart = renderLineChart(chartRef.current, filteredData);
      chartInstanceRef.current = chart;
    }
  }, [isAnalyzing, filteredData]);

  const handleAnalyzeClick = () => {
    setAnalyzing(true);
  };

  const handleAggregateClick = () => {
    setAggregating(true);
    // Destroy the chart when the "Aggregate" button is clicked
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
  };

  return (
    <div className="w-full bg-pink-400 rounded-lg p-4 shadow-md max-w-6xl mx-auto mt-4">
      {filteredData.length > 0 ? (
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-white">
              Total Records Found: {filteredData.length}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mx-2"
              onClick={handleAggregateClick}
            >
              Aggregate
            </button>
            <button
              className="bg-blue-500 hover-bg-blue-600 text-white py-2 px-4 rounded-md mx-2"
              onClick={handleAnalyzeClick}
            >
              Time Analysis
            </button>
          </div>
          {isAggregating && <AggregationTable data={aggregatedData} />}
          {isAnalyzing ? (
            <div className="mt-4">
              <canvas id="lineChart" ref={chartRef}></canvas>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="text-gray-600 p-2 text-center">No data to display.</div>
      )}
    </div>
  );
};

export default TrendTool;
