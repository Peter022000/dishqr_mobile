import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, Text, View, Image, ActivityIndicator} from 'react-native';

const Menu = (props) => {

    const [selection, setSelection] = useState(-1);
    const [soups, setSoups] = useState([]);
    const [mainCourse, setMainCourse] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getDishes = async () => {

        try {
            let string = 'http://192.168.1.2:8080/dishes/getAllDishes';
            const response = await fetch(string);
            const json = await response.json();

            setSoups(json.filter(t => t.type === "soup"))
            setMainCourse(json.filter(t => t.type === "mainCourse"))
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        return props.navigation.addListener("focus", () => {
            console.log("tal")
            let a = getDishes()
        });
    }, [props.navigation]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.menuHeaderContainer}>
                    <Text style={styles.menuHeader}>Menu</Text>
                </View>
                {isLoading ? <ActivityIndicator/> : (
                    <>
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity onPress={() => {(selection === 0) ? setSelection(-1) : setSelection(0)}}>
                                <Text style={styles.menuHeader}>Zupy</Text>
                            </TouchableOpacity>

                            {
                                (selection === 0) ?
                                soups.map((dish, index) => {
                                    return(
                                        <View key={index + '_soup'} style={styles.dishContainer}>
                                            <View style={styles.dishDescription}>
                                                <Text style={styles.dishName}>{dish.name}</Text>
                                                <Text style={styles.dishPrice}>{dish.price} zł</Text>
                                                <Text style={styles.dishIngredients}>{dish.ingredients.join(', ')}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.dishAction}>
                                                <Image
                                                    source={require("../assets/icons/add.png")}
                                                    resizeMode={'contain'}
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                                : <></>
                            }
                        </View>
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity onPress={() => (selection === 1) ? setSelection(-1) : setSelection(1)}>
                                <Text style={styles.menuHeader}>Dania główne</Text>
                            </TouchableOpacity>

                            {(selection === 1) ?
                                mainCourse.map((dish, index) => {
                                    return(
                                        <View key={index + '_main'} style={styles.dishContainer}>
                                            <View style={styles.dishDescription}>
                                                <Text style={styles.dishName}>{dish.name}</Text>
                                                <Text style={styles.dishPrice}>{dish.price} zł</Text>
                                                <Text style={styles.dishIngredients}>{dish.ingredients.join(', ')}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.dishAction}>
                                                <Image
                                                    source={require("../assets/icons/add.png")}
                                                    resizeMode={'contain'}
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }) : <></>
                            }
                        </View>
                    </>
                )}

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container : {
        padding: 20,
        marginBottom: 80,
        flexDirection: 'column',
    },
    menuHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuHeader: {
        fontSize: 26,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    categoryContainer: {
        width: '100%',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        marginBottom: 50
    },
    dishContainer: {
        padding: 10,
        width: '100%',
        flexDirection: 'row'
    },
    dishDescription: {
        flexDirection: 'column',
        width: '80%'
    },
    dishAction: {
        width: '20%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent:'center'
    },
    dishName: {
        fontSize: 24,
        margin: 5,
        width: '80%',
    },
    dishAdd: {
        width: '20%',
    },
    dishPrice: {
        fontSize: 18,
        margin: 5
    },
    dishIngredients: {
        fontSize: 15,
        margin: 5
    }
});

export default Menu;
