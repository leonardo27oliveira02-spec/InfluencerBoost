export default function Footer() {
  return React.createElement(
    "footer",
    { style: styles.footer },
    React.createElement(
      "p",
      { style: styles.text },
      "© 2025 InfluencerBoost • Todos os direitos reservados"
    )
  );
}

const styles = {
  footer: {
    width: "100%",
    padding: "14px 0",
    borderTop: "1px solid #e5e5e5",
    textAlign: "center",
    marginTop: "40px",
    backgroundColor: "#fafafa",
  },
  text: {
    margin: 0,
    fontSize: "14px",
    color: "#555",
  },
};