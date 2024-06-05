import { TLoginRequester } from "@request/UserRequest";

export interface IAutenticationGateway {
    login(data: TLoginRequester): Promise<boolean>;
};
