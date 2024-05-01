import axios from "axios";
import { loginStart, loginFail, loginSuccess, createStart, createSuccess, createFail } from "./slice/authSlice";

// authSlice
export const loginUser = async(user, dispatch, navigate) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://127.0.0.1:8000/api/auth/login/", user)
        dispatch(loginSuccess(res.data));
        console.log(res.data);
        navigate("/");
    } catch (err) {
        dispatch(loginFail());
        if (err.response && err.response.data) {
            alert(err.response.data.message);
        } else {
            console.log('Không thể kết nối severs.');
        }
    }
};

export const registerUser = async(user, dispatch, navigate) =>{
    dispatch(createStart());
    try {
        const res = await axios.post("http://127.0.0.1:8000/api/auth/register/", user)
        dispatch(createSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(createFail());
        if (err.response && err.response.data) {
            alert(err.response.data.message.email);
        } else {
            console.log('Không thể kết nối severs.');
        }   
    }
};
