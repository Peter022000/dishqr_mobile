import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '#e32f45',
                padding: 20,
                margin: 10,
                borderRadius: 10,
                marginBottom: 30,
            }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#fff',
                }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}
