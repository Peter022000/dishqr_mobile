import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Button, Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Dialog from 'react-native-dialog';
import {useDispatch, useSelector} from 'react-redux';
import {ACCEPT_ORDER, ADD_TO_CART, CLEAR} from '../types/cartTypes';
import {addToCart, savePaymentMethod} from '../actions/cartActions';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {isExpired} from '../actions/authAction';

const Recommendation = (props) => {
    const [dishes, setDishes] = useState([]);
    const [expandedDishIndex, setExpandedDishIndex] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    const getRecommendation = async () => {
        try {
            const response = await axios.get('http://192.168.1.2:8080/order/getRecommendation', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            setDishes(response.data);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Nie udało się pobrać rekomendacji',
            });
            console.error(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return props.navigation.addListener("focus", () => {
            setLoading(true);
            let a = getRecommendation();
        });
    }, [props.navigation]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        let a = getRecommendation();
        setRefreshing(false);
    }, []);

    const toggleDishExpansion = (index) => {
        setExpandedDishIndex(expandedDishIndex === index ? null : index);
    }

    const addItemToCart = (item) => {
        dispatch(addToCart(item.id, "fromMenu"));
    };

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
                <>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Rekomendacje</Text>
                    </View>
                    {dishes?.map((dish, index) => {
                        const isDishExpanded = expandedDishIndex === index;
                        return (
                            <TouchableOpacity key={index} onPress={() => toggleDishExpansion(index)}>
                                <View key={index} style={styles.dishContainer}>
                                    {isDishExpanded ? (
                                        <View style={styles.dishDescriptionContainer}>
                                            <View style={styles.dishDescription}>
                                                <Text style={styles.dishName}>{dish.name}</Text>
                                                <Text style={styles.dishPrice}>{dish.price} zł</Text>
                                                <Text style={styles.dishIngredients}>{dish.ingredients.join(', ')}</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => addItemToCart(dish)} style={styles.dishAction}>
                                                <Image
                                                    source={require("../assets/icons/add.png")}
                                                    resizeMode={'contain'}
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                        tintColor: "#FFFFFF"
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    ) :
                                        (
                                            <View style={styles.dishDescription}>
                                                <Text style={styles.dishName}>{dish.name}</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </>
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
    dishDescriptionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dishContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 10,
    },
    dishDescription: {
        flex: 1,
        marginRight: 20,
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
    dishIngredients: {
        fontSize: 16,
        color: '#999999',
        marginBottom: 10,
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
    dishAction: {
        backgroundColor: '#e32f45',
        borderRadius: 15,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Recommendation;

