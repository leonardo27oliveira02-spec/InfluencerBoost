export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>InfluencerBoost</h1>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    padding: '16px 0',
    borderBottom: '1px solid #e5e5e5',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    margin: 0,
    fontSize: '22px',
    fontWeight: '600',
    color: '#222',
  },
};