import { AutenticationGateway } from "@gateway/Autentication.gateway";
import { logoutMethod } from "./logoutMethod";
import { toastMessage } from "./toastMessage";
import { getTokenProperty } from "./localProperty";

export const handleStatusResponse = (response: any) => {
  const status = response.status;

  switch (status){
    case 400:
      toastMessage(response.data[0].value, "error");
      break;
    case 401:
      logoutMethod();
      break;
    case 403:
      window.location.href = `/not-authorized`;
      break;
    case 429:
      toastMessage("Você ultrapassou o limite de requisições por minuto", "error");
      break;
    default:
      toastMessage(`Ocorreu um erro inesperado, contacte o administrador - ${status}`, "error");
      break;
  };
};

export const checkExpiration = (): boolean => {
  const expiry: any = getTokenProperty()?.exp;
  if (!!expiry) {
    const expirationDate = new Date(expiry * 1000);
    const currentDate = new Date();
    
    const timeDifference = expirationDate.getTime() - currentDate.getTime();
    const fiftyFiveMinutesInMilliseconds = 55 * 60 * 1000;

    return timeDifference <= fiftyFiveMinutesInMilliseconds;
  };
  return true;
};

export const handleRefreshToken = async () => {
  const autenticationGateway = new AutenticationGateway();

  if(checkExpiration()){
    autenticationGateway.refreshToken();
  };
};
