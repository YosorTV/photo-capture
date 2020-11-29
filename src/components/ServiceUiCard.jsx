import React from 'react'

const ServiceUiCard = ({icon, title, description}) => {
return (
<div className="card">
  <div className="icon">
    <img src={icon} alt="icon"/>
    <h3>{title}</h3>
  </div>
  <p>{description}</p>
</div>
)
}

export default ServiceUiCard