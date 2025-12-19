import React from "react";
import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#333",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        maxWidth: "800px",
        margin: "60px auto",
        lineHeight: "1.8",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#ff4081" }}>
        How to Use the Google Trends Clone 🌸
      </h1>

      <ol style={{ fontSize: "16px" }}>
        <li>
          Use the <strong>search bar</strong> on the homepage to enter keywords or topics you want to explore.
        </li>
        <li>
          You can add multiple topics to compare their popularity over time (feature coming soon!).
        </li>
        <li>
          Choose your <strong>country</strong>, <strong>category</strong>, and <strong>web search type</strong> from the dropdown menus.
        </li>
        <li>
          Click on <strong>Search</strong> to view trend data visualized as graphs and charts.
        </li>
        <li>
          Navigate back to the home page anytime using the top navigation bar.
        </li>
      </ol>

      <p style={{ textAlign: "center", marginTop: "30px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#ff4081",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          }}
        >
          ⬅ Back to Home
        </Link>
      </p>
    </div>
  );
};

export default HelpPage;
