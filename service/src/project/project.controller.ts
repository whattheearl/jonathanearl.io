import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { randomInt } from 'crypto';
import { Project } from 'src/models/Project';

import { MOCK_PROJECTS } from '../mocks/projects';

@Controller('project')
export class ProjectController {
    @Get()
    getAll() {
        return MOCK_PROJECTS;
    }

    @Get(':id')
    getById(@Param('id') pId: string) {
        const project = this._getById(pId);
        return project;
    }

    @Post()
    createProject(@Body() body: Project) {
        body.id = randomInt(8149819);
        MOCK_PROJECTS.push(body);
        return body;
    }

    @Put(':id')
    updateById(@Param('id') pId: string, @Body() body: Project) {
        const project = this._getById(pId);
        MOCK_PROJECTS[MOCK_PROJECTS.indexOf(project)] = {...body};
        return;
    }

    _getById(pId: string) {
        const id = parseInt(pId);

        if (Number.isNaN(id)) {
            throw new BadRequestException('ID IS NOT A NUMBER');
        }

        const project = MOCK_PROJECTS.filter(p =>  p.id === id)[0];

        if (!project) {
            throw new NotFoundException();
        }

        return project;
    }
}
