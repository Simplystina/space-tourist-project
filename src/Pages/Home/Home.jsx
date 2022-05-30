import React from 'react'
import './Home.css'
import { Navbar } from '../../Components'
import explore from '../../image/explore.png'
import background_image from '../../image/background.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div  data-aos='fade-up' className='home_container'>
        <Navbar background_image={background_image}/>
        <div className='home_content_container' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
           <div className='home_content'>
              <h4>So, you want to travel to</h4>
              <h1>Space</h1>
              <p
               data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-duration="1500"
              >Let’s face it; if you want to go to space, you might 
                  as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because 
                  we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div className='explore_container' data-aos="flip-in">
               <NavLink to='/destination/moon'><img src={explore} alt='explore' className='explore'/></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Home
