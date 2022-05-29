import React,{useEffect, useRef} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {

    const open = ()=>{
        document.getElementById("sidebar").style.width = "15rem"; 
      }
      const close = ()=>{
        document.getElementById("sidebar").style.width = "0"; 
      }
      const node = useRef();
    const handleClick = e => {
        if(window.innerWidth <=586){
            if (node.current.contains(e.target)) {
                // inside click
                return;
            }
            
            document.getElementById("sidebar").style.width = "0"; 
              // outside click 
        }
        
      };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
         // return function to be called when unmounted
           return () => {
          document.removeEventListener("mousedown", handleClick);
        };
        
      }, []);
  return (
      <div ref={node} className='sidebar-container'>
            <div onClick={open} className='menu-list'><AiOutlineMenu className='menu'/></div>
            <div className='sidebar_menu' id='sidebar'>
              <span onClick={close} className='close-btn'><MdClose className='menu'/></span>
                <div>
                <ul className='sidebar_links'>
                    <NavLink className='links-nav' to='/' ><li><span>00</span> Home</li></NavLink>
                    <NavLink className='links-nav' to='/destination/moon'><li><span>01</span> DESTINATION</li></NavLink>
                    <NavLink className='links-nav' to='/crew'><li><span>02</span> crew</li></NavLink>
                    <NavLink className='links-nav' to='/technology'><li><span>03</span> technology</li></NavLink>
                </ul>
                </div>
            </div>
        </div>
  )
}

export default Sidebar
