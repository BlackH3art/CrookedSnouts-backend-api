import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainProviderModule } from './blockchain-provider/blockchain-provider.module';
import { ConfigModule } from '@nestjs/config';
import { NftDataModule } from './nft-data/nft-data.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BlockchainProviderModule, NftDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
