import axios from 'axios';
import Toast from 'react-native-toast-message';
import {CHANGE_PASSWORD_SUCCESS, EXPIRED, LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../types/authTypes';
import { decode } from "base-64";
import { jwtDecode } from "jwt-decode";

global.atob = decode;

export const login = (email, password) => async (dispatch, getState) => {
    try {

        const body = JSON.stringify({
            email: email,
            password: password
        })

        const response = await axios.post('http://192.168.1.2:8080/users/signin', body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const token = response.data.token;

        const decoded = jwtDecode(token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token: response.data.token,
                email: decoded.sub,
                expirationTime: decoded.exp,
                creationTime: decoded.iat,
                role: decoded.role[0],
            },
        });

        Toast.show({
            type: 'success',
            text1: 'Zalogowano',
        });
    } catch (error) {
        Toast.show({
            type: 'error',
            text1: 'Błędny email lub hasło'
        });
    }
};

export const changePassword = (oldPassword, newPassword, repeatNewPassword) => async (dispatch, getState) => {
    try {

        const body = JSON.stringify({
            oldPassword: oldPassword,
            newPassword: repeatNewPassword,
            repeatNewPassword: repeatNewPassword
        })

        const state = getState();
        const token = state.auth.token;

        const response = await axios.put('http://192.168.1.2:8080/users/changePassword', body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        dispatch({
            type: CHANGE_PASSWORD_SUCCESS
        });

        Toast.show({
            type: 'success',
            text1: 'Zmieniono hasło',
        });
    } catch (error) {
        Toast.show({
            type: 'error',
            text1: 'Jedno z haseł nie pasuje'
        });
    }
};


export const isExpired = () => async (dispatch, getState) => {
    try {

        const state = getState();

        const dateNow = new Date();
        if(state.auth.exp < dateNow.getTime()) {
            dispatch({
                type: EXPIRED,
            });
            Toast.show({
                type: 'error',
                text1: 'Token wygasł',
            });
        }
    } catch (error) {
        Toast.show({
            type: 'error',
            text1: 'Login failed',
            text2: error.message,
        });
        console.error('Error during login:', error);
    }
};


export const logOut = () => (dispatch) => {
    // You might want to add a logout API call here if needed

    dispatch({
        type: LOGOUT_SUCCESS,
    });

    Toast.show({
        type: 'info',
        text1: 'Wylogowano',
    });
};
