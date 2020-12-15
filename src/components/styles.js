import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 90vh;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 5rem;
  color: white;`

export const Description = styled(motion.div)`
  flex:1;
  padding-right: 5rem;
  z-index:2;
    h2{
      font-weight: lighter;
}`

export const Image = styled(motion.figure)`
  flex: 1;
  overflow: hidden;
  z-index: 2;
    img{
      width:100%;
      object-fit:cover;
      height: 70vh;
    }`

export const Hide = styled.div`
    overflow:hidden;
  `

export const Card = styled.div`
  flex-basis:20rem;
  .icon{
    display:flex;
    align-items:center;
    }
    h3{
      margin-left: 1rem;
      background: white;
      color:black;
      padding: 1rem;
    }`