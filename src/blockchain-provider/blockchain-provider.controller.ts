import { Controller, Get, Header, Inject, Param } from '@nestjs/common';
import { BlockchainProviderService } from './blockchain-provider.service';
import { crooked, local } from 'src/utils/constants';


@Controller('blockchain-provider')
export class BlockchainProviderController {
  
  constructor(
    @Inject(BlockchainProviderService) private BlockchainProvider: BlockchainProviderService,
    ) {}
    
    // get max whitelist spots
  @Header('Access-Control-Allow-Origin', local)
  @Get('/whitelist/spots/max')
  getMaxWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxWhitelistSpots();
  }

  @Header('Access-Control-Allow-Origin', local)
  @Get('/whitelist/spots/max-public')
  getMaxPublicWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxPublicWhitelistSpots();
  }

  @Header('Access-Control-Allow-Origin', local)
  @Get('/whitelist/spots/max-owner')
  getMaxOwnerWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxOwnerWhitelistSpots();
  }

  // get taken spots
  @Header('Access-Control-Allow-Origin', local)
  @Get('/whitelist/spots/public-taken')
  getPublicSpotsTaken(): Promise<number> {
    return this.BlockchainProvider.getPublicSpotsTaken();
  }

  @Header('Access-Control-Allow-Origin', local)
  @Get('/whitelist/spots/owner-taken')
  getOwnerSpotsTaken(): Promise<number> {
    return this.BlockchainProvider.getOwnerSpotsTaken();
  }

  // get whitelist open and close time
  @Header('Access-Control-Allow-Origin', local)
  @Get('/whitelist/open')
  getWhitelistOpen(): Promise<number> {
    return this.BlockchainProvider.getWhitelistOpen();
  }

  @Header('Access-Control-Allow-Origin', local)
  @Get('/whitelist/close')
  getWhitelistClose(): Promise<number> {
    return this.BlockchainProvider.getWhitelistClose();
  }

  // check if address is whitelisted
  @Header('Access-Control-Allow-Origin', local)
  @Get('/whitelist/isWhitelisted/:address')
  getIsWhitelisted(
    @Param('address') address: string
  ): Promise<boolean> {
    return this.BlockchainProvider.getIsWhitelisted(address);
  }
}
