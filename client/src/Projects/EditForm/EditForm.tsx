import react, { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Project from '../../Models/Project';
import './EditForm.css'
import ProjectService from '../../Service/Project';

export default function () {
    const { id } = useParams() as { id: string };
    const [project, setProject] = useState<Project | undefined>();

    useEffect(() => {
        ProjectService.getItemByName(id)
            .then(project => {
                setProject({...project});
            });
    }, [])

    if (!project) {
        return (<div>loading...</div>);
    }

    const handleChange = (event: React.FormEvent<HTMLTextAreaElement> | React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        const data = {...project, media: { ...project.media }};
        switch(name) {
            case 'summary':
                data.summary = value;
                break;
            case 'previewImg':
                data.media.previewImg = value;
                break;
            case 'githubUrl':
                data.media.githubUrl = value;
                break;
            case 'url':
                data.media.url = value;
                break;
            case 'endDate':
                data.endDate = value;
                break;
            default: 
                throw new Error('html element not in state');
        }
        setProject(data);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('commit');
        
    }

    return (
        <form className="project-edit-form fill col" onSubmit={handleSubmit}>
            <h1>PROJECTDETAIL</h1>
            <h2>{project.name}</h2>
            <label>Preview Image</label>
            <input name="previewImg" type="text" value={project.media.previewImg} onChange={handleChange}/>

            <label>Github Url</label>
            <input name="githubUrl" type="text" value={project.media.githubUrl} onChange={handleChange}/>

            <label>Summary</label>
            <textarea name="summary" rows={4} value={project.summary} onChange={handleChange}/>

            <label>Media Url</label>
            <input name="url" type="text" value={project.media.url} onChange={handleChange}/>

            <label>End date</label>
            <input name="endDate" type="text" value={project.endDate} onChange={handleChange}/>

            <div className="row">
                <button type="submit">commit</button>
            </div>
        </form>
    );
}
