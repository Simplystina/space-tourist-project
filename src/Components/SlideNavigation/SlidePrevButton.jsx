// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import './SlideNavigation.css'
import {MdArrowBackIos} from 'react-icons/md'


export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <div className='previous-btn' onClick={() => swiper.slidePrev()}><MdArrowBackIos/></div>
  );
}