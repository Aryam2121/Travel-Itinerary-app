import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Your main App component
import { BrowserRouter } from "react-router-dom"; // Wrap the App in BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* Single Router Wrapper */}
    <App />
  </BrowserRouter>
);
