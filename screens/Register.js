import React from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import InputField from '../components/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';

const Register = (props) => {

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', marginTop: 10}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{paddingHorizontal: 25}}>
                <Text
                    style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Zarejestruj
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
                />

                <InputField
                    label={'Powtórz hasło'}
                    icon={
                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                    inputType="password"
                />

                <CustomButton label={'Zarejestruj'} onPress={() => {}} />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Zarejestrowany?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{color: '#AD40AF', fontWeight: '700'}}> Zaloguj</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;
