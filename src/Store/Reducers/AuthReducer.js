
let initialState = {
    name: '',
    email: '',
    expiresAt: '',
    isLoggedin: false,
    expiryTimer: null
}

if(localStorage.getItem('authenticationData')) {
    initialState = JSON.parse(localStorage.getItem('authenticationData'));
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            const updatedState = {
                ...state,
                name: action.name,
                email: action.email,
                expiresAt: action.expiresAt,
                isLoggedin: action.isLoggedin,
                expiryTimer: action.expiryTimer             
            }
            localStorage.setItem("authenticationData", JSON.stringify(updatedState));
            return updatedState;
        case 'LOGOUT': 
            clearTimeout(state.expiryTimer);
            localStorage.removeItem("authenticationData");

            const updatedLogoutState = {
                name: '',
                email: '',
                expiresAt: '',
                isLoggedin: false,
                expiryTimer: null
            }
            
            return updatedLogoutState;

        default: 
            return state;
        
    }
}

export default authReducer;