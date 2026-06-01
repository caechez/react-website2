import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'

function Navbar() {

  return (
    <div className="navbar">
        <div className='menu-container'>
            <div className='border-wrapper'/>
            <div className='hover-effect'><Link style={{textDecoration: 'none'}} to="/"> <h2> Pagrindinis </h2> </Link></div>
            <div className='hover-effect'><Link style={{textDecoration: 'none'}} to="/gallery"> <h2> Galerija </h2> </Link></div>
            <div className='hover-effect'><Link style={{textDecoration: 'none'}} to="/contact"> <h2> Kontaktai </h2> </Link></div>
         </div>
    </div>

  )
}

export default Navbar
