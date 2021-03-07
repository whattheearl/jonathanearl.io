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
}

const projectService = new ProjectService();

export default projectService;