export default function Header() {
  return React.createElement(
    "header",
    { style: styles.header },
    React.createElement("h1", { style: styles.title }, "InfluencerBoost")
  );
}

const styles = {
  header: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },
};