import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import Toast, {BaseToast, ErrorToast, InfoToast} from 'react-native-toast-message';
import {PersistGate} from 'redux-persist/integration/react';

const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'green', height: 100 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            text1Style={{
                fontSize: 20,
                fontWeight: '400',
            }}
            text1NumberOfLines={5}
            text2Style={{
                fontSize: 15,
                fontWeight: '300',
            }}
            text2NumberOfLines={5}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 20,
                fontWeight: '400'
            }}
            text2Style={{
                fontSize: 15,
                fontWeight: '300'
            }}
        />
    ),
    info: (props) => (
        <InfoToast
            {...props}
            text1Style={{
                fontSize: 20,
                fontWeight: '400'
            }}
            text2Style={{
                fontSize: 15,
                fontWeight: '300'
            }}
        />)
};

const App = () => {

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <Tabs/>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
            <Toast visibilityTime={2000} config={toastConfig}/>
        </>
    );
};

export default App;
