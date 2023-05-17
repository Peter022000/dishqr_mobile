import * as React from 'react';

import { StyleSheet, Text } from 'react-native';
import {useCameraDevices} from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setTableNumber} from '../reducer/CartReducer';

const Scanner = (props) => {

    const [hasPermission, setHasPermission] = useState(false);
    const [scanActive, setScanActive] = useState(true);
    const [qrCode, setQrCode] = useState('');
    const devices = useCameraDevices();
    const device = devices.back;

    const dispatch = useDispatch();

    const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
        checkInverted: true,
    });

    useEffect(() => {
        if(barcodes.length > 0) {
            setQrCode(barcodes.at(0).displayValue);
        }
    }, [barcodes]);

    useEffect(() => {
        console.log(qrCode)
        if(qrCode !== ''){
            setScanActive(false);
            dispatch(setTableNumber(qrCode));
        }
    }, [qrCode]);

    useEffect(() => {
        return props.navigation.addListener("focus", () => {
            setHasPermission(false);
            setScanActive(true);
            setQrCode('');
            (async () => {
                const status = await Camera.requestCameraPermission();
                setHasPermission(status === 'authorized');
            })();
        });

    }, [props.navigation]);

    const displayScanner = () => {
        return (
            device != null &&
            hasPermission && (
                <>
                    <Camera
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={true}
                        frameProcessor={frameProcessor}
                        frameProcessorFps={5}
                    />
                </>
            )
        );
    }

    return (
        <>
            {
                scanActive ? displayScanner() : <Text>{qrCode}</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
    barcodeTextURL: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Scanner;
