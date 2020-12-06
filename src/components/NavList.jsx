import React from 'react';
import { Link } from 'react-router-dom';

const NavList = ({ number, name, page }) => {
  return (
    <li>
      <Link to={page}>{number}. {name}</Link>
    </li>
  )
}

export default NavList
