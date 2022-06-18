import { Module } from '@nestjs/common';
import { BlockchainProviderController } from './blockchain-provider.controller';
import { BlockchainProviderService } from './blockchain-provider.service';

@Module({
  controllers: [BlockchainProviderController],
  providers: [BlockchainProviderService]
})
export class BlockchainProviderModule {}
