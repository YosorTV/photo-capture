import React from 'react'

import FaqQuestion from './FaqQuestion'

import styled from 'styled-components';
import { bottomReveal } from '../animation';
import { About, Hide } from '../components/styles';
import { useScroll } from './useScroll';

const FaqSection = () => {
  const [element, controls] = useScroll();
  const questions = [
    {
      id:Math.random(),
      title: 'How Do I Start ?',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam."
    },
    {
      id:Math.random(),
      title: 'Daily Schedule ?',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam."
    },
    {
      id:Math.random(),
      title: 'Different Payments Method ?',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam."
    },
    {
      id:Math.random(),
      title: 'What Products do you offer ?',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam."
    }
  ]

  return (
    <Hide>
    <Faq variants={bottomReveal} ref={element} animate={controls} initial="hidden">
      <h2>Any Questions <span>FAQ</span></h2>
      {questions && questions.map(({id, title, description}) => {
        return (
          <FaqQuestion
            key={id}
            title={title}
            description={description}
          />)
        }
      )}
      </Faq>
      </Hide>
  )
}

const Faq = styled(About)`
  display:block;
  @media (max-width:1300px){
    position:relative;
    top:14rem;
  }
    span {
      display:block;
    }
    h2{
      padding-bottom: 9rem;
      font-weight: lighter;
    }
    .faq-line{
      background: #ccc;
      height:.2rem;
      margin: 2rem 0rem;
      width:100%;
    }
    h4{
      cursor: pointer;
    }
    .question{
      padding: 3rem 0rem;
    }
    .description{
      padding: 1rem 0rem;
      cursor: pointer;
    }
`; 

export default FaqSection
