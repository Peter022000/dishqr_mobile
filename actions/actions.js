import axios from 'axios';
import Toast from 'react-native-toast-message';

export const addToCart = (dishId, fromType) => async (dispatch, getState) => {
    try {
        const state = getState();

        let body = JSON.stringify({
            tableNo: state.cart.tableNoId,
            cost: state.cart.cost,
            order: state.cart.dishes,
            paymentMethod: state.cart.paymentMethod});

        const response = await axios.post('http://192.168.1.2:8080/order/addToOrder?dishId=' + dishId, body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;

        const newDish = data.order.find(item => item.dish.id === dishId);

        if(fromType === "fromMenu"){
            Toast.show({
                type: 'success',
                text1: 'Dodano do koszyka',
                text2: newDish.dish.name + ' x' + newDish.quantity
            })
        }

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                data: data // może zawierać dane z serwera, jeśli są potrzebne
            },
        });
    } catch (error) {
        console.error('Error while adding to cart:', error);
    }
};

export const removeFromCart = (dishId) => async (dispatch, getState) => {
    try {
        const state = getState();

        let body = JSON.stringify({
            tableNo: state.cart.tableNoId,
            cost: state.cart.cost,
            order: state.cart.dishes,
            paymentMethod: state.cart.paymentMethod});

        const response = await axios.post('http://192.168.1.2:8080/order/removeFromOrder?dishId=' + dishId, body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                data: data
            },
        });
    } catch (error) {
        console.error('Error while adding to cart:', error);
    }
};
