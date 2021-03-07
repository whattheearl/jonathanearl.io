import React, { FormEvent, useState } from 'react';
import Project from '../../models/project';
import ProjectService from '../../service/project';

export default function ProjectNewForm() {
    const emptyProject: Project = {
        name: '',
        summary: '',
        startDate: '',
        endDate: '',
        media: { url: '', githubUrl: '', previewImg: '' }
    };
    const [project, setProject] = useState<Project>(emptyProject);

    const handleChange = (event: React.FormEvent<HTMLTextAreaElement> | React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        const data = {...project, media: { ...project.media }};
        switch(name) {
            case 'name':
                data.name = value;
                break;
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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(project);
        await ProjectService.create(project);
        console.log('commit');   
    }

    return (
        <form className="project-edit-form fill col" onSubmit={handleSubmit}>
            <h1>NEW PROJECT</h1>
            <h2>{project.name}</h2>
            <label>Name</label>
            <input name="name" type="text" value={project.name} onChange={handleChange}/>

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
