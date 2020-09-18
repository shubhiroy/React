import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariant = {
    animationOne: {
        x: [-20 ,20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },

    animationTwo: {
        y: [0, 30],
        x: 0,
        transition: {
            y: {
                yoyo:Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
};

const Loader = () => {

const [animation, cycleAnimaiton] = useCycle("animationOne", "animationTwo")

    return ( 
        <>
        <motion.div className="loader"
        variants={loaderVariant}
        animate={animation}
        >
        </motion.div>
        <div onClick={() => cycleAnimaiton()}>Cycle Loader</div>
        </>
     );
}
 
export default Loader;