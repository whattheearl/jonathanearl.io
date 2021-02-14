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

        if (Number.isNaN(id)) {
            throw new BadRequestException('ID IS NOT A NUMBER');
        }

        const projects = MOCK_PROJECTS.filter(p =>  p.id === id)[0];

        if (!projects) {
            throw new NotFoundException();
        }

        return projects;
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
