import { motion } from "framer-motion";

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

const Service = () => {
  return (
    <motion.div className="w-100 min-h-screen bg-yellow-400 px-4" id="service">
      <h3 className="text-4xl text-center font-bold py-7">My Service</h3>

      <div className="flex flex-wrap justify-center items-center my-auto gap-3 mb-6">
        <div className="card max-w-sm rounded-lg bg-black text-center py-8 px-6">
          <h3 className="text-xl text-yellow-500 font-bold py-4">
            UI/UX <span className="text-white">Design</span>
          </h3>
          <p className="text-md  text-shadow-xl text-yellow-400 text-light mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <motion.button
            variants={buttonVariants}
            whileTap="active"
            className="py-2 px-4 bg-yellow-400 rounded-lg select-none"
          >
            read more
          </motion.button>
        </div>
        <div className="card max-w-sm rounded-lg bg-black text-center py-8 px-6">
          <h3 className="text-xl text-yellow-500 font-bold py-4">
            Web<span className="text-white">Development</span>
          </h3>
          <p className="text-md  text-shadow-xl text-yellow-400 text-light mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <motion.button
            variants={buttonVariants}
            whileTap="active"
            className="py-2 px-4 bg-yellow-400 rounded-lg select-none"
          >
            read more
          </motion.button>
        </div>
        <div className="card max-w-sm rounded-lg bg-black text-center py-8 px-6">
          <h3 className="text-xl text-yellow-500 font-bold py-4">
            UI/UX <span className="text-white">Design</span>
          </h3>
          <p className="text-md  text-shadow-xl text-yellow-400 text-light mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <motion.button
            variants={buttonVariants}
            whileTap="active"
            className="py-2 px-4 bg-yellow-400 rounded-lg select-none"
          >
            read more
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
export default Service;
