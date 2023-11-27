import axios from 'axios';
import Toast from 'react-native-toast-message';

export const addToCart = (dishId) => async (dispatch, getState) => {
    try {
        const state = getState();

        let body = "";

        if(state.cart.dishes !== [] && state.cart.paymentMethod !== "") {
            body = JSON.stringify({
                tableNo: state.cart.tableNoId,
                cost: state.cart.cost,
                order: state.cart.dishes,
                paymentMethod: state.cart.paymentMethod,
            });
        } else if(state.cart.dishes === [] && state.cart.paymentMethod !== "") {
            body = JSON.stringify({
                tableNo: state.cart.tableNoId,
                cost: state.cart.cost,
                paymentMethod: state.cart.paymentMethod,
            })
        } else if(state.cart.dishes !== [] && state.cart.paymentMethod === "") {
            body = JSON.stringify({
                tableNo: state.cart.tableNoId,
                cost: state.cart.cost,
                order: state.cart.dishes
            })
        } else if(state.cart.dishes === [] && state.cart.paymentMethod === "") {
            body = JSON.stringify({
                tableNo: state.cart.tableNoId,
                cost: state.cart.cost,
            })
        }

        // console.log(body);

        const response = await axios.post('http://192.168.1.2:8080/order/addToOrder?dishId=' + dishId, body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;

        const newDish = data.order.find(item => item.dish.id === dishId);

        Toast.show({
            type: 'success',
            text1: 'Dodano do koszyka',
            text2: newDish.dish.name + ' x' + newDish.quantity
        })

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
