import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { MOCK_PROJECTS } from '../mocks/projects';

@Controller('project')
export class ProjectController {
    @Get()
    getAll() {
        return MOCK_PROJECTS;
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        console.log(id);
        console.log({MOCK_PROJECTS});
        const project = MOCK_PROJECTS.filter(p => {
            console.log({p, id});
            return p.id === Number(id)
        })[0];
        console.log({project});
        return project;
    }
}
