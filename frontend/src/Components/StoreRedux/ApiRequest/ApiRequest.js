import { UpdateStart, UpdateError,UpdateSuccess } from "../Slice/UserSlice";
import axios from "axios";

export const UpdateUser = async (user, dispatch) => {
    dispatch(UpdateStart());
    try {
        const res = await axios.post("/v1/update", user);
        dispatch(UpdateSuccess(res.data));


    } catch(err) {
        dispatch(UpdateError());
    }
}