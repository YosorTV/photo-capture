import React from 'react';
import ServiceUiCard from './ServiceUiCard';

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

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
    <div className="services">
      <h2>High <span>quality</span> services</h2>
      <div className="cards">
        {uiCard.map(({id, icon, title, description}) => {
          return (
          <ServiceUiCard
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
          )
        })}
      </div>
      <div className="image">
        <img src={home2} />
      </div>
    </div>
  )
}

export default ServiceSection
