import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";

const TrendChart = ({ keyword }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Mock data generation (simulate API)
    const fetchData = async () => {
      const points = Array.from({ length: 12 }, (_, i) => ({
        label: `Month ${i + 1}`,
        value: Math.floor(Math.random() * 100),
      }));
      setChartData({
        labels: points.map((p) => p.label),
        datasets: [
          {
            label: `${keyword} - Interest Over Time`,
            data: points.map((p) => p.value),
            fill: false,
            borderColor: "#4285F4",
            tension: 0.3,
          },
        ],
      });
    };
    fetchData();
  }, [keyword]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="trend-chart">
      <Line data={chartData} />
    </div>
  );
};

export default TrendChart;
