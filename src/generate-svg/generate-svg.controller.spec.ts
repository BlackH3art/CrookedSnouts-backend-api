import { Test, TestingModule } from '@nestjs/testing';
import { GenerateSvgController } from './generate-svg.controller';

describe('GenerateSvgController', () => {
  let controller: GenerateSvgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateSvgController],
    }).compile();

    controller = module.get<GenerateSvgController>(GenerateSvgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
