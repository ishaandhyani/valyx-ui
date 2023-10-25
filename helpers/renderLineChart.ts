import Chart from "chart.js/auto";
import CSVData from "@/types/CSVData";

const renderLineChart = (canvas: HTMLCanvasElement, data: CSVData[]): Chart => {
  const labels = data.map((item) => item.Date);
  const debitData = data.map((item) => parseFloat(item.Debit) || 0);
  const creditData = data.map((item) => parseFloat(item.Credit) || 0);

  const ctx = canvas.getContext("2d");
  
  if (ctx) {
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Debit",
            borderColor: "blue",
            data: debitData,
          },
          {
            label: "Credit",
            borderColor: "green",
            data: creditData,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  } else {
    throw new Error("Canvas context not available");
  }
};

export default renderLineChart;
