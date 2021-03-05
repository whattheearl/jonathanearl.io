import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProjectService from '../Service/Project';
import Project from '../Models/Project';

export default function() {
    const [project, setProject] = useState<Project | undefined>();
    const { id } = useParams() as { id: string };

    useEffect(() => {
        ProjectService.getItemByName(id)
            .then(res => setProject({...res}));
    }, [])
    
    if (!project) {
        return (
            <div>loading...</div>
        );
    }

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
