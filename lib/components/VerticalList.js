import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from "./Title";
import FlatCard from "./FlatCard";

export default function VerticalList({title, data}) {
    return (
        <View>
            <Title>{title}</Title>
            <View style={styles.listItems}>
                {data.map(item => <FlatCard item={item} key={item.id}/>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listItems: {
        marginVertical:15
    }
})