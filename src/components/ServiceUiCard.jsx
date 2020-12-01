import React from 'react';
import { Card } from '../components/styles';

const ServiceUiCard = ({icon, title, description}) => {
return (
<Card>
  <div className="icon">
    <img src={icon} alt="icon"/>
    <h3>{title}</h3>
  </div>
  <p>{description}</p>
</Card>
)
}

export default ServiceUiCard