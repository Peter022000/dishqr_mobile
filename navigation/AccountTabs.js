import React from 'react';
import Register from '../screens/Register';
import Login from '../screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountHome from '../screens/AccountHome';
import {useDispatch, useSelector} from 'react-redux';
import ChangePassword from '../screens/ChangePassword';
import OrderHistory from '../screens/OrderHistory';
import LogOut from '../screens/LogOut';
import {isExpired} from '../actions/authAction';

const AccountTabs = (props) => {

    const Stack = createNativeStackNavigator();

    const dispatch = useDispatch();

    const isLogged = useSelector((state) => state.auth.isLogged);

    React.useEffect(() => {
        return props.navigation.addListener('focus', () => {
            dispatch(isExpired());
            if (isLogged) {
                props.navigation.navigate('AccountHome');
            }
        });
    }, [props.navigation, dispatch, isLogged]);

    // useEffect(() => {
    //     dispatch(isExpired());
    //     if (isLogged) {
    //         props.navigation.navigate('Home');
    //     }
    // }, [dispatch, isLogged]);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                !isLogged ?
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </> :
                    <>
                        <Stack.Screen name="AccountHome" component={AccountHome} />
                        <Stack.Screen name="ChangePassword" component={ChangePassword} />
                        <Stack.Screen name="OrderHistory" component={OrderHistory} />
                        <Stack.Screen name="LogOut" component={LogOut} />
                    </>
            }
        </Stack.Navigator>
    );
};

export default AccountTabs;
