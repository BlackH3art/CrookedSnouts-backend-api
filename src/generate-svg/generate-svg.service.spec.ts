import { Test, TestingModule } from '@nestjs/testing';
import { GenerateSvgService } from './generate-svg.service';

describe('GenerateSvgService', () => {
  let service: GenerateSvgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateSvgService],
    }).compile();

    service = module.get<GenerateSvgService>(GenerateSvgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
