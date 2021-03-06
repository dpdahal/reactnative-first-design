import React from 'react';

import {View, StyleSheet, Image} from 'react-native';
import Title from "./Title";
import SubTitle from "./SubTitle";

const BlogCard = ({style, imageStyle, item}) => {
    const {title, description} = item
    return (
        <View style={[styles.container, style]}>
            <Image source={require('../../assets/banner.jpg')}
                   style={[styles.image, imageStyle]}/>

            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <SubTitle>{description}</SubTitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        padding: 5
    }
})

export default BlogCard;

