export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "16px 24px",
        backgroundColor: "#111",
        color: "#fff",
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: "bold" }}>
        InfluencerBoost 🚀
      </h2>

      <div style={{ opacity: 0.8, fontSize: 16 }}>
        Cresça com inteligência
      </div>
    </nav>
  );
}