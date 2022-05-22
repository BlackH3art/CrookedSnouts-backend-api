import { Module } from '@nestjs/common';
import { GenerateSvgController } from './generate-svg.controller';
import { GenerateSvgService } from './generate-svg.service';

@Module({
  controllers: [GenerateSvgController],
  providers: [GenerateSvgService]
})
export class GenerateSvgModule {}
