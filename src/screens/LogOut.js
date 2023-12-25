import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOut} from '../actions/authAction';

const LogOut = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logOut());

        props.navigation.navigate('AccountHome');
    }, [props.navigation]);

    return (
        <View>
            <Text>LogOut</Text>
        </View>
    );
};

export default LogOut;
