import React from "react";
import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    title: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Lato-Bold'
    }
});

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;