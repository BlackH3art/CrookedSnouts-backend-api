import { Test, TestingModule } from '@nestjs/testing';
import { BlockchainProviderController } from './blockchain-provider.controller';

describe('BlockchainProviderController', () => {
  let controller: BlockchainProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockchainProviderController],
    }).compile();

    controller = module.get<BlockchainProviderController>(BlockchainProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
