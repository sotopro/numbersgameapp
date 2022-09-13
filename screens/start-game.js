import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        color: '#212121',
        textAlign: 'center',
        paddingVertical: 20,
    },
    label: {
        fontSize: 14,
        color: '#212121',
        textAlign: 'center',
        paddingVertical: 5, 
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottomColor: '#2292A4',
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});

const StartGameScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Elija un numero</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Limpiar"
                    onPress={() => null}
                    color='#2292A4'
                />
                <Button
                    title="Confirmar"
                    onPress={() => null}
                    color='#2292A4'
                />
            </View>
        </View>
    )
}

export default StartGameScreen;