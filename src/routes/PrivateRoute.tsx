import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  
  // Проверка isAuthenticated и наличия токена в localStorage
  const isValidUser = isAuthenticated && localStorage.getItem("authToken");

  return isValidUser ? <Outlet /> : <Navigate to="/enterPage" />;
};

export default PrivateRoute;
