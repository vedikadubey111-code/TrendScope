import React from "react";

const TrendingNow = () => {
  // Dummy data for 100 trending topics
  const topics = Array.from({ length: 100 }, (_, i) => `Trending Topic ${i + 1}`);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #fce4ec, #fff)",
        minHeight: "100vh",
        padding: "40px",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#d81b60" }}>🔥 Top 100 Trending Topics</h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
          listStyle: "none",
          padding: "0",
          marginTop: "30px",
        }}
      >
        {topics.map((topic, index) => (
          <li
            key={index}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingNow;
