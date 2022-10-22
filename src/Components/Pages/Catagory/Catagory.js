import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

function Catagory() {
  const categoryNews = useLoaderData();
  return (
    <div>Catagory{categoryNews.length}
     {
        categoryNews.map(news => <NewsSummaryCard
        key={news._id}
        news={news}
        ></NewsSummaryCard>)
     }
    </div>  
  )
}

export default Catagory