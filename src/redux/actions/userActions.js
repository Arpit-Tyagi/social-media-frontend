import { ActionType } from "../constants/actions-type.js";
import ApiServce from '../../services/ApiService.js'
import { toast } from 'react-toastify';


export const userRegister = (user) => {

  return async () => {
    try {
      await ApiServce.userRegistration(user);
      toast.success("User Registered", {
        position: "top-center",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //history.push('/AddExpense'); 
    } catch {
      toast.error("User Registration Failed", {
        position: "top-center",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
}

export const userLogin = (user, navigate) => {
  return async (dispatch) => {
    try {
      const res = await ApiServce.userLogin(user);
      dispatch({ type: ActionType.User_Login, payload: res.data });
      toast.success("User Logged In", {
        position: "top-center",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/');
    } catch {
      toast.error("User Login Failed", {
        position: "top-center",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

}
export const userLogout = (navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.User_Logout, payload: null });
      toast.success("Logged Out", {
        position: "top-center",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
     // navigate('/');
    } catch {
      toast.error("User Logout Failed", {
        position: "top-center",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
}
