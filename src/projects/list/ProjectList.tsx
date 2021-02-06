import react from 'react';

import { PROJECTS } from '../mocks/projects';

export default function() {

    const projectList = PROJECTS.map((project) => (
        <div>{project.name}
            <span>
                {/* <button><Link to="edit">edit</Link></button> */}
            </span>
        </div>
    ))

    return (
        <div>
            <h1>Projects</h1>
            <div>
                <span>{projectList}</span>
            </div>
        </div>
    );
}