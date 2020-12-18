import React from 'react'
import styled from 'styled-components';

const Award = ({title, description}) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  )
}
// styles
const AwardStyled = styled.div`
  padding: 2.5rem;
  h3{
    color:#1b1b1b;
    font-size: 2rem;
  }
  .line{
    width:50%;
    background: #881111;
    height:.5rem;
    margin: 1rem 0rem;
  }
  p{
    padding: 2rem 0rem;
    color:#881111;
  }
`

export default Award
