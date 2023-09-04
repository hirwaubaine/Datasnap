import React from 'react';
import { NavLink } from 'react-router-dom';

function SideMenuItem({ to, children }) {
  return (
    <li>
      <NavLink exact to={to} activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
}

export default SideMenuItem;
