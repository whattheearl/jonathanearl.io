import Project from '../models/project';

const apiUrl = process.env.REACT_APP_API_URL;

class ProjectService {
    getItems(): Promise<Project[]> {
        return fetch(`${apiUrl}/project`)
            .then(res => res.json());
    }

    getItemById(id: number): Promise<Project> {
        return fetch(`${apiUrl}/project`)
            .then(res => res.json())
            .then((res: Project[]) => {
                return res.filter(p => p.id === id)[0];
            });
    }

    getItemByName(name: string): Promise<Project> {
        return fetch(`${apiUrl}/project`)
            .then(res => res.json())
            .then((res: Project[]) => {
                return res.filter(p => p.name === name)[0];
            });
    }

    create(item: Project) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        } 
        return fetch(`${apiUrl}/project`, options)
            .then(res => res.text);
    }

    saveItem(item: Project) {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        } 
        return fetch(`${apiUrl}/project/${item.id}`, options)
            .then(res => res.text);
    }
}

const projectService = new ProjectService();

export default projectService;