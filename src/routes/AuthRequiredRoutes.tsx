import { getLocalStorageProperty } from "@utils/localProperty";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequiredRoutes = () => {
  const token = getLocalStorageProperty("session", "token");

  const renderRoutes = (): JSX.Element => {
    if (!token) return <Navigate to={`/login`} replace />;

    return <Outlet />;
  };
  
  return renderRoutes();
};

export default AuthRequiredRoutes;
