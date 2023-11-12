import React from "react";
import './footerr.scss'
import { NavLink } from 'react-router-dom'



export default function Footer() {
    return (<footer>
        <div className="footer-container">
            <p>Meteoben</p>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </footer>
    )
}