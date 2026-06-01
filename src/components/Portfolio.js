import { PortfolioList } from '../helpers/PortfolioList'
import PortfolioItem from '../components/PortfolioItem'
import React from 'react'

function Portfolio() {
  return (
    <div className="portfolioList">
        {PortfolioList.map((portfolioItem, key) => {
            return <PortfolioItem
            key={key}
            link={portfolioItem.link} name={portfolioItem.name} credits={portfolioItem.credits}
            />;
        })}
      </div>
  )
}

export default Portfolio
