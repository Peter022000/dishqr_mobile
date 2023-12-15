import {ACCEPT_ORDER, ADD_TO_CART, CLEAR, REMOVE_FROM_CART, SAVE_PAYMENT_METHOD} from '../types/cartTypes';

const initialState = {
    dishes: [],
    tableNoId: '6576b67b0d86b15e669bff3f',
    paymentMethod: null,
    cost: '',
    discount: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FROM_CART:
        case ADD_TO_CART:
            return {
                dishes: action.payload.data.orderDishesDto,
                tableNoId: action.payload.data.tableNoId,
                paymentMethod: action.payload.data.paymentMethod,
                cost: action.payload.data.cost,
                discount: action.payload.data.orderDiscountDto,
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
