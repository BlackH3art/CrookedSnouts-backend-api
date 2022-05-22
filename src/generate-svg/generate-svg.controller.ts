import { Controller, Get, Inject } from '@nestjs/common';
import { GenerateSvgService } from './generate-svg.service';

@Controller('generate-svg')
export class GenerateSvgController {


  constructor(
    @Inject(GenerateSvgService) private GenerateSVG: GenerateSvgService,
  ) {

  }


  @Get()
  generateSvG() {
    return this.GenerateSVG.generateSVG()
  }
}
