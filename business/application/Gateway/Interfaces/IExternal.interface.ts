import { TCepConsulte } from "../../../models/entities/response/CepConsulte";

export interface IExternalGateway {
  getAddressByZipCode(zipCode: string): Promise<TCepConsulte>;
};
