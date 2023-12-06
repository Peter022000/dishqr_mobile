import {Button, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import InputField from '../components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {isExpired} from '../actions/authAction';
import Login from './Login';
import Register from './Register';
import {CommonActions} from '@react-navigation/native';

const AccountHome = (props) => {


    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <View style={{paddingHorizontal: 25}}>
                <CustomButton label={"Zmień hasło"} onPress={() => {props.navigation.navigate('ChangePassword');}} />
                <CustomButton label={"Historia zamówień"} onPress={() => {props.navigation.navigate('OrderHistory');}} />
                <CustomButton label={"Wyloguj"} onPress={() => {props.navigation.navigate('LogOut');}} />
            </View>
        </SafeAreaView>
    );
};



export default AccountHome;
