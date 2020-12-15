import React from 'react'
// Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';
const CoutactUs = () => {
  return (
    <motion.div
      variants={pageAnimation} 
      initial="hidden" 
      animate="show" 
      exit="exit"
    >
      <h2>Coutact Us</h2>
    </motion.div>
  )
}

export default CoutactUs
