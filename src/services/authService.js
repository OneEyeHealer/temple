import jwtDecoder from "jwt-decode";
import http from "./httpService";
import {toast} from "react-toastify";

const apiEndPoint = `auth`;
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndPoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}
export function getActiveUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecoder(jwt);
    } catch (e) {
        toast.error(e);
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}
export default {
    login,
    loginWithJwt,
    logout,
    getActiveUser,
    getJwt,
};
