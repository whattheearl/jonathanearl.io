import React from 'react';
import './App.css';

import projectService from './service/project';
projectService.getItems().then(console.log);

export default function App(): JSX.Element {
  return (
    <main>
      <div>home home on the range</div>      
    </main>
  );
}
