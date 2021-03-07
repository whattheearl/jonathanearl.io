import { ApiProperty } from '@nestjs/swagger';

export class ProjectMedia {
    @ApiProperty()
    previewImg: string;
    @ApiProperty()
    url: string;
    @ApiProperty()
    githubUrl: string;
}