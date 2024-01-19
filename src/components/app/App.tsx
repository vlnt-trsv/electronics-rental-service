import { Routes, Route } from "react-router-dom";
import "./App.scss";

import EnterPage from "@/pages/EnterPage.tsx";
import EnterItem from "../enterPage/enterItem/EnterItem.tsx";
import Layout from "@/pages/Layout.tsx";
import NotFound from "../notFound/NotFound.tsx";
import EnterClient from "../enterPage/enterClient/EnterClient.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/enterPage" element={<EnterPage />}>
          <Route index element={<EnterItem />} />
          <Route path="enterClient" element={<EnterClient />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
