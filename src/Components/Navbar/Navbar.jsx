import React from 'react'
import './Navbar.css'
import star from '../../image/Star.svg'
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = ({background_image}) => {

  

  return (
    <div className='navbar_container' >
        <img src={star} alt='start' className='star'/>
        <div className='line-container'><hr className='horizontal_line'></hr></div>
        <div className='navbar_links_container home_links_container' style={{backgroundImage: `url(${background_image})`}}>
            <ul className='navbar_links'>
                <NavLink className='links' to='/' style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li><span>00</span> Home</li></NavLink>
                <NavLink className='links' to='/destination/moon' style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li><span>01</span> DESTINATION</li></NavLink>
                <NavLink className='links' to='/crew' style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li><span>02</span> crew</li></NavLink>
                <NavLink className='links' to='/technology' style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li><span>03</span> technology</li></NavLink>
            </ul>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Navbar
