/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import CustomButton from "../src/components/CustomButton";
import Cart from "../src/screens/Cart";

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

test('Cart renders correctly', () => {
  const tree = renderer.create(<Cart />).toJSON();
  expect(tree).toMatchSnapshot();
});
