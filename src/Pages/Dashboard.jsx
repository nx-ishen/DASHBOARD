import Card from "../components/Card";

function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a, #9333ea)",
        color: "white",
      }}
    >
      <h2>Dashboard</h2>

      {/* Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Earnings" value="$628" />
        <Card title="Share" value="2434" />
        <Card title="Likes" value="1259" />
        <Card title="Rating" value="8.5" />
      </div>

      {/* Chart Section */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h3>Sales Analytics</h3>

        <div
          style={{
            height: "200px",
            marginTop: "10px",
            display: "flex",
            alignItems: "flex-end",
            gap: "10px",
          }}
        >
          {/* Fake animated bars */}
          <div style={{ width: "30px", height: "60%", background: "#6366f1" }}></div>
          <div style={{ width: "30px", height: "40%", background: "#8b5cf6" }}></div>
          <div style={{ width: "30px", height: "80%", background: "#ec4899" }}></div>
          <div style={{ width: "30px", height: "50%", background: "#22c55e" }}></div>
        </div>
      </div>

      {/* Activity Section */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h3>Recent Activity</h3>

        <ul style={{ lineHeight: "30px" }}>
          <li>✔ User purchased a product</li>
          <li>✔ New signup from India</li>
          <li>✔ Server updated</li>
          <li>✔ Payment received</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;