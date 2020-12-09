import React from 'react';
import { Link } from 'react-router-dom';

const NavList = ({ name, page }) => {
  return (
    <li>
      <Link to={page}>{name}</Link>
    </li>
  )
}

export default NavList
