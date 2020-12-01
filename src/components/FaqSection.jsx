import React from 'react'
import styled from 'styled-components';

import { About } from '../components/styles';
import FaqQuestion from './FaqQuestion'

const FaqSection = () => {

  const questions = [
    {
      id:Math.random(),
      title: 'How Do I Start ?',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam."
    },
    {
      id:Math.random(),
      title: 'Daily Schedule.',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam."
    },
    {
      id:Math.random(),
      title: 'Different Payments Method.',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam."
    },
    {
      id:Math.random(),
      title: 'What Products do you offer.',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laboriosam."
    }
  ]

  return (
    <Faq>
      <h2>Any Questions <span>FAQ</span></h2>
      {questions && questions.map(({id, title, description}) => {
        return (
        <FaqQuestion 
          key={id}
          title={title}
          description={description}
        />
        )
      })}
      </Faq>
  )
}

const Faq = styled(About)`
  display:block;
    span {
      display:block;
    }
    h2{
      padding-bottom: 2rem;
      font-weight: lighter;
    }
    .faq-line{
      background: #ccc;
      height:.2rem;
      margin: 2rem 0rem;
      width:100%;
    }
    .question{
      padding: 3rem 0rem;
      cursor: pointer;
    }
    .answer{
      padding: 2rem 0rem;
      p{
        padding: 1rem 0rem;
      }
    }
`; 

export default FaqSection
