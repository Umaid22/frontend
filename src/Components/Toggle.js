import React, { useContext } from 'react'
import './Toggle.css'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { themeContext } from '../Context';

function Toggle() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const handleClick = ()=>{
        theme.dispatch({type: 'toggle'})
    }

  return (
    <div className='toggle' onClick={handleClick}>
        <NightlightRoundIcon className='toggle_icon'/>
        <LightModeOutlinedIcon className='toggle_icon'/>
        <div className="toggle_btn" style={darkMode? {left: '2px'}:{right: '2px'}}>
        </div>
    </div>
  )
}

export default Toggle