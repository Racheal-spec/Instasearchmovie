import React from 'react';
import {motion} from 'framer-motion';
import './Loader.scss';


const Loader = () => {

    return(
        <div className="loader-div">
        <motion.div className="loader"
        variants={loaderVariant}
        animate= 'firstAnime'
        >
         
        </motion.div>
        </div>
    )
}

export default Loader;

const loaderVariant = {
  firstAnime: {
      x: [-30, 30],
      y: [-40, 40],
      transition: {
          x: {
              yoyo: Infinity,
              duration: 0.5
          },
          y: {
              yoyo: Infinity,
              duration: 1
          }
      }
  }
}