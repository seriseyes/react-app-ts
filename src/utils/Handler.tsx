import {AxiosError} from "axios";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

export function handler(err: AxiosError) {
    if (!err || !err.response) {
        toast.error("Сүлжээний алдаа гарлаа");
        return;
    }
    if (err.response.status === 401) {
        toast.error(<div>
            Хандалтын хугацаа дууссан байна.
            <Link to={"/login"}> Энд дарж дахин нэвтэрнэ үү</Link>
        </div>, {autoClose: 5000});
        return;
    }
    toast.error(err.response.data ? err.response.data as string : err.message as string);
}
