// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import './SlideNavigation.css'
import {MdArrowForwardIos} from 'react-icons/md'


export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className='next-btn' onClick={() => swiper.slideNext()}><MdArrowForwardIos/></div>
  );
}