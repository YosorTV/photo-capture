import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';

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
  min-height: 5vh;
  display:flex;
  margin: auto;
  justify-content: space-between;
  align-items:center;
  padding: .5rem 5rem;
  border-bottom: 8px solid #881111;
  
  a{
    color:#ffffff;
    text-decoration:none;
    font-size: 1.4rem;
    transition: .2s ease-out;
    &:hover{
      color:#881111
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
    color: #e35023;
  }
`

export default Navigation;
