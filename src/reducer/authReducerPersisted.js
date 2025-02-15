import { persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['token', 'email', 'expirationTime', 'creationTime', 'role', 'isLogged'],
};

const authReducerPersisted = persistReducer(authPersistConfig, authReducer);

export default authReducerPersisted;
