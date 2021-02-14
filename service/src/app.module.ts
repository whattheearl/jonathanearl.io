import { Module } from '@nestjs/common';
import { ProjectController } from './project/project.controller';

@Module({
  imports: [],
  controllers: [ProjectController],
  // providers: [AppService],
})
export class AppModule {}
