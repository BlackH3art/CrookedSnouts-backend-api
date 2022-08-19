import { Module } from '@nestjs/common';
import { NftDataService } from './nft-data.service';
import { NftDataController } from './nft-data.controller';

@Module({
  providers: [NftDataService],
  controllers: [NftDataController]
})
export class NftDataModule {}
