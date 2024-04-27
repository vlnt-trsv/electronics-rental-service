import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRouter = () => {
  const sessionUser = Cookies.get("connect.user");
  const sessionId = Cookies.get("connect.sid");
  if (!sessionUser || !sessionId) {
    return <Navigate to="/enterPage" />;
  }

  return <Outlet />;
};

export default PrivateRouter;
