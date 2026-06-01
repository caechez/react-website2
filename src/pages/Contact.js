import React from 'react'
import '../styles/Contact2.css'
import {motion} from 'framer-motion'


function Contact() {
  return (
    <div className='contact'>
        <div className='margin-left'/>
        <div className="container">
            <div className="header"><h1> Kontaktai </h1></div>
            <div className="desc">
                <h2>Tavo reikalas - mano reikalas. Susisiekim</h2>
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
                    <div className='hover-effect'> <a>+370 602 34567 <br/> pulius.jalavinskas@pastas.lt </a></div>
                  </motion.div>
                  <h2> ...arba parašyk man tiesiogiai:</h2>
            </div>
            <div className="content">
                <form id="contact-form" method="POST">
                  <input name="email" placeholder="Tavo e-mail" type="text" required/>
                  <input name="pavadinimas" placeholder="Pavadinimas" type="text" required/>
                  <input name="darbo tipas" placeholder="Darbo tipas" type="text"/>
                  <textarea row="6" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' name="message" required></textarea>
                  <button type="submit">Siųsti</button>
                </form>
            </div>
        </div>
        <div className='margin-right'/>
    </div>
  )
}

export default Contact
