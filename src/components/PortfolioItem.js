import React from 'react'
import {motion} from 'framer-motion'

function PortfolioItem({link, name, credits}) {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: {
            opacity: 0,
            y: 40,
            },
            visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
            },
        }}
    >
        <p>
            <a href={link} className="hover-effect">{name}</a>
            <span>[{credits}]</span>
        </p>
    </motion.div>
  )
}

export default PortfolioItem
