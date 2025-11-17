import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";

export default function App() {
  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement(Header),
    React.createElement("main", { style: styles.main }, React.createElement(Home)),
    React.createElement(Footer)
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