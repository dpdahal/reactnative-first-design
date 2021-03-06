import React from 'react';

import {View, StyleSheet, Image} from 'react-native';
import Title from "./Title";
import SubTitle from "./SubTitle";

const FlatCard = ({item}) => {
    const {title, description} = item
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/banner.jpg')}
                   style={styles.image}/>

            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <SubTitle>{description}</SubTitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom:10,
        height:80
    },
    image:{
        flex:0.35,
        height: '100%'
    },
    contentContainer:{
        flex: 0.65,
        paddingHorizontal:5
    }
})

export default FlatCard;

