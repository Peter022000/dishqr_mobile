import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import store from '../store';
import {decrementQty, incrementQty } from "./CartReducer"
import { useDispatch, useSelector } from "react-redux"

const Cart = (props) => {

    const [tableNumber, setTableNumber] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('cash')
    //const [cart, setCart] = useState({})

    // const [cost, setCost] = useState()
    //
    // useEffect(() => {
    //     setCost((cart.reduce(function (sum, cost) {return sum + (cost.price * cost.quantity)}, 0)).toFixed(2))
    // }, [cart]);

    const cart = useSelector((state) => state.cart.cart)
    const cost = (cart.reduce((sum, cost) => {return sum + (cost.price * cost.quantity)}, 0)).toFixed(2)

    const sendOrder = async () => {

        console.log(
            JSON.stringify({
                tableNo: Number(tableNumber),
                cost: Number(cost),
                order: cart.map(({name, price, quantity}) => ({name, price, quantity})),
                paymentMethod: paymentMethod
            })
        )

        try {
            const response = await fetch('http://192.168.1.2:8080/order/sendOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tableNo: Number(tableNumber),
                    cost: Number(cost),
                    order: cart.map(({id, name, price, quantity}) => ({id, name, price, quantity})),
                    paymentMethod: paymentMethod
                })
            });

            const json = await response.json();
        } catch (error) {
            console.error(error);
        }
    };


    const dispatch = useDispatch();

    const handlePaymentMethod = (method) => {
        setPaymentMethod(method);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Twój koszyk:</Text>
                <View style={styles.cartContainer}>
                    {
                        cart.map((dish, index) => {
                            return(
                                <View key={index + '_soup'} style={styles.dishContainer}>
                                    <View style={styles.dishDescription}>
                                        <Text style={styles.dishName}>{dish.name}</Text>
                                        <Text style={styles.dishPrice}>{(dish.price * dish.quantity).toFixed(2)} zł</Text>
                                    </View>
                                    <View style={styles.dishAction}>
                                        <TouchableOpacity onPress={() =>{dispatch(decrementQty(dish))}} style={styles.controlButton}>
                                            <Text style={styles.controlButtonText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.quantity}>{dish.quantity}</Text>
                                        <TouchableOpacity onPress={() =>{dispatch(incrementQty(dish))}} style={styles.controlButton} >
                                            <Text style={styles.controlButtonText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View>
                    <Text style={styles.title}>Razem {cost} </Text>
                </View>
                <View style={styles.payment}>
                    <Text style={styles.paymentTitle}>Metoda płatności:</Text>
                    <TouchableOpacity onPress={() => handlePaymentMethod('cash')}>
                        <Text style={paymentMethod === 'cash' ? styles.selectedPayment : styles.paymentMethod}>Gotówka</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePaymentMethod('card')}>
                        <Text style={paymentMethod === 'card' ? styles.selectedPayment : styles.paymentMethod}>Karta</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Numer stolika:</Text>
                    <TextInput
                        style={styles.tableInput}
                        value={tableNumber}
                        onChangeText={setTableNumber}
                        keyboardType='numeric'
                    />
                </View>
                <TouchableOpacity onPress={() => sendOrder()} style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Zamów</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        paddingBottom: 150
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 8,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    payment: {
        marginVertical: 16,
    },
    paymentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    paymentMethod: {
        fontSize: 16,
        marginBottom: 8,
    },
    selectedPayment: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#0066ff',
    },
    table: {
        marginVertical: 16,
    },
    tableTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    tableInput: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
    },
    checkoutButton: {
        backgroundColor: '#ff7043',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    controlButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 4,
    },
    controlButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cartContainer: {
    },
    dishContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    dishDescription: {
        flex: 1,
    },
    dishName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    dishPrice: {
        fontSize: 18,
        color: '#666666',
        marginBottom: 5,
    },
    dishAction: {
        flex: 0.5,
        flexDirection: 'row',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Cart;
