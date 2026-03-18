function Card({ title, value }) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: "15px",
        padding: "20px",
        width: "200px",
        color: "white",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      }}
    >
      <h4 style={{ opacity: 0.8 }}>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default Card;