
import aboutProfile from "../assets/profile.jpeg"
import {motion} from 'framer-motion'
import React from "react";

const buttonVariants = {
    active: {
         scale: 1.2,
         backgroundColor: "purple",
         transition: {
            repeatType: "mirror",
            repeat: Infinity
         }
    }
}

const imgAnimate = {
    hidden: {
        x: "-100vw"
    },
    visiable: {
        x: 0
    },
    transition: {
        delay: .3
    }
}







const About = () => {

    return ( 
        <section 
            
            
            className="about w-full min-h-screen py-10 bg-black "
            id="about"
            >
            <h2 className="text-center text-4xl text-yellow-300 font-extrabold py-10">About</h2>
            <div className="max-w-6xl h-full flex flex-wrap justify-center items-center m-auto">
                <motion.div
                variants={imgAnimate}
                initial="hidden"
                animate="visiable"
                 
                className="w-96">
                    <img width="100%" height="100%" src={aboutProfile} alt="about"/>
                </motion.div>
                <motion.div
                
                className="max-w-xl px-8 py-12">
                    <h2 className="text-yellow-400 sm:text-2xl text-md font-bold mb-6">I'm learning from Msquare Programing</h2>
                    <p className=" text-yellow-200 mb-6">
                    I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.
                    </p>
                    <motion.button
                    variants={buttonVariants}
                    whileTap="active"
                    
                    className="text-black bg-yellow-400 py-2 px-4 rounded select-none">read more</motion.button>
                </motion.div>
            </div>
        </section>
     );
}
 
export default About;
