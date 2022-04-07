import {useEffect} from "react";
import auth from "../services/authService";
import {toast} from "react-toastify";
const Logout = () => {
    useEffect(()=>{
        auth.logout();
        toast.info("You are logout Successfully");
        window.location = "/";
    },[])
    return null;
}

export default Logout;
