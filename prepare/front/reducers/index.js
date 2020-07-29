import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user'
import post from './post'

const initState = {
    user: {
        isLoggedIn: false,
        user: null,
        signupData: {},
        loginData: {},
        user: null,
    },
    post: {
        mainPosts: [],
    }
};

const indexReducer = (state = {}, action) => {
    switch (action.type) {
        case HYDRATE: // for SSR
            console.log('HYDRATE', action);
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
// (old state, action) => new state.
const rootReducer = combineReducers({
    indexReducer,
    user,
    post,
});

export default rootReducer;

