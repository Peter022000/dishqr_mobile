import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const OrderHistory = (props) => {

    const [orderHistory, setOrderHistory] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const token = useSelector((state) => state.auth.token);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        let a = getOrderHistory()
        setRefreshing(false);
    }, []);

    useEffect(() => {
        return props.navigation.addListener("focus", () => {
            let a = getOrderHistory();
        });
    }, [props.navigation]);

    const getOrderHistory = async () => {
        try {
            const response = await axios.get('http://192.168.1.2:8080/order/getUserHistory', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            setOrderHistory(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {isLoading ? (
                <ActivityIndicator />
            ) : (
            <View>
                {orderHistory.length !== 0 ?
                    <>
                        {orderHistory.map((order, index) => (
                            <TouchableOpacity key={index} style={styles.dishContainer}
                                              onPress={() => {props.navigation.navigate('OrderDetails',{order})}}>
                                <Text style={styles.title2}>Zamówienie {index+1}</Text>
                                <View style={styles.dishDescription}>
                                    <Text style={styles.dishName}>
                                        {order.order.map(item => item.dish.name).join(', ')}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </>
                    : <View style={styles.titleContainer}>
                        <Text style={styles.title}>Historia jest pusta</Text>
                    </View>
                }
            </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        paddingBottom: 110
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    title2: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    titleContainer: {
        marginTop: 50,
        marginBottom: 20,
        alignItems: 'center',
    },
    dishContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin:20
    },
    dishDescription: {
        flex: 1,
    },
    dishName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
        textAlign: "center"
    },
    dishPrice: {
        fontSize: 18,
        color: '#666666',
        marginBottom: 5,
    },
});


export default OrderHistory;

