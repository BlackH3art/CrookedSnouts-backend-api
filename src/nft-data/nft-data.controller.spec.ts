import { Test, TestingModule } from '@nestjs/testing';
import { NftDataController } from './nft-data.controller';

describe('NftDataController', () => {
  let controller: NftDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NftDataController],
    }).compile();

    controller = module.get<NftDataController>(NftDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
