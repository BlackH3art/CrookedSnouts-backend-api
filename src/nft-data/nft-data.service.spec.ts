import { Test, TestingModule } from '@nestjs/testing';
import { NftDataService } from './nft-data.service';

describe('NftDataService', () => {
  let service: NftDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NftDataService],
    }).compile();

    service = module.get<NftDataService>(NftDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
