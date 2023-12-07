import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Scanner from '../screens/Scanner';
import AccountTabs from './AccountTabs';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {isExpired} from '../actions/authAction';

const Tab = createBottomTabNavigator();


const Tabs = (props) =>{

    const CustomTabBarButton = ({children, onPress}) => (
        <TouchableOpacity
            onPress={onPress}
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...style.shadow
            }}
        >
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#e32f45'
            }}>
                {children}
            </View>
        </TouchableOpacity>
    );


    return(

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    right: 15,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...style.shadow
                }
            }}
        >
            <Tab.Screen name={"Home"} component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require("../assets/icons/home.png")}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 14}}>Instrukcja</Text>
                    </View>)
            }}/>
            <Tab.Screen name={"Menu"} component={Menu} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require("../assets/icons/menu.png")}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 14}}>Menu</Text>
                    </View>)
            }}/>

            <Tab.Screen name={"QR"} component={Scanner} options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source={require('../assets/icons/qr.png')}
                        resizeMode={'contain'}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: "#ffffff",
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                )
            }}/>

            <Tab.Screen name={"Cart"} component={Cart} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require("../assets/icons/shopping-cart.png")}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 14}}>Koszyk</Text>
                    </View>)
            }}/>
            <Tab.Screen name={"Account"} component={AccountTabs} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require("../assets/icons/user.png")}
                            resizeMode={'contain'}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 14}}>Konto</Text>
                    </View>)
            }}/>

        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;
