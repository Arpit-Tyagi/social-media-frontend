import { ActionType } from "../constants/actions-type";

const initialState = {
    post: []
}

export const postReducer = (state = initialState.post, action) => {

    switch (action.type) {

        case ActionType.Post_Get:
            return { ...state, post: action.payload };

        default:
            return state;

    }

}