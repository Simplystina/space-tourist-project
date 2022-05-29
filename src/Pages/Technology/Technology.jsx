import React, { useState } from 'react'
import './Technology.css'
import { Navbarfilter } from '../../Components'
import { TechData } from '../../Components/DataList/TechData'


const Technology = () => {
    const [info, setInfo] = useState({heading:TechData[0].heading,
        title:TechData[0].title, 
        content:TechData[0].content,
        image:TechData[0].image, idx:'0'})

        const changeDisplay = (e)=>{
            const id = parseInt(e.currentTarget.id)
            console.log(id)
            setInfo({heading:TechData[id].heading,
                title:TechData[id].title, 
                content:TechData[id].content,
                image:TechData[id].image, idx:TechData[id].id})

            console.log(info.idx)
        }

  return (
    info && <div className='tech_container'  data-aos="fade-up"
    >
      <Navbarfilter/>
      <div className='tech_heading'>
          <h3><span>03</span>Space launch 101</h3>
      </div>
        <div className='tech_content_container'>
           <div className='tech_content_info'>
               <div className='tech_count_container'>
                   <span id='0' onClick={changeDisplay} className={info.idx ==='0'?'tech_count filled': 'tech_count not_filled'}><h4>1</h4></span>
                   <span id='1' onClick={changeDisplay} className={info.idx ==='1'?'tech_count filled': 'tech_count not_filled'}><h4>2</h4></span>
                   <span id='2  ' onClick={changeDisplay} className={info.idx ==='2'?'tech_count filled': 'tech_count not_filled'}><h4>3</h4></span>
               </div>
              <div className='tech_content'>
                  <h4>{info.heading}</h4>
                  <h1>{info.title}</h1>
                  <p>{info.content}</p>
              </div>
           </div>
          <div className='tech_image_container'>
              <img className='tech_image' src={info.image} alt='launchImage'/>
          </div>
      </div>
    </div>
  )
}

export default Technology
