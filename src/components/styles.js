import styled from 'styled-components';

export const About = styled.div`
  min-height: 90vh;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;`

export const Description = styled.div`
  flex:1;
  padding-right: 5rem;
    h2{
      font-weight: lighter;
}`

export const Image = styled.figure`
  flex: 1;
  overflow: hidden;
    img{
      width:100%;
      object-fit:cover;
      height: 80vh;
    }`

export const Hide = styled.div`
    overflow:hidden;
  `

export const Card = styled.div`
  flex-basis:20rem;
  .icon{
    display:flex;
    align-items:center;
    }
    h3{
      margin-left: 1rem;
      background: white;
      color:black;
      padding: 1rem;
    }`