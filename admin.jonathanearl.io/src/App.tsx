import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ProjectList from './projects/list/list';
import ProjectNew from './projects/newform/newform';
import ProjectEdit from './projects/editform/editform';
import SideBar from './navigation/sidenav';
import './App.css';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="fill row">
        <SideBar />
        <main>
          <Switch>
            <Route exact path="/admin/projects/new">
              <ProjectNew />
            </Route>
            <Route exact path="/admin/projects/:id">
              <ProjectEdit />
            </Route>
            <Route exact path="/admin/projects">
              <ProjectList />
            </Route>
            <Route exact path="/">
              <Redirect to="/admin/projects" />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
