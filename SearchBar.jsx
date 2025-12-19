import React, { useState } from "react";

const SearchBar = ({ onSelectTrend }) => {
  const [queries, setQueries] = useState([""]);
  const [country, setCountry] = useState("India");
  const [timeRange, setTimeRange] = useState("Past 12 months");
  const [category, setCategory] = useState("All categories");
  const [searchType, setSearchType] = useState("Web Search");

  const colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58", "#AB47BC"];

  const handleChange = (index, value) => {
    const updated = [...queries];
    updated[index] = value;
    setQueries(updated);
  };

  const handleAddField = () => {
    if (queries.length < 5) setQueries([...queries, ""]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const validQueries = queries.filter((q) => q.trim() !== "");
    if (validQueries.length > 0)
      onSelectTrend({
        queries: validQueries,
        country,
        timeRange,
        category,
        searchType,
      });
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, rgba(245,247,251,0.9), #f5f7fb)", // blur/gradient effect
        backdropFilter: "blur(6px)", // gives soft blur
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingTop: "20px",
      }}
    >
      <form
        onSubmit={handleSearch}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          width: "100%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(200,200,200,0.3)",
          backdropFilter: "blur(8px)",
          padding: "25px 40px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          boxSizing: "border-box",
        }}
      >
        {/* Top Section: Search Inputs + Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "100%",
          }}
        >
          {queries.map((query, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 200px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f8f9fa",
                border: "1px solid #ddd",
                borderRadius: "20px",
                padding: "8px 12px",
                minWidth: "200px",
                maxWidth: "240px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: colors[index],
                  marginRight: "8px",
                }}
              ></div>
              <input
                type="text"
                placeholder={`Search term ${index + 1}`}
                value={query}
                onChange={(e) => handleChange(index, e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "14px",
                  flex: 1,
                }}
              />
            </div>
          ))}

          {queries.length < 5 && (
            <button
              type="button"
              onClick={handleAddField}
              style={{
                backgroundColor: "#e8f0fe",
                color: "#4285F4",
                border: "1px solid #4285F4",
                borderRadius: "20px",
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "13px",
                flex: "0 1 auto",
              }}
            >
              + Compare
            </button>
          )}

          <button
            type="submit"
            style={{
              backgroundColor: "#0F9D58",
              color: "#fff",
              border: "none",
              borderRadius: "20px",
              padding: "8px 20px",
              cursor: "pointer",
              fontSize: "13px",
              flex: "0 1 auto",
            }}
          >
            Search
          </button>
        </div>

        {/* Dropdowns Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "12px",
            width: "100%",
          }}
        >
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={dropdownStyle}
          >
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            style={dropdownStyle}
          >
            <option>Past 7 days</option>
            <option>Past 30 days</option>
            <option>Past 12 months</option>
            <option>Past 5 years</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={dropdownStyle}
          >
            <option>All categories</option>
            <option>Technology</option>
            <option>Health</option>
            <option>Sports</option>
            <option>Entertainment</option>
          </select>

          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            style={dropdownStyle}
          >
            <option>Web Search</option>
            <option>Image Search</option>
            <option>News Search</option>
            <option>Google Shopping</option>
            <option>YouTube Search</option>
          </select>
        </div>
      </form>
    </div>
  );
};

const dropdownStyle = {
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderRadius: "20px",
  fontSize: "13px",
  backgroundColor: "#fff",
  minWidth: "150px",
  outline: "none",
  cursor: "pointer",
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
};

export default SearchBar;
