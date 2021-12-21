import React from 'react';
import FilterBar from './lib/components/FilterBar'
import Screen from "./lib/components/Screen";
import FeaturedNews from "./lib/components/FeaturedNews";
import BreakingNews from "./lib/components/BreakingNews";
import data from './fakeData'
import TeachNews from "./lib/components/TechNews";
import PoliticalNews from "./lib/components/PoliticalNews";
import EntertainmentNews from "./lib/components/EntertainmentNews";

export default function App() {
    const breakingNews = data.filter(item => item.category === 'demo')
    const teachNews = data.filter(item => item.category === 'teach-news')
    const politicalNews = data.filter(item => item.category === 'political news')
    const entertainmentNews = data.filter(item => item.category === 'entertainment news')
    return <Screen>
        <FilterBar/>
        <FeaturedNews item={{
            id: 2,
            title: "",
            description: "hello this is post",
            category: 'test'

        }}/>
        <BreakingNews data={breakingNews}/>
        <PoliticalNews data={politicalNews}/>
        <TeachNews data={teachNews}/>
        <EntertainmentNews data={entertainmentNews}/>
    </Screen>
}
