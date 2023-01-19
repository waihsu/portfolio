
import React from "react";
import { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { RiServiceLine } from 'react-icons/ri'
import { FaHamburger } from 'react-icons/fa'
import { RiContactsFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { useState } from "react";
//import { Link } from 'react-router-dom'

const navIcon = {
  
  hover: {
    scale: 1.2,
    
  }
}






const Navigation = () => {
  const [activeNav, setActiveNav ] = useState("#")
  const [navActive, setNavActive] = useState(false)
  const handleClick = () => {
    if (navActive) {
      setNavActive(false)
    }else {
      setNavActive(true)
    }
  }


  return (
    <motion.div
    
    className="w-full  fixed bottom-0 right-0 z-50">
      <ul className={ !navActive ? 'w-16 flex justify-end overflow-hidden absolute right-4 bottom-0 backdrop-blur-xl rounded-lg transition-all duration-500' : 'sm:max-w-sm w-full backdrop-blur-xl m-auto border border-black rounded-full flex justify-center items-center select-none transition-all duration-700'}>
        <motion.li whileHover="hover"
        
        variants={navIcon}
        
        className="text-orange-900 text-4xl p-4"><a href="/#" onClick={ () => setActiveNav("#")} className={activeNav === '#' ? 'active text-purple-800' : ''}><AiOutlineHome /></a></motion.li>
        <motion.li whileHover="hover"
        variants={navIcon}
        
        className="text-orange-900 text-4xl p-4"><a href="#about" onClick={ () => setActiveNav("#about")} className={activeNav === '#about' ? 'active text-purple-800' : ''}><FiUser /></a></motion.li>
        <motion.li whileHover="hover"
        variants={navIcon}
        className="text-orange-900 text-4xl p-4"><a href="#service" onClick={ () => setActiveNav("#service")} className={activeNav === '#service' ? 'active text-purple-800' : ''}><RiServiceLine /></a></motion.li>
        
        <motion.li whileHover="hover"
        variants={navIcon}
        className="text-orange-900 text-4xl p-4"><a href="#contact" onClick={ () => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active text-purple-800' : ''}><RiContactsFill /></a></motion.li>
        <motion.li whileHover="hover"
        variants={navIcon}
        className="text-orange-900 text-4xl p-4" ><a href="#burger" onClick={handleClick} className={ !navActive ? ' text-purple-800' : ''}><FaHamburger /></a></motion.li>
      </ul>
    </motion.div>
  );
};

export default Navigation;
