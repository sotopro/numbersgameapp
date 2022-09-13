import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/card";
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
        width: 320,
        maxWidth: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottomColor: '#2292A4',
        borderBottomWidth: 1,
        maxWidth: 70,
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
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Elija un numero</Text>
                <TextInput 
                    style={styles.input} 
                    keyboardType='numeric' 
                    maxLength={2}
                />
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
            </Card>
        </View>
    )
}

export default StartGameScreen;