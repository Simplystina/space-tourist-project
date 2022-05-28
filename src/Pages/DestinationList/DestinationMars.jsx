import React from 'react'
import mars from '../../image/mars.png'
import { NavLink } from 'react-router-dom'

const DestinationMars = () => {
  return (
    <div className='destination_content_container'>
      <img src={mars} alt='moon' className='destination_image'/>
      <div className='destination_links_container links-show'>
             <ul className='destination_links'>
                 <NavLink className='nav_links' to='/destination/moon' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Moon</li></NavLink>
                 <NavLink className='nav_links link' to='/destination/mars' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})} ><li >Mars</li></NavLink>
                 <NavLink className='nav_links link' to='/destination/europa' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Europa</li></NavLink>
                 <NavLink className='nav_links link' to='/destination/titan' end style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Titan</li></NavLink>
             </ul>
        </div>
      <div className='destination_content'>
         <h1 className='destination-title'>Mars</h1>
            <p className='destination-text'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. 
                It’s two and a half times the size of Everest!
            </p>
            <hr className='destination_horizontal_line'></hr>
          <div className='destination-content-footer'>
            <div className='destination-content-footer-content'>
                <p>AVG. Distance</p>
                <h4>225 MIL. KM</h4>
            </div>
            <div className='destination-content-footer-content'>
                <p>EST. Travel Time</p>
                <h4>9 months</h4>
            </div>
         </div>
      </div>
    </div>
  )
}

export default DestinationMars
