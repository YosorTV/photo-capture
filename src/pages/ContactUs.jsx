import React from 'react'
// Animation
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';
import { Hide } from '../components/styles'
import styled from 'styled-components';

const CoutactUs = () => {
  return (
    <Contact
      variants={pageAnimation} 
      initial="hidden" 
      animate="show" 
      exit="exit"
      style={{background:"#fff"}}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </Title>
    </Contact>
  )
}

const Contact = styled(motion.div)`
  padding: 2.5rem 5rem;
  color: #353535;
  min-height: 90vh;
`

const Title = styled.div`
  margin-bottom: 2rem;
  color: black;
`

export default CoutactUs
