import * as actionTypes from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '',
    error: '',
    user: null,
    loading: false    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case actionTypes.PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case actionTypes.LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case actionTypes.LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case actionTypes.LOGIN_USER_FAIL:
            return { 
                ...state, user: null, error: 'Authentication Failed.', password: '', loading: false 
            };
        default:
            return state;
    }
};
