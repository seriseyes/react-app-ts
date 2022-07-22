import {handler} from "../../../utils/Handler";
import {Auth} from "../model/Auth";
import {AxiosError} from "axios";

export const login = async (model: Auth) => {
    try {
        /*const res = await axios.post("/auth/login", model);
        return res.data;*/
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('token');
            }, 1500);
        });
    } catch (e) {
        handler(e as AxiosError);
    }
}
