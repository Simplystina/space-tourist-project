import React, { useState } from 'react'
import './Navbar.css'
import star from '../../image/Star.svg'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'
const Navbar = ({background_image}) => {

  const [showSidebar, setShowSidebar] = useState(false)

  const open = ()=>{
    document.getElementById("sidebar").style.width = "15rem"; 
  }
  const close = ()=>{
    document.getElementById("sidebar").style.width = "0"; 
  }

  return (
    <div className='navbar_container' >
        <img src={star} alt='start' className='star'/>
        <div className='line-container'><hr className='horizontal_line'></hr></div>
        <div className='navbar_links_container' style={{backgroundImage: `url(${background_image})`}}>
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
        <div className='sidebar-container'>
            <div onClick={open} className='menu-list'><AiOutlineMenu className='menu'/></div>
            <div className='sidebar_menu' id='sidebar'>
              <span onClick={close} className='close-btn'><MdClose className='menu'/></span>
                <ul className='sidebar_links'>
                    <NavLink className='links-nav' to='/' ><li><span>00</span> Home</li></NavLink>
                    <NavLink className='links-nav' to='/destination/moon'><li><span>01</span> DESTINATION</li></NavLink>
                    <NavLink className='links-nav' to='/crew'><li><span>02</span> crew</li></NavLink>
                    <NavLink className='links-nav' to='/technology'><li><span>03</span> technology</li></NavLink>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
