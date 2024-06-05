import mocks from "../mocks/imports.mock";
import { Intercept } from "../methods/methods.mock";

const getUserByDocument = (document: string) => {
  const documentWithNoMask = document.replace(/\D/g, '');
  Intercept({
    method: 'GET',
    statusCode: 200,
    url: `User/get_user_by_document?document=${documentWithNoMask}`,
    response: mocks.Auth.loginAdmin,
    baseUrlParam: Cypress.env('VITE_IDENTITY_API_URL'),
  }).as('getUserByDocument');
};

export const AuthenticationCyGateway = {
  getUserByDocument
};
