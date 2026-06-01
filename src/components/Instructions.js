import React from 'react'
import SwipeIcon from '@mui/icons-material/Swipe';
import '../styles/Instructions.css'
import {motion} from 'framer-motion'
function Instructions() {

  return (
    <div className="instructions">
        <div className='instruction-container'>
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
                <SwipeIcon style={{
                    fontSize:'60px',
                    color:'white',
                    }}/>
            </motion.div>
        </div>
    </div>

  )
}

export default Instructions
