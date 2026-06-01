import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import '../styles/EmblaCarousel.css'
import {motion} from 'framer-motion'

import Slides from '../components/Slides'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  return (
    <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
             <Slides/>
        </div>
        {/* <div className="buttons">
            <button onClick={() => emblaApi?.scrollPrev()}>
                Prev
            </button> 
            <button onClick={() => emblaApi?.scrollNext()}>
                Next
            </button>
        </div> */}
    </div>
  )
}