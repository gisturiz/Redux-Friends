import { FETCH_START, FETCH_SUCCESS, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS } from '../actions';

const initialState = {
    friends: [],
    error: '',
    isLoggingIn: false,
    deletingFriend: false,
    fetchingFriends: false,
    savingFriends: false,
    updatingFriend: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
            };
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                error: false
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
              ...state,
              fetchingData: false,
              error: '',
              friends: action.payload
            };
        default:
            return state;
    };
}

export default reducer;