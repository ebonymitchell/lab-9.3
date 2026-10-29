import React from "react";
import ReactDOM from "react-dom/client";

// Import global and application styles.
import "./index.css";
import "./App.css";

// Import the main application component.
import App from "./App";

// Render the application inside the root HTML element.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
