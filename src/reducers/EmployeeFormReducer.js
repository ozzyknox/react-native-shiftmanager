import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case actionTypes.EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case actionTypes.EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
