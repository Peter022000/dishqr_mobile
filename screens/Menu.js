import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Menu = () => {

    const zupy = [
        {
            id: 0,
            name: "Zupa pomidorowa",
            price: 10.99,
            ingredients: ["pomidory", "cebula", "czosnek", "kostka rosołowa", "śmietana"],
        },
        {
            id: 1,
            name: "Zupa grzybowa",
            price: 12.99,
            ingredients: ["grzyby", "cebula", "czosnek", "kostka rosołowa", "śmietana"],
        },
        {
            id: 2,
            name: "Zupa krem z brokułów",
            price: 11.99,
            ingredients: ["brokuły", "cebula", "czosnek", "śmietana"],
        },
        {
            id: 3,
            name: "Zupa ogórkowa",
            price: 9.99,
            ingredients: ["ogórki", "cebula", "czosnek", "kostka rosołowa", "śmietana"],
        },
        {
            id: 4,
            name: "Zupa z dyni",
            price: 13.99,
            ingredients: ["dynia", "cebula", "czosnek", "kostka rosołowa", "śmietana"],
        },
        {
            id: 5,
            name: "Zupa fasolowa",
            price: 10.99,
            ingredients: ["fasola", "cebula", "czosnek", "kostka rosołowa"],
        },
        {
            id: 6,
            name: "Zupa z mięsem",
            price: 14.99,
            ingredients: ["mięso", "marchewka", "pietruszka", "seler", "cebula", "czosnek", "kostka rosołowa"],
        },
        {
            id: 7,
            name: "Zupa tajska",
            cena: 15.99,
            ingredients: ["mleczko kokosowe", "kurczak", "warzywa", "imbir", "czosnek", "kolendra"],
        },
        {
            id: 8,
            name: "Zupa z soczewicy",
            cena: 11.99,
            ingredients: ["soczewica", "cebula", "czosnek", "kostka rosołowa", "śmietana"],
        },
        {
            id: 9,
            name: "Zupa gulaszowa",
            cena: 13.99,
            ingredients: ["mięso", "cebula", "papryka", "kostka rosołowa", "śmietana"],
        },
    ];


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.menuHeaderContainer}>
                    <Text style={styles.menuHeader}>Menu</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.menuHeader}>Zupy</Text>

                    {/*{quiz.tasks[currentIndex].answers.map((answer, index) => {*/}
                    {/*    return (*/}
                    {/*        <TouchableOpacity key={quiz.id+'_'+currentIndex+'_'+index} onPress={() => setAnswerIndex(index)} style={styles.btn}>*/}
                    {/*            <Text style={styles.NRtext}>{answer.content}</Text>*/}
                    {/*        </TouchableOpacity>*/}
                    {/*    );*/}
                    {/*})}*/}

                    {
                        zupy.map((dish, index) => {
                            return(
                                <View key={index + '_soup'} style={styles.dishContainer}>
                                    <Text styles={styles.dishName}>{dish.name}</Text>
                                    <Text styles={styles.dishPrice}>{dish.price} zł</Text>
                                    {/*<Text styles={styles.dishIngredients}>{dish.ingredients.join(', ')}</Text>*/}
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container : {
        padding: 20,
        marginBottom: 130,
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
        padding: 15
    },
    dishContainer: {
        padding: 10,
        width: '100%'
    },
    dishName: {
        fontSize: 24,
        margin: 5
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
