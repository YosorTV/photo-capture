import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const navigationList = [
  {
    id: 1,
    link: "About us",
    page: "/"
  },
  {
    id: 2,
    link: "Our work",
    page: "/work"
  },
  {
    id: 3,
    link: "Contact us",
    page: "/contact"
  }
]

const Navigation = () => {
  return (
    <Nav>
      <h1>
        <Link id="logo" to="/" >VFS</Link>
      </h1>
      <ul>
        {navigationList.map(({ id, link, page }) => 
          <NavList 
            key={id} 
            name={link}
            page={page}
          />)}
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  min-height: 4vh;
  display:flex;
  margin: auto;
  justify-content: space-between;
  align-items:center;
  padding: .5rem 5rem;
  background:#881111;
  position: sticky;
  top:0;
  z-index:100;
  a{
    color:#fff;
    text-decoration:none;
    font-size: 1.4rem;
    transition: .2s ease-out;
    &:hover{
      color:#1b1b1b;
    }
  }
  ul{
    display:flex;
    list-style:none;
    li{
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo{
    font-size: 4rem;
    font-family: 'Big Shoulders Inline Text', cursive;
    font-weight: 900;
    color: #fff;
  }
  @media (max-width: 1300px) {
    flex-direction:column;
    padding: 1rem 1rem;
    #logo{
      display:inline-block;
      margin: 1rem;
    }
      ul{
        padding:2rem;
        justify-content:space-around;
        width:100%;
        li{
          padding:0;
        }
      }
  }
`;

export const Line = styled(motion.div)`
  height:.3rem;
  background:#fff;
  width:0%;
  position:absolute;
  bottom:-80%;
  left:55%;
  @media (max-width: 1300px) {
    left:0%;
  }
`

export default Navigation;
