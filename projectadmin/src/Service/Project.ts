import Project from '../Models/Project'

class ProjectService {
    getItems(): Promise<Project[]> {
        return fetch('http://api.admin.localhost/project')
            .then(res => res.json());
    }

    getItemById(id: number): Promise<Project> {
        return fetch('http://api.admin.localhost/project')
            .then(res => res.json())
            .then((res: Project[]) => {
                return res.filter(p => p.id === id)[0];
            });
    }

    getItemByName(name: string): Promise<Project> {
        return fetch('http://api.admin.localhost/project')
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
        return fetch(`http://api.admin.localhost/project`, options)
            .then(res => res.text);
    }

    saveItem(item: Project) {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        } 
        return fetch(`http://api.admin.localhost/project/${item.id}`, options)
            .then(res => res.text);
    }
}

const projectService = new ProjectService();

export default projectService;