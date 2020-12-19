import React from 'react'
import home1 from '../img/home1.jpg';
import { About, Description, Image, Hide } from './styles';

import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { fade, photoAnim, titleAnimation } from '../animation';
import Wave from './Wave';

const AboutSection = () => {

return (
<About>
  <Description>
    <motion.div className="title">
      <Hide>
        <motion.h2 variants={titleAnimation}>Our work makes</motion.h2>
      </Hide>
      <Hide>
        <motion.h2 variants={titleAnimation}>your<span> dreams </span>come</motion.h2>
      </Hide>
      <Hide>
        <motion.h2
        variants={titleAnimation}
        >true.</motion.h2>
      </Hide>
    </motion.div>
    <motion.p variants={fade}>
      Contact us for any photography or videography ideas that you have. We have professionals with amazing skills
    </motion.p>
    <Link to="/contact">
      <motion.button variants={fade}>Contact Us</motion.button>
    </Link>
  </Description>
  <Image>
    <motion.img
      variants={photoAnim}
      initial="hidden"
      animate="show"
      src={home1} 
      alt="logo" />
  </Image>
  <Wave/>
</About>
)
}

export default AboutSection