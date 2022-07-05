import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../img/logo_black.png'
import Toggle from './Toggle'
import { themeContext } from '../Context'
import { Link } from 'react-router-dom'


function Navbar() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    
  return (
    <div className='nav'
    style={{
        background: darkMode? 'black':'',
        color: darkMode? 'white':''
      }}>
        <header className="nav_header">
            <div className="nav_left">
                <div className="nav_logo">
                    <img src={logo} alt="" />
                </div>
            </div>

            <nav className='nav_right'>
                <ul className='nav_ul'>
                    <Link to="/">
                    <li className='nav_li'>Home</li>
                    </Link>
                    <Link to="/projects">
                    <li className='nav_li'>Projects</li>
                    </Link>
                    <Link to="/about">
                    <li className='nav_li'>About</li>
                    </Link>
                    <Link to="/contact">
                    <li className='nav_li'>Contact</li>
                    </Link>
                </ul>

                <div className="nav_mode">
                    <Toggle/>
                </div>

            </nav>
        </header>


    </div>
  )
}

export default Navbar