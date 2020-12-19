import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Line } from './Navigation';

const NavList = ({ name, page }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link to={page}>{name}</Link>
      <Line 
        transition={{duration: 0.75}} 
        initial={{width:"0%"}} 
        animate={{width: pathname === page ? "50%" : "0%"}}/>
    </li>
  )
}

export default NavList
