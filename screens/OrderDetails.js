import React, {useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import Dialog from 'react-native-dialog';
import {useDispatch} from 'react-redux';
import {ACCEPT_ORDER, CLEAR} from '../types/cartTypes';
import {addToCart} from '../actions/cartActions';

const OrderDetails = (props) => {
    const [order, setOrder] = useState([]);
    const [expandedDishIndex, setExpandedDishIndex] = useState(null);
    const [allDishesExpanded, setAllDishesExpanded] = useState(false);
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        return props.navigation.addListener("focus", () => {
            setOrder(props.route.params.order);
        });
    }, [props.navigation]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
        const formattedDate = new Date(dateString).toLocaleString(undefined, options);
        return formattedDate.replace(/\//g, '.');
    }

    const toggleDishExpansion = (index) => {
        setExpandedDishIndex(expandedDishIndex === index ? null : index);
    }

    const handleCancel = () => {
        setVisible(false);
    };

    const handleSend = () => {
        let a = redoOrder();
    };


    const redoOrder = async () => {
        for (const dish of order.order) {
            await dispatch(addToCart(dish.dish.id, "cart"));
        }
        props.navigation.navigate("Cart");
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Zamówienie</Text>
            </View>

            <View style={styles.dishContainer}>
                <Text style={styles.dishInformation}>Razem: {order.cost} zł</Text>
                <Text style={styles.dishInformation}>Data: {formatDate(order.date)}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <CustomButton
                    label={allDishesExpanded ? "Schowaj" : "Pokaż"}
                    onPress={() => setAllDishesExpanded(!allDishesExpanded)}
                />
                <CustomButton
                    label={"Powtórz zamówienie"}
                    onPress={() => setVisible(true)}
                />
            </View>

            {allDishesExpanded && order.order?.map((dish, index) => {
                const isDishExpanded = expandedDishIndex === index;
                return (
                    // <TouchableOpacity key={index} onPress={() => toggleDishExpansion(index)}>
                        <View key={index} style={styles.dishContainer}>
                            <Text style={styles.dishName}>{dish.dish.name}</Text>
                            {/*{isDishExpanded && (*/}
                                <View style={styles.dishDescription}>
                                    <Text style={styles.dishInformation}>Składniki: {dish.dish.ingredients.join(', ')}</Text>
                                    <Text style={styles.dishInformation}>Cena: {dish.dish.price} zł</Text>
                                    <Text style={styles.dishInformation}>Ilość: {dish.quantity}</Text>
                                    <Text style={styles.dishInformation}>Koszt: {(dish.dish.price * dish.quantity).toFixed(2)} zł</Text>
                                </View>
                            {/*)}*/}
                        </View>
                    // </TouchableOpacity>
                )
            })}
            <Dialog.Container visible={visible}>
                <Dialog.Title>Zamówienie</Dialog.Title>
                <Dialog.Description>
                    Czy na pewno chcesz powtórzyć zamówienie
                </Dialog.Description>
                <Dialog.Button label="Anuluj" onPress={handleCancel} />
                <Dialog.Button label="Powtórz" onPress={handleSend} />
            </Dialog.Container>
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
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 10,
        marginBottom: 20
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
    dishInformation: {
        fontSize: 18,
        color: '#666666',
        marginBottom: 5,
    },
    dishIngredients: {
        fontSize: 16,
        color: '#999999',
        marginBottom: 5,
    },
    headerContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
    },
    buttonsContainer: {
        marginLeft: 20,
        marginRight: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
});


export default OrderDetails;

