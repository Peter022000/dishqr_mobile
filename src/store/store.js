import cartReducer from "../reducer/cartReducer";
import { configureStore } from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import authReducerPersisted from '../reducer/authReducerPersisted';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducerPersisted
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

const persistor = persistStore(store);

export { store, persistor };
