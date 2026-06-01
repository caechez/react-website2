import React from 'react'
import { PortfolioList } from '../helpers/PortfolioList'
import SlideItem from '../components/SlideItem'


function Slides() {
  return (
    <div className="embla__container">
        {PortfolioList.map((slideItem, key) => {
            return <SlideItem
            key={key}
            name={slideItem.name} desc={slideItem.desc} iframe={slideItem.iframe}
            />;
        })}
    </div>
  )
}

export default Slides