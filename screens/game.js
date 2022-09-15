import React, { useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import Card from "../components/card";
import NumberContainer from "../components/number-container";
import { colors } from "../constants/colors";
import { generateRandomNumberBetween } from "../utils/functions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        marginTop: 20,
        marginHorizontal: 20,
        width: '80%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});


const GameScreen = ({ selectedNumber }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNumber));
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.title}>La suposicion del oponente</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="MENOR"
                        onPress={() => null} 
                        color={colors.primary}    
                    />
                    <Button 
                        title="MAYOR"
                        onPress={() => null} 
                        color={colors.secondary}
                    />
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;
