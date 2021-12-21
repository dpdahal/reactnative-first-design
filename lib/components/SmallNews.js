import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import BlogCard from './BlogCard';

const {width} = Dimensions.get('window')

export default function SmallNews({item}) {
    return <BlogCard item={item} style={styles.container} imageStyle={styles.image}/>
}


const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200,
    },
    image: {
        height: 100
    }
})
