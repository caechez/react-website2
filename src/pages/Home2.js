import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

import '../styles/Home2.css'
import '../styles/Hover-effect.css'

import Portrait from '../assets/portrait.png'
import Portfolio from '../components/Portfolio'
import MouseFollower from '../components/MouseFollower.js'


function Home() {
  return (
    <div className='home'>
        <div className='margin-left'/>
        <div className="container">
            <div className="header"><h1>Julius <br/> Palavinskas</h1></div>
            <div className="pic"><img src={Portrait}/></div>
            <div className="desc">
                <div className="decor-wrapper"><h2>Garso režisierius, muzikos prodiuseris, audiovizualinių medijų kūrėjas.</h2></div>
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
                    }}>
                    <a href="https://www.instagram.com/caechez/" className="hover-effect">Instagram</a> <br/>
                    <a href="https://on.soundcloud.com/npge4Iy27yHcmRarEQ" className="hover-effect">Soundcloud</a>
                </motion.div>
            </div>
            <div className="content">
                <h2>Darbų portfolio</h2>
                <Portfolio/>
            </div>
        </div>
        <div className='margin-right'/>
    </div>
  )
}

export default Home
