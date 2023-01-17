
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
    transition: {
      delay: .1,
      duration: .4
    },
    color: "yellow"
  }
}





const Navigation = () => {
  const [activeNav, setActiveNav ] = useState("#")
  
  return (
    <motion.div
    
    className="w-full  fixed bottom-0 z-50">
      <ul className="sm:max-w-sm w-full backdrop-blur-xl m-auto border border-black rounded-full flex justify-center items-center">
        <motion.li whileHover="hover"
        initial="hidden"
        animate="visiable"
        variants={navIcon}
        
        className="text-orange-900 text-4xl p-4"><a href="/" onClick={ () => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a></motion.li>
        <motion.li whileHover="hover"
        variants={navIcon}
        
        className="text-orange-900 text-4xl p-4"><a href="#about" onClick={ () => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a></motion.li>
        <motion.li whileHover="hover"
        variants={navIcon}
        className="text-orange-900 text-4xl p-4"><a href="#service" onClick={ () => setActiveNav("#service")} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a></motion.li>
        
        <motion.li whileHover="hover"
        variants={navIcon}
        className="text-orange-900 text-4xl p-4"><a href="#contact" onClick={ () => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><RiContactsFill /></a></motion.li>
        <motion.li whileHover="hover"
        variants={navIcon}
        className="text-orange-900 text-4xl p-4"><FaHamburger /></motion.li>
      </ul>
    </motion.div>
  );
};

export default Navigation;
