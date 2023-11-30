import React, {useState} from 'react';
import Register from '../screens/Register';
import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountHome from '../screens/AccountHome'
import {useDispatch, useSelector} from 'react-redux';
import {isExpired} from '../actions/authAction';
import Home from '../screens/Home';

const AccountTabs = ({ props }) => {

    const Stack = createNativeStackNavigator();

    const dispatch = useDispatch();

    dispatch(isExpired());

    const isLogged = useSelector((state) => state.auth.isLogged);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                !isLogged ?
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </> : <Stack.Screen name="Home" component={Home} />
            }
        </Stack.Navigator>
    );
};

export default AccountTabs;
