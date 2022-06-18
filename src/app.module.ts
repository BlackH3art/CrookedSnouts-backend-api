import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerateSvgModule } from './generate-svg/generate-svg.module';
import { BlockchainProviderModule } from './blockchain-provider/blockchain-provider.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GenerateSvgModule, 
    BlockchainProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
