import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const login = creds => dispatch => {
    console.log(creds)
    dispatch({ type: FETCH_START });
    axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: FETCH_SUCCESS, payload: res.data.payload })
        })
        .catch(err => console.log(err))
};

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_FRIENDS_FAILURE })
        });
};