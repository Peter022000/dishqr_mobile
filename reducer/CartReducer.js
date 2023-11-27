const initialState = {
    dishes: [],
    tableNoId: '',
    paymentMethod: '',
    cost: '',
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                dishes: action.payload.data.order,
                tableNoId: action.payload.data.tableNoId,
                paymentMethod: action.payload.data.paymentMethod,
                cost: action.payload.data.cost
            };
        case 'REMOVE_FROM_CART':
            return {
                dishes: action.payload.data.order,
                tableNoId: action.payload.data.tableNoId,
                paymentMethod: action.payload.data.paymentMethod,
                cost: action.payload.data.cost
            };
        default:
            return state;
    }
};

export default CartReducer;
