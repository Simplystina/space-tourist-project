import React from 'react'
import titan from '../../image/titan.png'
import { NavLink } from 'react-router-dom'

const DestinationTitan = () => {
  return (
    <div 
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="5000"
      className='destination_content_container'>
      <img src={titan} alt='moon' className='destination_image'
          data-aos="zoom-in-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000" 
      />
      <div className='destination_links_container links-show'>
             <ul className='destination_links'>
                 <NavLink className='nav_links' to='/destination/moon' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Moon</li></NavLink>
                 <NavLink className='nav_links' to='/destination/mars' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})} ><li >Mars</li></NavLink>
                 <NavLink className='nav_links' to='/destination/europa' end  style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Europa</li></NavLink>
                 <NavLink className='nav_links' to='/destination/titan' end style={({ isActive }) => 
                      (isActive ? {borderBottom: '3px solid rgba(255, 255, 255, 1)'} : {borderBottom: 'none'})}><li>Titan</li></NavLink>
             </ul>
        </div>
      <div className='destination_content'>
         <h1 data-aos="zoom-in-up" data-aos-easing="linear"
              data-aos-duration="1500" className='destination-title'>Titan</h1>
            <p data-aos="zoom-in-down" data-aos-duration="1500" className='destination-text'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). 
                As a bonus, you get striking views of the Rings of Saturn.
            </p>
            <hr className='destination_horizontal_line'></hr>
          <div className='destination-content-footer'>
              <div className='destination-content-footer-content'>
                <p>AVG. Distance</p>
                <h4>1.6 BIL. km</h4>
              </div>
              <div className='destination-content-footer-content'>
                <p>EST. Travel Time</p>
                <h4>7 years</h4>
              </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationTitan
