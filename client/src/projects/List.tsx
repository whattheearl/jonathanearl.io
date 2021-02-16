import react, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function() {
    const [projects, setProjects] = useState<any[]>([]);
    
    fetch('http://api.admin.localhost/project')
        .then(res => res.json())
        .then(res => setProjects([...res]));

    const projectList = projects.map((project) => (
        <div>{project.name}
            <span>
                <button><Link to={`/admin/projects/${project.name}`}>edit</Link></button>
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