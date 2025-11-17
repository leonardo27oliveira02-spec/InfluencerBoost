export default function Home() {
  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement("h2", { style: styles.title }, "Ferramentas do InfluencerBoost"),
    React.createElement(
      "div",
      { style: styles.grid },

      React.createElement(
        "div",
        { style: styles.card },
        React.createElement("h3", { style: styles.cardTitle }, "Gerador de Ideias"),
        React.createElement(
          "p",
          { style: styles.cardText },
          "Receba ideias prontas para vídeos, posts e stories."
        )
      ),

      React.createElement(
        "div",
        { style: styles.card },
        React.createElement("h3", { style: styles.cardTitle }, "Legendas Instantâneas"),
        React.createElement(
          "p",
          { style: styles.cardText },
          "Gere legendas otimizadas para viralizar."
        )
      ),

      React.createElement(
        "div",
        { style: styles.card },
        React.createElement("h3", { style: styles.cardTitle }, "Análises Inteligentes"),
        React.createElement(
          "p",
          { style: styles.cardText },
          "Veja pontos fortes e fracos do seu conteúdo."
        )
      )
    )
  );
}

const styles = {
  container: { padding: "20px" },
  title: { fontSize: "24px", fontWeight: "600", marginBottom: "20px" },
  grid: { display: "grid", gridTemplateColumns: "1fr", gap: "16px" },
  card: {
    padding: "16px",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  },
  cardTitle: { fontSize: "18px", fontWeight: "600", marginBottom: "6px" },
  cardText: { fontSize: "14px", color: "#555" },
};