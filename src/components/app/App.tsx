import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Layout from "@/pages/Layout.tsx";
import NotFound from "../notFound/NotFound.tsx";

import EnterPage from "@/pages/EnterPage.tsx";
import EnterItem from "../enterPage/enterItem/EnterItem.tsx";
import EnterClient from "../enterPage/enterClient/EnterClient.tsx";

import AccountPage from "@/pages/AccountPage.tsx";
import PersonalDataInfo from "../accountPage/personalDataInfo/PersonalDataInfo.tsx";
import PaymentsInfo from "../accountPage/paymentsInfo/PaymentsInfo.tsx";
import NotificationInfo from "../accountPage/notificationInfo/NotificationInfo.tsx";
import Doc1Info from "../accountPage/documentsInfo/Doc1Info.tsx";
import Doc2Info from "../accountPage/documentsInfo/Doc2info.tsx";
import Doc3Info from "../accountPage/documentsInfo/Doc3Info.tsx";
import BankCardInfo from "../accountPage/bankCardInfo/BankCardInfo.tsx";
import DevicesInfo from "../accountPage/devicesInfo/DevicesInfo.tsx";
import MySubsInfo from "../accountPage/mySubsInfo/MySubsInfo.tsx";
import ContactInfo from "../accountPage/contatsInfo/ContactInfo.tsx";
import FaqInfo from "../accountPage/faqInfo/FaqInfo.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/enterPage" element={<EnterPage />}>
          <Route index element={<EnterItem />} />
          <Route path="enterClient/:phoneNumber" element={<EnterClient />} />
        </Route>
        <Route path="/accountPage" element={<AccountPage />}>
          {/* Далее Персональная навигация - данные пользователя */}
          <Route path="personalDataInfo" element={<PersonalDataInfo />} />
          <Route path="bankInfo" element={<BankCardInfo />} />
          <Route path="notificationInfo" element={<NotificationInfo />} />
          <Route path="doc1" element={<Doc1Info />} />
          <Route path="doc2" element={<Doc2Info />} />
          <Route path="doc3" element={<Doc3Info />} />
          {/* Далее навигационные кнопки - основные */}
          <Route path="devices" element={<DevicesInfo />} />
          <Route path="subs" element={<MySubsInfo />} />
          <Route path="payments" element={<PaymentsInfo />} />
          <Route path="contacts" element={<ContactInfo />} />
          <Route path="faq" element={<FaqInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
