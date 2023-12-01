import cartReducer from "../reducer/cartReducer";
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from '../reducer/authReducer';
import { persistStore } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import authReducerPersisted from '../reducer/authReducerPersisted';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducerPersisted
    },
    middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
