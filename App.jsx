import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TrendChart from "./TrendChart";
import TrendList from "./TrendList";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [chartData, setChartData] = useState([]);

  const handleSelectTrend = (newQuery) => {
    setQuery(newQuery);

    // dummy data generation for now
    const sampleData = [
      { name: "Jan", value: Math.random() * 100 },
      { name: "Feb", value: Math.random() * 100 },
      { name: "Mar", value: Math.random() * 100 },
      { name: "Apr", value: Math.random() * 100 },
      { name: "May", value: Math.random() * 100 },
      { name: "Jun", value: Math.random() * 100 },
    ];

    setChartData(sampleData);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #fce4ec, #ffffff)",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Navbar />
      <SearchBar onSelectTrend={handleSelectTrend} />

      {chartData.length > 0 && (
        <TrendChart data={chartData} query={query} />
      )}
    </div>
  );
}

export default App;

