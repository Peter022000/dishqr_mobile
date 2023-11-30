import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const Login = (props) => {

    return (
        <SafeAreaView style={{flex: 1, marginTop: 20}}>
            <View style={{paddingHorizontal: 25}}>
                <Text
                    style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Zaloguj
                </Text>

                <InputField
                    label={'Email'}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                    keyboardType="email-address"
                />

                <InputField
                    label={'Hasło'}
                    icon={
                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                    inputType="password"
                    fieldButtonFunction={() => {}}
                />

                <CustomButton label={"Zaloguj"} onPress={() => {}} />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Nie masz konta?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                        <Text style={{color: '#AD40AF', fontWeight: '700'}}> Zarejestruj</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
