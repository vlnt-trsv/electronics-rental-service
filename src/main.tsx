import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import "@/app/App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </BrowserRouter>
  // </React.StrictMode>
);
