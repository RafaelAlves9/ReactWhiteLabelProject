import { jwtDecode } from 'jwt-decode';
import { TJWT } from "../../business/models/types/TJwt";

export const getLocalStorageProperty = (
  property: string,
  accessObject: string
): string => {
  const localStorageItem = localStorage.getItem(property);
  if (
    localStorageItem !== null &&
    JSON.parse(localStorageItem).hasOwnProperty(accessObject)
  ) {
    const parsedObjectProperty = JSON.parse(localStorageItem)[accessObject];
    return parsedObjectProperty;
  } else {
    return "";
  }
};

export const getTokenProperty = (tokenParam?: string) => {
  let token = tokenParam ?? getLocalStorageProperty("session", "token");
  if(!!token){
    var decoded: TJWT = jwtDecode(token);
    return decoded;
  };

  return null;
};
