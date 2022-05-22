import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerateSvgModule } from './generate-svg/generate-svg.module';

@Module({
  imports: [GenerateSvgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
