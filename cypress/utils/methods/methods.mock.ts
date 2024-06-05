import { baseUrl } from "../../../axios/axios.instances";
import { AuthMock } from "../mocks/Autentication.mock";

type InterceptType = {
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH",
  url: string,
  statusCode: number,
  response?: any,
  delay?: number,
  baseUrlParam?: string
  header?: any
};

export const Intercept = ({  method, url, statusCode, response, delay, baseUrlParam, header}: InterceptType) => {
  return cy.intercept(
    {
      method: method,
      url: (baseUrlParam ?? baseUrl) + url,
      headers: header ?? {}
    },
    {
      statusCode: statusCode,
      body: response,
      delay: delay ?? 0
    }
  );
};

export const Login = () => {
  return cy.window().then((win) => {
    const token = {
      token: AuthMock.loginAdmin.accessToken,
      refreshToken: AuthMock.loginAdmin.refreshToken,
    };
    win.localStorage.setItem("session", JSON.stringify(token));
  })
};
