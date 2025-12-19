import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendList = ({ onSelectTrend }) => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    // Example API (replace with real endpoint or mock data)
    axios
      .get("https://api.sampleapis.com/fake-trends/trending")
      .then((res) => setTrends(res.data.slice(0, 10)))
      .catch((err) => console.error("Error fetching trends", err));
  }, []);

  return (
    <div className="trend-list">
      <h2>🔥 Trending Now</h2>
      <ul>
        {trends.map((trend, idx) => (
          <li key={idx} onClick={() => onSelectTrend(trend.title)}>
            {trend.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendList;
