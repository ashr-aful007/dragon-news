import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard'

function Home() {
  const Allnews = useLoaderData()
  return (
    <div>
      {
        Allnews.map(news => <NewsSummaryCard
        key={news._id}
        news={news}
        ></NewsSummaryCard>)
      }
    </div>
  )
}

export default Home