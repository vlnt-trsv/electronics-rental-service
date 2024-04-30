import { Routes, Route } from "react-router-dom";
import { Account, Enter, Main, NotFound } from "@/pages";
import {
  Subscription,
  PersonalData,
  Payments,
  Notification,
  AccountFAQ,
  Contacts,
  PrivacyPolicy,
  ProcessingOfPersonalData,
  ServiceUsageAgreement,
} from "@/widgets";

import DevicesInfo from "@/components/accountPage/devicesInfo/DevicesInfo.tsx";
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
      <Route index element={<Main />} />

      <Route path="/enterPage" element={<Enter />} />

      {/* Private Route */}
      <Route element={<PrivateRoute />}>
        <Route path="/accountPage" element={<Account />}>
          {/* Далее Персональная навигация - данные пользователя */}
          <Route path="personalDataInfo" element={<PersonalData />} />
          <Route path="notificationInfo" element={<Notification />} />
          <Route path="doc1" element={<ServiceUsageAgreement />} />
          <Route path="doc2" element={<PrivacyPolicy />} />
          <Route path="doc3" element={<ProcessingOfPersonalData />} />
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
          <Route path="subs" element={<Subscription />} />
          <Route path="payments" element={<Payments />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="faq" element={<AccountFAQ />} />
        </Route>
      </Route>

      {/* Public Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
