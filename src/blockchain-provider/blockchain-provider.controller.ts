import { Controller, Get, Header, Inject, Param } from '@nestjs/common';
import { BlockchainProviderService } from './blockchain-provider.service';

const crooked = "https://crookedsnouts.com";
const local = "http://localhost:3000"

@Controller('blockchain-provider')
export class BlockchainProviderController {
  
  constructor(
    @Inject(BlockchainProviderService) private BlockchainProvider: BlockchainProviderService,
    ) {}
    
    // get max whitelist spots
    // @Header('Access-Control-Allow-Origin', crooked)
  @Get('/whitelist/spots/max')
  getMaxWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxWhitelistSpots();
  }

  // @Header('Access-Control-Allow-Origin', crooked)
  @Get('/whitelist/spots/max-public')
  getMaxPublicWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxPublicWhitelistSpots();
  }

  // @Header('Access-Control-Allow-Origin', crooked)
  @Get('/whitelist/spots/max-owner')
  getMaxOwnerWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxOwnerWhitelistSpots();
  }

  // get taken spots
  // @Header('Access-Control-Allow-Origin', crooked)
  @Get('/whitelist/spots/public-taken')
  getPublicSpotsTaken(): Promise<number> {
    return this.BlockchainProvider.getPublicSpotsTaken();
  }

  // @Header('Access-Control-Allow-Origin', crooked)
  @Get('/whitelist/spots/owner-taken')
  getOwnerSpotsTaken(): Promise<number> {
    return this.BlockchainProvider.getOwnerSpotsTaken();
  }

  // get whitelist open and close time
  // @Header('Access-Control-Allow-Origin', crooked)
  @Get('/whitelist/open')
  getWhitelistOpen(): Promise<number> {
    return this.BlockchainProvider.getWhitelistOpen();
  }

  // @Header('Access-Control-Allow-Origin', crooked)
  @Get('/whitelist/close')
  getWhitelistClose(): Promise<number> {
    return this.BlockchainProvider.getWhitelistClose();
  }

  // check if address is whitelisted
  // @Header('Access-Control-Allow-Origin', crooked)
  @Get('/whitelist/isWhitelisted/:address')
  getIsWhitelisted(
    @Param('address') address: string
  ): Promise<boolean> {
    return this.BlockchainProvider.getIsWhitelisted(address);
  }
}
