import React from 'react';

import {View, StyleSheet, StatusBar,ScrollView} from 'react-native';


const Screen = ({children}) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 10,
        backgroundColor:'gray',
        flex:1
    }
})

export default Screen;
