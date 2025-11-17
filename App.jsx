import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

export default function App() {
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  main: {
    flex: 1,
    padding: "20px",
  },
};