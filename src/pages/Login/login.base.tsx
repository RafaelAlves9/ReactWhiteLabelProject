import LoginComponent from "./login.component";
import UseLoginController from "./login.controller";

const login = () => {
  const controller = UseLoginController();
  return <LoginComponent controller={controller} />;
};

export default login;
