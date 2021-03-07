import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { ProjectMedia } from './ProjectMedia';

export class Project {
    @IsNumber()
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    summary: string;
    @ApiProperty()
    startDate: string;
    @ApiProperty()
    endDate?: string;
    @ApiProperty()
    media?: ProjectMedia
}

