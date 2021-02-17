import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Project } from '../../models/Project';
import './List.css';

export default function() {
    const [projects, setProjects] = useState<any[]>([]);
    
    useEffect(() => {
        fetch('http://api.admin.localhost/project')
            .then(res => res.json())
            .then((res: Project[]) => {
                fetch('http://api.admin.localhost/project')
                .then(res => res.json())
                .then(res => setProjects([...res]));
            });
    }, [])

    const projectList = projects.map(project => (
        <li className="project-list-item" key={project.id}>
            <span>{project.name}</span>
            <span><button><Link to={`/admin/projects/${project.name}`}>edit</Link></button></span>
        </li>
    ))

    return (
        <div className="project-list fill">
            <h1>Projects</h1>
            <ol>
                <span>{projectList}</span>
            </ol>
        </div>
    );
}