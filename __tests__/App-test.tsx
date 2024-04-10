/**
 * @format
 */

import 'react-native';
import React from 'react';

import Cart from "../src/screens/Cart";
import {store} from "../src/store/store";
import {Provider} from "react-redux";
import Tabs from "../src/navigation/Tabs";
import ChangePassword from "../src/screens/ChangePassword";
import Menu from "../src/screens/Menu";
import {NavigationContainer} from "@react-navigation/native";
import * as mockVisionCamera from '../__mocks__/react-native-vision-camera';
import OrderDetails from "../src/screens/OrderDetails";
import App from "../App";
import {render} from "@testing-library/react-native";
import Login from "../src/screens/Login";

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('react-native-vision-camera', () => mockVisionCamera);

jest.mock("axios");

test('App renders correctly', () => {
    const tree = render(
        <App/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Order details renders correctly', () => {
    const tree = render(
        <Provider store={store}>
            <OrderDetails />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Order history renders correctly', () => {
    const tree = render(
        <Provider store={store}>
            <OrderDetails />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Recommendation renders correctly', () => {
    const tree = render(
        <Provider store={store}>
            <OrderDetails />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Register renders correctly', () => {
    const tree = render(
        <Provider store={store}>
            <OrderDetails />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Scanner renders correctly', () => {
    const tree = render(
        <Provider store={store}>
            <OrderDetails />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Cart renders correctly', () => {
    const tree = render(
        <Provider store={store}>
            <Cart />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Change password renders correctly', () => {
    const tree = render(
      <Provider store={store}>
          <ChangePassword />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Tabs renders correctly', () => {
    const tree = render(
        <Provider store={store}>
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Login renders correctly', () => {
    const tree = render(
      <Provider store={store}>
          <Login />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Menu renders correctly', () => {
    const tree = render(
        <Provider store={store}>
            <Menu />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
