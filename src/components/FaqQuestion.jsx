import React from 'react'

const FaqQuestion = ({ title, description }) => {
  return (
    <div className="qusetion">
      <h4>{title}</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default FaqQuestion
