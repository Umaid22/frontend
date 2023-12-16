import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../img/logo_black.png'
import Toggle from './Toggle'
import { themeContext } from '../Context'
import { NavLink } from 'react-router-dom'


function Navbar() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode


    return (
        <div className='nav'
            style={{
                background: darkMode ? 'black' : '',
                color: darkMode ? 'white' : ''
            }}>
            <header className="nav_header">
                <div className="nav_left">
                    <div className="nav_logo">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <nav className='nav_right'>
                    <div className='nav_ul'>
                        <NavLink to="/" className={({ isActive }) => isActive ? "nav_li activeLink" : "nav_li"}>
                            Home
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav_li activeLink" : "nav_li"}>
                            Projects
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "nav_li activeLink" : "nav_li"}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav_li activeLink" : "nav_li"}>
                            Contact
                        </NavLink>
                    </div>

                    <div className="nav_mode">
                        <Toggle />
                    </div>

                </nav>
            </header>


        </div>
    )
}

export default Navbar