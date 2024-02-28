import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const sessionUser = Cookies.get("connect.user");
  const sessionId = Cookies.get("connect.sid");
  if (!sessionUser || !sessionId) {
    return <Navigate to="/enterPage" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
