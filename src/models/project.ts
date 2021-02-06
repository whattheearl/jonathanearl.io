export class Project {
    name: string = '';
    summary: string = '';
    startDate: string = '';
    endDate: string = '';
    media: {
        previewImg: string;
        url: string;
        githubUrl: string;
    } = {
        previewImg: '',
        url: '',
        githubUrl: ''
    }
}