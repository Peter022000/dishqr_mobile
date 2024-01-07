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
import OrderDetails from '../screens/OrderDetails';
import Recommendation from '../screens/Recommendation';

const AccountTabs = (props) => {

    const Stack = createNativeStackNavigator();

    const dispatch = useDispatch();

    const isLogged = useSelector((state) => state.auth.isLogged);

    React.useEffect(() => {
        return props?.navigation?.addListener('focus', () => {
            dispatch(isExpired());
            if (isLogged) {
                props.navigation.navigate('AccountHome');
            } else {
                props.navigation.navigate('Login');
            }
        });
    }, [props.navigation, dispatch, isLogged]);


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
                        <Stack.Screen name="OrderDetails" component={OrderDetails} />
                        <Stack.Screen name="Recommendation" component={Recommendation} />
                        <Stack.Screen name="LogOut" component={LogOut} />
                    </>
            }
        </Stack.Navigator>
    );
};

export default AccountTabs;
