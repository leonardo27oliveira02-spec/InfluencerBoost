export default function Home() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ferramentas do InfluencerBoost</h2>

      <div style={styles.grid}>
        
        {/* Gerador de ideias */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Gerador de Ideias</h3>
          <p style={styles.cardText}>Receba ideias prontas para vídeos, posts e stories.</p>
        </div>

        {/* Gerador de legendas */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Legendas Instantâneas</h3>
          <p style={styles.cardText}>Gere legendas otimizadas para viralizar.</p>
        </div>

        {/* Análises da página */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Análises Inteligentes</h3>
          <p style={styles.cardText}>Veja pontos fortes e fracos do seu conteúdo.</p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
  card: {
    padding: "16px",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  cardText: {
    fontSize: "14px",
    color: "#555",
  },
};