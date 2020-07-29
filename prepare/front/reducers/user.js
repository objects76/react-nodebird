
const initState = {
    isLoggedIn: false,
    user: null,
    signupData: {},
    loginData: {},
    user: null,
};

// login, { id, password}
// logout
export function reduxUserAction(type, data) { return { type, data }; };


const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            };
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            console.error('invalid action:', action.type);
            return state;
    }
}

export default userReducer;