import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import '../styles/EmblaButtons.css'

export function EmblaButtons() {
    const [emblaRef, emblaApi] = useEmblaCarousel()
  return (
    <div className='embla-buttons'>
       <div className="buttons">
            <button onClick={() => emblaApi?.scrollPrev()}>
                Prev
            </button> 
            <button onClick={() => emblaApi?.scrollNext()}>
                Next
            </button>
        </div>
    </div>
  )
}

