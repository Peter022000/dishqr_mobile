import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

const Menu = () => {

    const [selection, setSelection] = useState(-1);

    const soups = [
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
            price: 15.99,
            ingredients: ["mleczko kokosowe", "kurczak", "warzywa", "imbir", "czosnek", "kolendra"],
        },
        {
            id: 8,
            name: "Zupa z soczewicy",
            price: 11.99,
            ingredients: ["soczewica", "cebula", "czosnek", "kostka rosołowa", "śmietana"],
        },
        {
            id: 9,
            name: "Zupa gulaszowa",
            price: 13.99,
            ingredients: ["mięso", "cebula", "papryka", "kostka rosołowa", "śmietana"],
        },
    ];

    const mainCourse = [
        {
            id: 0,
            name: "Kotlet schabowy",
            price: 25.99,
            ingredients: ["mielony schab", "panierka", "ziemniaki", "surówka z kiszonej kapusty"],
        },
        {
            id: 1,
            name: "Kurczak w sosie curry",
            price: 22.50,
            ingredients: ["filet z kurczaka", "sos curry", "ryż", "warzywa na parze"],
        },
        {
            id: 2,
            name: "Ryba po grecku",
            price: 28.00,
            ingredients: ["filet z ryby", "sos pomidorowy", "cebula", "papryka", "ziemniaki"],
        },
        {
            id: 3,
            name: "Pierogi ruskie",
            price: 17.99,
            ingredients: ["ciasto pierogowe", "ziemniaki", "ser twarogowy", "cebula"],
        },
        {
            id: 4,
            name: "Zapiekanka ziemniaczana",
            price: 20.50,
            ingredients: ["ziemniaki", "pieczarki", "cebula", "boczek", "ser"],
        },
        {
            id: 5,
            name: "Spaghetti bolognese",
            price: 19.50,
            ingredients: ["makaron spaghetti", "sos boloński", "mięso mielone", "cebula"],
        },
        {
            id: 6,
            name: "Sałatka z grillowanym kurczakiem",
            price: 24.99,
            ingredients: ["sałata mix", "filet z kurczaka", "pomidory", "ogórek", "papryka", "sos vinegrette"],
        },
        {
            id: 7,
            name: "Kebab z frytkami",
            price: 18.50,
            ingredients: ["mięso z kurczaka", "warzywa sałatkowe", "sos tzatziki", "frytki"],
        },
        {
            id: 8,
            name: "Schabowy z ziemniakami i surówką",
            price: 28.50,
            ingredients: ["mielony schab", "panierka", "ziemniaki", "surówka z marchewki"],
        },
        {
            id: 9,
            name: "Kurczak w miodowo-musztardowym sosie",
            price: 23.99,
            ingredients: ["filet z kurczaka", "sos miodowo-musztardowy", "ryż", "warzywa na parze"],
        },
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.menuHeaderContainer}>
                    <Text style={styles.menuHeader}>Menu</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity onPress={() => {(selection === 0) ? setSelection(-1) : setSelection(0)}}>
                        <Text style={styles.menuHeader}>Zupy</Text>
                    </TouchableOpacity>

                    {(selection === 0) ?
                        JSON.parse(JSON.stringify(soups)).map((dish, index) => {
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
                        }) : <></>
                    }
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity onPress={() => (selection === 1) ? setSelection(-1) : setSelection(1)}>
                        <Text style={styles.menuHeader}>Dania główne</Text>
                    </TouchableOpacity>

                    {(selection === 1) ?
                        JSON.parse(JSON.stringify(mainCourse)).map((dish, index) => {
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
