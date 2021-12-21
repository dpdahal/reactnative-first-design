import React from 'react';
import { View } from 'react-native';
import HorizontalList from './HorizontalList'

const BreakingNews = ({data}) => {
  return <HorizontalList title='Breaking News' data={data} />
}

export default BreakingNews;