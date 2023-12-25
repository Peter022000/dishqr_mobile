import {SafeAreaView, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const AccountHome = (props) => {


    return (
        <SafeAreaView style={{flex: 1, marginTop: 50}}>
            <View style={{paddingHorizontal: 25}}>
                <CustomButton label={"Zmień hasło"} onPress={() => {props.navigation.navigate('ChangePassword');}} />
                <CustomButton label={"Historia zamówień"} onPress={() => {props.navigation.navigate('OrderHistory');}} />
                <CustomButton label={"Rekomendacje"} onPress={() => {props.navigation.navigate('Recommendation');}} />
                <CustomButton label={"Wyloguj"} onPress={() => {props.navigation.navigate('LogOut');}} />
            </View>
        </SafeAreaView>
    );
};



export default AccountHome;
