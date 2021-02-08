import react, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { PROJECTS } from '../mocks/projects';

export default function() {
    const { id } = useParams() as { id: string };
    const PROJECT = PROJECTS.filter(project => project.name === id)[0]
    const [project, setProject] = useState({...PROJECT});


    return (
        <div>
            <h1>PROJECTDETAIL</h1>
            <div>{project.name}</div>
            <div>{project.summary}</div>
            <img src={project.media.previewImg} alt=""/>
            <div>{project.endDate}</div>
        </div>
    );
}
