import {user_request, get_user_failed, get_user_success} from '../types';
import axios from 'axios';

export const usersList = () => {
    return (dispatch) => {
        dispatch({
            type: user_request
        })
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            dispatch({
                type: get_user_success,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: get_user_failed,
                payload: error.message
            })
        })
    }
}