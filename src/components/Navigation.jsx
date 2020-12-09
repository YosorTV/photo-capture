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
        <Link id="logo" to="/" >.VFS</Link>
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
  min-height: 10vh;
  display:flex;
  margin: auto;
  justify-content: space-between;
  align-items:center;
  padding: 1rem 10rem;
  background:#282828;
  a{
    color:white;
    text-decoration:none;
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
    font-size: 1.8rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`

export default Navigation;
