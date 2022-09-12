import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2292A4',
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
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