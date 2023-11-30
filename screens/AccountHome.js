import {Button, View} from 'react-native';
import React, {useEffect} from 'react';

const AccountHome = (props) => {

    useEffect(() => {
        return props.navigation.addListener("focus", () => {
            props.navigation.navigate('AccountHome')
        });

    }, [props.navigation]);

    return (
        <View>
            <Button title="Login" onPress={() => props.navigation.navigate('Login')}/>
            <Button title="Register" onPress={() => props.navigation.navigate('Register')}/>
        </View>
    );
};



export default AccountHome;
