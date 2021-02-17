import Project from '../Models/Project'

class ProjectService {
    getItems() {
        return fetch('http://api.admin.localhost/project')
            .then(res => res.json());
    }

    getItemById(id: number) {
        return fetch('http://api.admin.localhost/project')
            .then(res => res.json())
            .then((res: Project[]) => {
                return res.filter(p => p.id === id)[0];
            });
    }

    getItemByName(name: string) {
        return fetch('http://api.admin.localhost/project')
            .then(res => res.json())
            .then((res: Project[]) => {
                return res.filter(p => p.name === name)[0];
            });
    }
}

const projectService = new ProjectService();

export default projectService;