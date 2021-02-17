import React from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css';

export default function () {
  return (
    <nav className="side-bar">
      <ul>
        <li>
          <Link to="/admin/projects">projects</Link>
          <Link to="/admin/users">users</Link>
          <Link to="/admin/projects">blogs</Link>
          <Link to="/admin/projects">????</Link>
        </li>
      </ul>
    </nav>
  )
}