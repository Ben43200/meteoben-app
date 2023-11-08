import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../logo.svg'
// import { logo as Brand } from '../logo.jpg'
import logo from '../logo.svg'

import './navbar.scss'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    {/* <Brand /> */}
                    {/* <img src={logo} className='logo-1' /> */}
                    <div className="brand">METEOBEN Dev web</div>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/blog">Office</NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/competences">Compétences</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/news">News</NavLink>
                        </li> */}
                        {/* <li>
                            <NavLink to="/about">About</NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar