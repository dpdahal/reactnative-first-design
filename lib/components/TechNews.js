import React from 'react';
import { View } from 'react-native';
import HorizontalList from './HorizontalList'

const TeachNews = ({data}) => {
    return <HorizontalList title='Teach News' data={data} />
}

export default TeachNews;