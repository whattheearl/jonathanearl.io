import react from 'react';

import { PROJECTS } from './mocks/projects';

export default function Projects() {

    const projectList = PROJECTS.map((project) => <div>{project.name}</div>)

    return (
        <div>
            <h1>Projects</h1>
            <div>
                {projectList}
            </div>
        </div>
    );
}