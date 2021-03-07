import { ApiProperty } from '@nestjs/swagger';
import { ProjectMedia } from './ProjectMedia';

export class CreateProject {
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

