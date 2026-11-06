import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./NotFound.jsx";

const isHomePage = window.location.pathname === "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {isHomePage ? <App /> : <NotFound />}
  </StrictMode>
);