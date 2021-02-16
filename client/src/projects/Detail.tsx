import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Project } from '../models/Project';

export default function() {
    const [project, setProject] = useState<Project | undefined>();
    const { id } = useParams() as { id: string };

    useEffect(() => {
        fetch('http://api.admin.localhost/project')
            .then(res => res.json())
            .then((res: any) => {
                const newProject = res.filter((p: {name: string}) => p.name === id)[0];
                console.log(newProject);
                setProject({...newProject});
            });
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
