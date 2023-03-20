import React from 'react';
import { View, Text } from 'react-native';

const zupy = [
    {
        id: 1,
        nazwa: "Zupa pomidorowa",
        cena: 10.99,
        skladniki: ["pomidory", "cebula", "czosnek", "kostka rosołowa", "śmietana"],
    },
    {
        id: 2,
        nazwa: "Zupa grzybowa",
        cena: 12.99,
        skladniki: ["grzyby", "cebula", "czosnek", "kostka rosołowa", "śmietana"],
    }
];

const ZupyList = () => {
    return (
        <View>
            {zupy.map((zupa) => (
                <React.Fragment key={zupa.id}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{zupa.nazwa}</Text>
                    <Text>Cena: {zupa.cena} zł</Text>
                    <Text>Skladniki: {zupa.skladniki.join(', ')}</Text>
                </React.Fragment>
            ))}
        </View>
    );
};

export default ZupyList;
