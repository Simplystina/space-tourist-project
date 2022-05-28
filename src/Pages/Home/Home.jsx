import React from 'react'
import './Home.css'
import { Navbar } from '../../Components'
import explore from '../../image/explore.png'
import background_image from '../../image/background.png'

const Home = () => {
  return (
    <div className='home_container'>
        <Navbar background_image={background_image}/>
        <div className='home_content_container'>
           <div className='home_content'>
              <h4>So, you want to travel to</h4>
              <h1>Space</h1>
              <p>Let’s face it; if you want to go to space, you might 
                  as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because 
                  we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div className='explore_container'><img src={explore} alt='explore' className='explore'/></div>
        </div>
    </div>
  )
}

export default Home
