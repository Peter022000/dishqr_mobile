import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import InputField from '../components/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import {useDispatch} from 'react-redux';
import {changePassword} from '../actions/authAction';

const ChangePassword = (props) => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const dispatch = useDispatch();

    const changeChangePassword = () => {
        dispatch(changePassword(oldPassword, newPassword, repeatNewPassword));
    }

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
                    Zmień hasło
                </Text>


                <InputField
                    label={'Stare Hasło'}
                    icon={
                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                    inputType="password"
                    onChangeText={setOldPassword}
                />

                <InputField
                    label={'Nowe hasło'}
                    icon={
                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                    inputType="password"
                    onChangeText={setNewPassword}
                />

                <InputField
                    label={'Powtórz nowe hasło'}
                    icon={
                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                    inputType="password"
                    onChangeText={setRepeatNewPassword}
                />

                <CustomButton label={'Zmień hasło'} onPress={() => {changeChangePassword()}} />

            </ScrollView>
        </SafeAreaView>
    );
};

export default ChangePassword;
