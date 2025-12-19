import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [country, setCountry] = useState("India");
  const [profileOpen, setProfileOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false); // ✅ new state for Help popup

  // Toggle handlers
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleNotifications = () => setNotifications(!notifications);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  return (
    <div
      style={{
        background: darkMode
          ? "linear-gradient(90deg, #2c3e50, #4ca1af)"
          : "linear-gradient(90deg, #f8f9fa, #e8f0fe)",
        color: darkMode ? "#fff" : "#000",
        minHeight: "20vh",
        transition: "background 0.5s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 4px",
          height: "50px",
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "none",
          marginBottom: "-5px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            onClick={toggleMenu}
            style={{
              fontSize: "22px",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "6px",
              color: darkMode ? "#fff" : "#333",
            }}
          >
            ☰
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "blue",
              }}
            >
              TrendScope
            </span>
          </div>
        </div>

        {/* Center Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          {["Home", "Explore", "Trending now", "Year in Search", "Help"].map(
            (text) => (
              <a
                key={text}
                href="#"
                onClick={() =>
                  text === "Help"
                    ? setShowHelp(true)
                    : alert(`${text} clicked!`)
                }
                style={{
                  color: darkMode ? "#eaeaea" : "#333",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#ff4081")}
                onMouseOut={(e) =>
                  (e.target.style.color = darkMode ? "#eaeaea" : "#333")
                }
              >
                {text}
              </a>
            )
          )}
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            onClick={() => alert("Search clicked!")}
            style={{ fontSize: "18px", cursor: "pointer" }}
          >
            🔍
          </span>

          <span
            onClick={toggleNotifications}
            style={{ fontSize: "18px", cursor: "pointer" }}
          >
            🔔
          </span>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "14px",
              color: darkMode ? "#fff" : "#000",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option>India</option>
            <option>United States</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>

          <button
            onClick={toggleDarkMode}
            style={{
              background: darkMode ? "#f9d71c" : "#202124",
              color: darkMode ? "#000" : "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div
            onClick={toggleProfile}
            style={{
              backgroundColor: "#673ab7",
              color: "white",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            V
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "250px",
            height: "100%",
            backgroundColor: darkMode ? "#1e272e" : "#fff",
            boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
            padding: "20px",
            zIndex: 15,
          }}
        >
          <h3>Menu</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Home", "Explore", "Trending now", "Year in Search"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => alert(`${item} selected`)}
                  style={{
                    margin: "12px 0",
                    cursor: "pointer",
                    color: darkMode ? "#fff" : "#333",
                  }}
                >
                  {item}
                </li>
              )
            )}
          </ul>
          <button
            onClick={toggleMenu}
            style={{
              marginTop: "20px",
              backgroundColor: "#4285f4",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Notifications Popup */}
      {notifications && (
        <div
          style={{
            position: "absolute",
            right: "50px",
            top: "60px",
            background: "#fff",
            color: "#000",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <p>No new notifications 🔕</p>
        </div>
      )}

      {/* Profile Dropdown */}
      {profileOpen && (
        <div
          style={{
            position: "absolute",
            right: "40px",
            top: "60px",
            background: "#fff",
            color: "#000",
            padding: "10px 15px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            zIndex: 20,
          }}
        >
          <p style={{ margin: 0, cursor: "pointer" }}>Settings ⚙️</p>
          <p style={{ margin: 0, cursor: "pointer" }}>Logout 🚪</p>
        </div>
      )}

      {/* 💡 Help Popup */}
      {showHelp && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              width: "80%",
              maxWidth: "700px",
              animation: "fadeIn 0.3s ease-in-out",
              color: "#333",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#ff4081",
                marginBottom: "20px",
              }}
            >
              🌸 How to Use TrendScope
            </h2>

            <ol style={{ lineHeight: "1.8", fontSize: "16px" }}>
              <li>
                Use the <b>Search Bar</b> to type a keyword or topic you want to
                explore.
              </li>
              <li>
                Add multiple topics using the <b>+</b> button to compare trends.
              </li>
              <li>
                Choose your <b>Country</b>, <b>Category</b>, and <b>Search Type</b> from the dropdowns.
              </li>
              <li>Click <b>Search</b> to view real-time trend comparisons.</li>
              <li>
                Use <b>Dark Mode</b> toggle for better viewing comfort anytime.
              </li>
            </ol>

            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <button
                onClick={() => setShowHelp(false)}
                style={{
                  backgroundColor: "#ff4081",
                  color: "white",
                  padding: "10px 25px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "15px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#e23370")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#ff4081")
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
