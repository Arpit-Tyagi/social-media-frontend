import { ActionType } from "../constants/actions-type";

const initialState = {
    user:{}
}

export const userReducer = (state =initialState, action) =>{

    switch(action.type){

        case ActionType.User_Register:
            return {...state, user: action.payload };

        case ActionType.User_Login:
            return {...state, user: action.payload };

        default :
        return state;

        }

}