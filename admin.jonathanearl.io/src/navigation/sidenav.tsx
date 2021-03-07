import React from 'react';
import { Link } from 'react-router-dom';

import './sidenav.css';

export default function SideNav() {
  return (
    <nav className="side-bar">
      <ul>
        <li>
          <Link to="/admin/projects">projects</Link>
          <Link to="/admin/projects/new">new</Link>
          <Link to="/admin/projects">????</Link>
        </li>
      </ul>
    </nav>
  )
}