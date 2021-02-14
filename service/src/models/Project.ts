import { ApiPropertyOptional } from "@nestjs/swagger";
import { ApiProperty } from '@nestjs/swagger';
import { ProjectMedia } from './ProjectMedia';

export class Project {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    summary: string;
    @ApiProperty()
    startDate: string;
    @ApiProperty()
    endDate: string;
    @ApiProperty()
    media: ProjectMedia
}

