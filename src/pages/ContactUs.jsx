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
      <div>
        <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send us a message.</h2>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send an a email.</h2>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Social Media</h2>
        </Social>
        </Hide>
      </div>
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
const Circle = styled.div`
  border-radius:50%;
  width: 2rem;
  height: 2rem;
  background:#353535;
`
const Social = styled(motion.div)`
  display:flex;
  align-items: center;
    h2{
      margin: 2rem;
    }
`

export default CoutactUs
