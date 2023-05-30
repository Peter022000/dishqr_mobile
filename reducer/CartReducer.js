import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        tableNumber: ''
    },
    reducers:{
        setTableNumber: (state,action) => {
            state.tableNumber = action.payload;
        },
        addToCart : (state,action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id)
            if(itemPresent){
                itemPresent.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1});
            }

            const itemToast = state.cart.find((item) => item.id === action.payload.id)

            Toast.show({
                type: 'success',
                text1: 'Dodano do koszyka',
                text2: itemToast.name + ' x' + itemToast.quantity
            });
        },
        removeFromCart :(state,action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        incrementQty: (state,action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id)
            itemPresent.quantity++;
        },
        decrementQty : (state,action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent.quantity === 1){
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }else{
                itemPresent.quantity--;
            }
        },
        clearCart: (state,action) => {
            state.cart = [];
            state.tableNumber = '';
        }
    }
})


export const {addToCart,removeFromCart,incrementQty,decrementQty, clearCart, setTableNumber} = cartSlice.actions;

export default cartSlice.reducer;
