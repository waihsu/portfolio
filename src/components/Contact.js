import { motion } from "framer-motion";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const boxVariants = {
  hover:{
    scale: 1.1,
    background: 'yellow',
    color: 'purple'
  }
}

const buttonVariants = {
  active: {
    scale: 1.2,
    backgroundColor: "purple",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};


const Contact = () => {
  return (
    <motion.div id="contact" className="w-100 min-h-screen bg-black">
      <h2 className="text-4xl text-yellow-500 text-center font-semibold py-6 mb-6">
        Contact Me
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 ">
        <div className="w-72 flex flex-col justify-center gap-4 my-6">
          <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="border-yellow-400 border backdrop-blur-xl max-w-sm flex text-white flex-col justify-center items-center py-6 rounded-xl">
            <div className="text-xl font-bold mb-2">
              <AiOutlineMail />
            </div>
            <h4 className="text-md mb-2">Email</h4>
            <span className="">hsuw647@gmail.com</span>
            <a href="/" className="text-blue-400">
              Send a message
            </a>
          </motion.div>
          <motion.div 
          variants={boxVariants}
          whileHover="hover"
          className="border border-yellow-400 backdrop-blur-xl max-w-sm flex text-white flex-col justify-center items-center py-6 rounded-xl">
            <div className="text-xl font-bold mb-2">
              <BsMessenger />
            </div>
            <h4 className="text-md mb-2">Messenger</h4>
            <span className="">Hsu Wai</span>
            <a href="/" className="text-blue-400">
              Send a message
            </a>
          </motion.div>
          <motion.div 
          variants={boxVariants}
          whileHover="hover"
          className="border border-yellow-400 backdrop-blur-xl max-w-sm flex text-white flex-col justify-center items-center py-6 rounded-xl">
            <div className="text-xl font-bold mb-2">
              <BsTelegram />
            </div>
            <h4 className="text-md mb-2">Telegram</h4>
            <span className="">+959784893106</span>
            <a href="/" className="text-blue-400">
              Send a message
            </a>
          </motion.div>
        </div>
        <div className="w-96 px-5 mb-20 sm:mb-0">
          <form className="flex flex-col gap-6 mb-4 text-yellow-700">
            <div className="max-w-sm">
              <input className="bg-transparent w-full border border-yellow-400 py-2 px-4 rounded-lg" id="username" type="text" placeholder="Username"/>
            </div>
            <div className="max-w-sm">
                <input className="bg-transparent w-full border border-yellow-400 py-2 px-4 rounded-lg" type="email" placeholder="Your Email" />
            </div>
            <div className="max-w-sm h-18">
                <textarea className="w-full h-full bg-transparent border border-yellow-400 rounded-lg" name="" id="" cols="15" rows="10"></textarea>
            </div>
            
          </form>
          <motion.button 
          variants={buttonVariants}
          whileTap="active"
          className="bg-yellow-500 py-2 px-3 rounded-lg select-none">Send Message</motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
