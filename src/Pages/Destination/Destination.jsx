import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Navbar } from '../../Components'
import background_image from '../../image/background2.png'

import './Destination.css'

const Destination = () => {
  return (
    <div className='destination_container'>
      <Navbar background_image={background_image}/>
      <div className='destination_heading_container'>
        <div className='destination_heading'>
          <h3><span>01</span>Pick your destination</h3>
        </div>
          <div className='destination_links_container links-hide'>
             <ul className='destination_links'>
                 <NavLink className='nav_links' to='/destination/moon' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Moon</li></NavLink>
                 <NavLink className='nav_links links' to='/destination/mars' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})} ><li >Mars</li></NavLink>
                 <NavLink className='nav_links links' to='/destination/europa' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Europa</li></NavLink>
                 <NavLink className='nav_links links' to='/destination/titan' end style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Titan</li></NavLink>
             </ul>
          </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Destination