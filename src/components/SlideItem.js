import React from 'react'
import {motion} from 'framer-motion'

function SlideItem({name, desc, link, iframe}) {
  return (
    <div className="embla__slide">
      <div className="container">
        <div className="header"><h1> {name}</h1></div>
        <div className="desc">
          <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: {
            opacity: 0,
            x: 40,
            },
            visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
            },
        }}
        >
          <h2>{desc}</h2>
        </motion.div>
        </div>
        <div className="content">
          <p>{iframe}</p>
        </div>
      </div>
    </div>
  )
}

export default SlideItem
