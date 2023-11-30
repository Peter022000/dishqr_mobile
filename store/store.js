import cartReducer from "../reducer/cartReducer";
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from '../reducer/authReducer';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    },
    middleware: [thunk],
});

export default store;
