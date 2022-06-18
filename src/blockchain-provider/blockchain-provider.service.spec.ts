import { Test, TestingModule } from '@nestjs/testing';
import { BlockchainProviderService } from './blockchain-provider.service';

describe('BlockchainProviderService', () => {
  let service: BlockchainProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockchainProviderService],
    }).compile();

    service = module.get<BlockchainProviderService>(BlockchainProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
