import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./screens/CartReducer";

export default configureStore({
    reducer:{
        cart:CartReducer
    }
})
