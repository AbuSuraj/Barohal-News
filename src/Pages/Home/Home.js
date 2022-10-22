import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../SharedPage/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3>Barohal house news: {allNews.length}</h3>
            {
                allNews.map(news => <NewsSummaryCard
                key={news._id}
                news = {news }
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;