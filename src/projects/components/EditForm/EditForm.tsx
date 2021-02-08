import react, { SyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditForm.css'
import { PROJECTS } from '../../mocks/projects';

export default function () {
    const { id } = useParams() as { id: string };
    const PROJECT = PROJECTS.filter(project => project.name === id)[0]
    const [project, setProject] = useState({ ...PROJECT });

    const onChange = (event: React.FormEvent<HTMLTextAreaElement> | React.FormEvent<HTMLInputElement>) => {
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

    return (
        <form>
            <h1>PROJECTDETAIL</h1>
            <h2>{project.name}</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label>Preview Image</label>
                <input name="previewImg" type="text" value={project.media.previewImg} onChange={onChange}/>

                <label>Github Url</label>
                <input name="githubUrl" type="text" value={project.media.githubUrl} onChange={onChange}/>

                <label>Summary</label>
                <textarea name="summary" value={project.summary} onChange={onChange}/>

                <label>Media Url</label>
                <input name="url" type="text" value={project.media.url} onChange={onChange}/>

                <label>End date</label>
                <input name="endDate" type="text" value={project.endDate} onChange={onChange}/>
            </div>
        </form>
    );
}
