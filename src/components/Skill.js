import { motion } from 'framer-motion'

const Skill = () => {
    return ( 
        <motion.div
        initial={{ y: "100vh"}}
        animate={{ y: 0 }}
        className="w-100 h-screen flex items-center justify-center bg-slate-300 ">
            <h2 className="text-4xl font-semibold">Error 404</h2>
        </motion.div>
     );
}
 
export default Skill;