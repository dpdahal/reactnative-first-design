import React from 'react';
import {View, TextInput, StyleSheet} from "react-native";

const SearchContent = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder="Enter any keyword"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent:'center',
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft:8,
        fontSize:16
    }
})

export default SearchContent;