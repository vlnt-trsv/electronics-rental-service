import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App.tsx";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
