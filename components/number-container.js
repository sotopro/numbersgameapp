import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
    },
});

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

export default NumberContainer;