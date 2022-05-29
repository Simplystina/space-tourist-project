import React from 'react'
import {VscCircleFilled} from 'react-icons/vsc'
import { crewData } from '../DataList/CrewData'


const GetCrewInfo = ({title, name, content, image, id}) => {
   

  return (
    <div className='crew_info_container'>
      <div className='crew_heading'>
          <h3><span>02</span>Meet Your Crew</h3>
      </div>
      <div className='crew_content_container'>
          <div className='crew_content_inner_container'>
              <div className='crew_content'>
                  <h4>{title}</h4>
                  <h1>{name}</h1>
                  <p>{content} </p>
              </div>
              <div className='crew-icons'>
                {
                    crewData.map((item, idx)=><VscCircleFilled key={item} className={idx===id? 'icons-active' : 'icons'}/>)
                }
              </div>
          </div>
          <div className="crew_image_container">
            <img src={image} alt='commander' className='crew_image'/>
          </div>
      </div>
              
    </div>
  )
}

export default GetCrewInfo
