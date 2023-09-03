import React from "react";
import { useCovidData } from "../../store/api/GraphApi";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const GraphData: React.FC = () => {
  const { data, isLoading, isError } = useCovidData();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const covidData = data as any;
  const chartData = {
    labels: ["Cases", "Deaths", "Recovered", "Active"],
    datasets: [
      {
        label: "COVID-19 Statistics",
        data: [
          covidData.cases || 0,
          covidData.deaths || 0,
          covidData.recovered || 0,
          covidData.active || 0,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart" style={{ width: "100%", height: "400px" }}>
      <h2>COVID-19 Bar Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default GraphData;
