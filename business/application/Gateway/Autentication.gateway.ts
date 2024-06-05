import { instances } from "../../../axios/axios.instances";
import { IAutenticationGateway } from "./Interfaces/IAutentication.interface";
import { TLoginRequester } from "@request/UserRequest";
import { TAuthenticationUserResponse } from "@response/AuthenticationResponse";
import { getLocalStorageProperty } from "@utils/localProperty";
import { handleStatusResponse } from "@utils/handleStatusResponse";
import { Base } from "./Base.gateway";
import { setLoading } from "@store/reducers/loading/loadingSlice";

export class AutenticationGateway extends Base implements IAutenticationGateway {
    
    public login = async (data: TLoginRequester): Promise<boolean> => {
        this._dispatch(setLoading(true));
        return await this._public.post("Authentication/generate_access_token", {
            "login": data.login,
            "password": data.password
        })
        .then((requester) => {
            const result: TAuthenticationUserResponse = requester.data;
            this.setterAxiosToken(result.accessToken);
            this.setterLocalProperty("session", result);
            return true;
        })
        .catch((error) => {
            handleStatusResponse(error.response);
            return false;
        })
        .finally(() => {
          this._dispatch(setLoading(false));
        });
    };

    public refreshToken = async (): Promise<void> => {
        const accessToken = getLocalStorageProperty("session", "token");
        const refreshToken = getLocalStorageProperty("session", "refreshToken");

        await this._private.post("Authentication/update_access_token", {
            "accessToken": accessToken,
            "refreshToken": refreshToken,
        })
        .then((requester) => {
            const result: TAuthenticationUserResponse = requester.data;

            this.setterAxiosToken(result.accessToken);
            this.setterLocalProperty("session", result);
        })
        .catch((error) => {
            return error;
        });
    };

    public logout = async (): Promise<void> => {
        localStorage.removeItem("session");
        window.location.href = "/login";
    };

    setterAxiosToken(token: string): void {
        instances.private.defaults.headers.common.Authorization = `Bearer ${token}`;
    };

    setterLocalProperty(name: string, user: TAuthenticationUserResponse): void {
        let params: { token?: string, refreshToken?: string } = {};
        params.token = user.accessToken;
        params.refreshToken = user.refreshToken;
        localStorage.setItem(name, JSON.stringify(params));
    };
};
