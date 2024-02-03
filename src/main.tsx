import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App.tsx";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ApiProvider from "./context/ApiProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ApiProvider>
        <App />
      </ApiProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
