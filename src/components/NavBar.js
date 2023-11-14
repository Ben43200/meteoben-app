import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../logo.svg'
// import { logo as Brand } from '../logo.jpg'
import React from 'react'
import logo from '../logo-png-mini2.webp'

import './navbar.scss'
import { Squash as Hamburger } from 'hamburger-react'
// import { Squeeze as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    {/* <div className="logo"> */}
                    {/* <Brand /> */}
                    <img src={logo} className='logo-1' alt="logo" />
                    <div className="brand">METEOBEN</div>
                    {/* </div> */}
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger />
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/examples">Réalisations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar