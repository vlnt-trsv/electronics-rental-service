import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import "@/app/App.css";
// import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <BrowserRouter basename="/electronics-rental-service">
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </BrowserRouter>
  // </React.StrictMode>
);
