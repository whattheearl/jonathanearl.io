import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import ProjectList from './Projects/List/List';
import ProjectEdit from './Projects/EditForm/EditForm';
import SideBar from './Navigation/SideBar';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="fill row">
        <SideBar></SideBar>

        <main>
          <Switch>
            <Route path="/admin/projects/:id">
              <ProjectEdit />
            </Route>
            <Route path="/admin/projects">
              <ProjectList />
            </Route>
            <Route path="/">
              <Redirect to="/admin/projects" />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
