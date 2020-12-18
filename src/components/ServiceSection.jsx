import React from 'react';
import styled from 'styled-components';

// UI 
import ServiceUiCard from './ServiceUiCard';
//styles
import { About, Description, Image } from './styles';
import { useScroll } from './useScroll';
// images
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { leftReveal, rightReveal } from '../animation';

const uiCard = [
  {
    id: Math.random(),
    icon: clock,
    title: "Efficient",
    description: "Lorem ipsum dolor sit amet."
  },
  {
    id: Math.random(),
    icon: teamwork,
    title: "Teamwork",
    description: "Lorem ipsum dolor sit amet."
  },
  {
    id: Math.random(),
    icon: diaphragm,
    title: "Diaphragm",
    description: "Lorem ipsum dolor sit amet."
  },
  {
    id: Math.random(),
    icon: money,
    title: "Affrodable",
    description: "Lorem ipsum dolor sit amet."
  }
]

const ServiceSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Services>
      <Description
        ref={element}
        animate={controls}
        initial="hidden"
        variants={leftReveal}>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          {uiCard.map(({id, icon, title, description}) => {
            return (
            <ServiceUiCard
              key={id}
              icon={icon}
              title={title}
              description={description}
            />
        )})}
        </Cards>
      </Description>
      <Image 
        ref={element2}
        animate={controls2}
        initial="hidden"
        variants={rightReveal}>
        <img src={home2} alt="camera"/>
      </Image>
    </Services>
  )
}

const Services = styled(About)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width:70%;
    padding: 2rem 0rem 2rem 0rem
  }
`
const Cards = styled.div`
  display:flex;
  flex-wrap: wrap;
`

export default ServiceSection
