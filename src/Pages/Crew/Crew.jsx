import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Navbarfilter, SlideNextButton, SlidePrevButton, GetCrewInfo} from '../../Components'
import './Crew.css'

import { crewData } from '../../Components/DataList/CrewData'

const Crew = () => {
  const id = 0
  const crewInfo  = crewData[id]
  
  
  if(crewInfo){
    
    return (
      <div className='crew_container' data-aos="fade-up" >
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
