function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        padding: "20px",
        color: "white",
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)",
        borderRight: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>⚡ Dashboard</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "40px" }}>
        <li>🏠 Dashboard</li>
        <li>📊 Charts</li>
        <li>📝 Forms</li>
        <li>📧 Email</li>
        <li>👤 Profile</li>
        <li>⚙ Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;