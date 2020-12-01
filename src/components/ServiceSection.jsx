import React from 'react';
import styled from 'styled-components';
// UI 
import ServiceUiCard from './ServiceUiCard';

//styles
import { About, Description, Image } from './styles'

// images
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const Services = styled(About)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width:70%;
    padding: 2rem 0rem 4rem 0rem
  }
`
const Cards = styled.div`
  display:flex;
  flex-wrap: wrap;
`
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
  return (
    <Services>
      <Description>
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
      <Image>
        <img src={home2} alt="camera"/>
      </Image>
    </Services>
  )
}

export default ServiceSection
