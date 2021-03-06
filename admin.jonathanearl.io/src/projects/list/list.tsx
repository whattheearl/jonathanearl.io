import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ProjectService from '../../service/project';
import Project from '../../models/project';
import './list.css';

export default function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);
    
    useEffect(() => {
        ProjectService.getItems()
            .then(res => setProjects([...res]))
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