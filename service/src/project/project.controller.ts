import { BadRequestException, Body, Controller, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Project } from 'src/models/Project';
import { CreateProject } from 'src/models/CreateProject';

import { MOCK_PROJECTS } from '../mocks/projects';
import { plainToClass } from 'class-transformer';
import { randomInt } from 'crypto';

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
    async createProject(@Body() body: CreateProject) {
        const project = plainToClass(Project, body);
        // todo: use generator for guid?
        project.id = randomInt(53292309);
        MOCK_PROJECTS.push(project);
        return project;
    }

    @Put(':id')
    @HttpCode(204)
    updateById(@Param('id') pId: string, @Body() body: Project) {
        const project = this._getById(pId);
        MOCK_PROJECTS[MOCK_PROJECTS.indexOf(project)] = {...body};
        return;
    }

    private _getById(pId: string) {
        const id = parseInt(pId, 10);

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
