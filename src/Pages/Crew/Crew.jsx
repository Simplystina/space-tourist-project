import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard ,Scrollbar, A11y} from "swiper";
import { useSwiper} from 'swiper/react';

import {Navbarfilter, SlideNextButton, SlidePrevButton, GetCrewInfo} from '../../Components'
import './Crew.css'

import { crewData } from '../../Components/DataList/CrewData'

const Crew = () => {
  const [id, setId] = useState(0)
  const [crewInfo, setCrewInfo] = useState(crewData[id])
  const swiper = useSwiper()
  
  const swipe = ()=>{
    console.log('Okayyyyyyyy')
    swiper.slideNext()
    console.log("Swipeddddd")
  }
  if(crewInfo){
    
    return (
      <div className='crew_container' >
         <Navbarfilter  />
        
        <Swiper
         slidesPerView={1}
         spaceBetween={30}
         loop={true}
         className="mySwiper"
        >
          {
            crewData.map((item, id)=>{
              const {title, name, image,content} = item
            return(  
            <SwiperSlide>
              <GetCrewInfo title={title} name={name} image={image} content={content} id={id}/>
            </SwiperSlide>)
          })
        }
        <SlideNextButton/>
          <SlidePrevButton/>
      </Swiper>
    </div>
     )
  }
  return null
}

export default Crew
