
import Typed from "react-typed"
import { motion } from 'framer-motion'
import profile from "../assets/user-2.png"


const Home = () => {

    

    return (
        <motion.section
            initial={{ y: '100vh'}}
            animate={{ y: 0}}
            className="home min-h-screen flex justify-center items-center py-8 "
            id="home"
        >
            <div className="w-full h-full flex flex-wrap justify-center items-center p-6">
                <div className="flex flex-col justify-center p-10 h-72">
                    <motion.h1
                        animate={{ fontSize: 200}}
                        className="text-xl text-black font-bold sm:text-5xl mb-2">
                        My name is
                        <span className="sm:text-6xl text-yellow-500">Hsuwai</span>
                    </motion.h1>
                    <h2 className="text-md sm:text-lg text-black font-semibold">
                        I'm learning
                        
                    </h2>
                    <Typed className='text-md  text-yellow-600' 
                            strings={["FULL STACK DEVELOPER"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                </div>
                <div className="max-w-sm sm:w-10/12 bg-yellow-600 relative overflow-hidden">
                    <img src={profile} alt="profile" />
                    <motion.div
                        initial={{ x : 0}}
                        animate={{ x : "100%" }}
                        id="photo-cover"
                        className=" backdrop-blur-3xl w-full h-full duration-1000 absolute bottom-0"
                    ></motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Home
