import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../SharedPage/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const CategoryNews = useLoaderData();
    return (
        <div>
            <h3>This category has news:{CategoryNews.length}</h3>
            {
                CategoryNews.map(news =><NewsSummaryCard
                    key={news._id}
                news = {news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;