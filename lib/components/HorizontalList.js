import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Title from "./Title";
import SmallNews from "./SmallNews";

export default function HorizontalList({title, data}) {
    return (
        <>
            <Title size={25}>{title}</Title>
            <View style={styles.listItems}>
                <FlatList data={data} keyExtractor={item => item.id}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          renderItem={({item}) => <SmallNews item={item}/>}/>
            </View>
        </>
    )

}


const styles = StyleSheet.create({
    listItems: {
        marginVertical: 15,
    }
})