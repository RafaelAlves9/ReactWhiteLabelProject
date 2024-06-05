import { getLocalStorageProperty } from "@utils/localProperty";
import { AxiosBuilder } from "./axios.builder";
import { handleStatusResponse } from "@utils/handleStatusResponse";

const token = getLocalStorageProperty("session", "token") || "";
export const baseUrl = typeof Cypress === 'undefined' ? import.meta.env.VITE_ETRACK_API_URL : Cypress.env('VITE_ETRACK_API_URL');

const instances = {
  public: AxiosBuilder.build()
    .withDefaultHeader()
    .toDomain()
    .initInstance(),
  private: AxiosBuilder.build()
    .withUrl(baseUrl)
    .withHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin' : '*',
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    })
    .haveCredentials()
    .toDomain()
    .initInstance(),
};

instances.private.interceptors.request.use(
  async (config) => {
    if (config.headers.Authorization === undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    };

    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

instances.private.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    handleStatusResponse(error.response);
    return Promise.reject(error);
  }
);

export { instances };
