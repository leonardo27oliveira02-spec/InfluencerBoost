export default function ToolCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        marginBottom: "16px",
        cursor: "pointer",
        border: "1px solid #333",
        transition: "0.2s",
        fontFamily: "sans-serif",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
        {title}
      </h3>

      <p style={{ marginTop: "8px", opacity: 0.8 }}>
        {description}
      </p>
    </div>
  );
}