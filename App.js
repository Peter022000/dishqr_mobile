import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';

const App = () => {

    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
};

export default App;
