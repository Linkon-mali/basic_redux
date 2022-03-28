import {user_request, get_user_failed, get_user_success} from '../types';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case user_request:
            return{
                ...state,
                loading: true
            }
        case get_user_success:
            return{
                ...state,
                loading: false,
                users: action.payload
            }
        case get_user_failed:
            return{
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}