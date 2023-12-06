import {ACCEPT_ORDER, ADD_TO_CART, CLEAR, REMOVE_FROM_CART, SAVE_PAYMENT_METHOD} from '../types/cartTypes';

const initialState = {
    dishes: [],
    tableNoId: '6474c9699998a17581e0ec47',
    paymentMethod: null,
    cost: '',
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FROM_CART:
        case ADD_TO_CART:
            return {
                dishes: action.payload.data.order,
                tableNoId: action.payload.data.tableNoId,
                paymentMethod: action.payload.data.paymentMethod,
                cost: action.payload.data.cost
            };
        case ACCEPT_ORDER:
        case CLEAR:
            return {
                ...initialState
            };
        case SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload.data,
            };
        default:
            return state;
    }
};

export default cartReducer;
