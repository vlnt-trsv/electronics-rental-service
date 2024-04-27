import { Routes, Route } from "react-router-dom";

import Layout from "@/pages/Layout.tsx";
import NotFound from "@/components/notFound/NotFound.tsx";

import EnterPage from "@/pages/EnterPage.tsx";
import EnterItem from "@/components/enterPage/enterItem/EnterItem.tsx";
import EnterClient from "@/components/enterPage/enterClient/EnterClient.tsx";

import AccountPage from "@/pages/AccountPage.tsx";
import PersonalDataInfo from "@/components/accountPage/personalDataInfo/PersonalDataInfo.tsx";
import PaymentsInfo from "@/components/accountPage/paymentsInfo/PaymentsInfo.tsx";
import NotificationInfo from "@/components/accountPage/notificationInfo/NotificationInfo.tsx";
import Doc1Info from "@/components/accountPage/documentsInfo/Doc1Info.tsx";
import Doc2Info from "@/components/accountPage/documentsInfo/Doc2info.tsx";
import Doc3Info from "@/components/accountPage/documentsInfo/Doc3Info.tsx";
import BankCardInfo from "@/components/accountPage/bankCardInfo/BankCardInfo.tsx";
import DevicesInfo from "@/components/accountPage/devicesInfo/DevicesInfo.tsx";
import SubsInfo from "@/components/accountPage/subsInfo/SubsInfo.tsx";
import ContactInfo from "@/components/accountPage/contatsInfo/ContactInfo.tsx";
import FaqInfo from "@/components/accountPage/faqInfo/FaqInfo.tsx";
import ProductInfo from "@/components/accountPage/devicesInfo/productInfo/ProductInfo.tsx";
import ProductRegistrationInfo from "@/components/accountPage/devicesInfo/productRegistrationInfo/ProductRegistrationInfo.tsx";
import ProductDetailsInfo from "@/components/accountPage/devicesInfo/productDetailsInfo/ProductDetailsInfo.tsx";
import CategoriesInfo from "@/components/accountPage/devicesInfo/categoriesInfo/CategoriesInfo.tsx";

// Secure Routes
import PrivateRoute from "@/app/routers/privateRouter";

export const Router = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route index element={<Layout />} />

      <Route path="/enterPage" element={<EnterPage />}>
        <Route index element={<EnterItem />} />
        <Route path="enterClient/:email" element={<EnterClient />} />
      </Route>

      {/* Private Route */}
      <Route element={<PrivateRoute />}>
        <Route path="/accountPage" element={<AccountPage />}>
          {/* Далее Персональная навигация - данные пользователя */}
          <Route path="personalDataInfo" element={<PersonalDataInfo />} />
          <Route path="bankInfo" element={<BankCardInfo />} />
          <Route path="notificationInfo" element={<NotificationInfo />} />
          <Route path="doc1" element={<Doc1Info />} />
          <Route path="doc2" element={<Doc2Info />} />
          <Route path="doc3" element={<Doc3Info />} />
          {/* Далее навигационные кнопки - основные */}
          <Route path="devices" element={<DevicesInfo />}>
            <Route index element={<CategoriesInfo />} />
            <Route path=":categoryId" element={<ProductInfo />} />
            <Route
              path=":categoryId/:productId"
              element={<ProductDetailsInfo />}
            />
            <Route
              path=":categoryId/:productId/order"
              element={<ProductRegistrationInfo />}
            />
          </Route>
          <Route path="subs" element={<SubsInfo />} />
          <Route path="payments" element={<PaymentsInfo />} />
          <Route path="contacts" element={<ContactInfo />} />
          <Route path="faq" element={<FaqInfo />} />
        </Route>
      </Route>

      {/* Public Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
