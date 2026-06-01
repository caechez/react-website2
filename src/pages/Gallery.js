import React from 'react'
import {EmblaCarousel} from '../components/EmblaCarousel.jsx'
import '../styles/Gallery2.css'
import {EmblaButtons} from '../components/EmblaButtons.jsx'

import Slides from '../components/Slides'
import SwipeIcon from '@mui/icons-material/Swipe';
import Instructions from '../components/Instructions.js'

function Gallery() {
  return (
    <div className='gallery'>
        <div className='margin-left'/>
        <div className='main'> <EmblaCarousel /> </div>
        <div className='margin-right'/>
        <Instructions/>
    </div>
    
  )
}

export default Gallery