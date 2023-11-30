import {Button, View} from 'react-native';
import React, {useEffect} from 'react';

const AccountHome = (props) => {

    return (
        <View>
            <Button title="Login" onPress={() => props.navigation.navigate('Login')}/>
            <Button title="Register" onPress={() => props.navigation.navigate('Register')}/>
        </View>
    );
};



export default AccountHome;
