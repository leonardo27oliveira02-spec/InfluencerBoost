import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./home.js";

export default function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Header),
    React.createElement(Home),
    React.createElement(Footer)
  );
}