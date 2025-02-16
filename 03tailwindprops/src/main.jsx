import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./Card.jsx";
createRoot(document.getElementById("root")).render(
  <>
    {" "}
    <App />
    {""}
    <Card username="Nasir" />
    <Card username="Dar" post="Software Engineer" />
    <Card />
  </>
);
