import { BadRequestException, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';

import { MOCK_PROJECTS } from '../mocks/projects';

@Controller('project')
export class ProjectController {
    @Get()
    getAll() {
        return MOCK_PROJECTS;
    }

    @Get(':id')
    getById(@Param('id') pId: string) {
        const id = parseInt(pId);
        if (Number.isNaN(id))
            throw new BadRequestException('ID IS NOT A NUMBER');

        const projects = MOCK_PROJECTS.filter(p => {
            return p.id === id;
        });

        if (projects.length === 0)
            throw new NotFoundException();

        return projects[0];
    }

    @Post()
    createProject() {
        return 'Create new project';
    }

    @Put(':id')
    updateById(@Param('id') pId: string) {
        return 'update project by id';
    }
}
