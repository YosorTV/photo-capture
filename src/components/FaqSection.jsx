import React from 'react'
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
    <div className="faq">
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
      </div>
  )
}

export default FaqSection
