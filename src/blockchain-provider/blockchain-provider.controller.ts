import { Controller, Get, Header, Inject, Param } from '@nestjs/common';
import { BlockchainProviderService } from './blockchain-provider.service';

@Controller('blockchain-provider')
export class BlockchainProviderController {
  
  constructor(
    @Inject(BlockchainProviderService) private BlockchainProvider: BlockchainProviderService,
    ) {}
    
    // get max whitelist spots
  @Get('/whitelist/spots/max')
  @Header('Access-Control-Allow-Origin', 'https://crookedsnouts.com/')
  getMaxWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxWhitelistSpots();
  }

  @Get('/whitelist/spots/max-public')
  @Header('Access-Control-Allow-Origin', 'https://crookedsnouts.com/')
  getMaxPublicWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxPublicWhitelistSpots();
  }

  @Get('/whitelist/spots/max-owner')
  @Header('Access-Control-Allow-Origin', 'https://crookedsnouts.com/')
  getMaxOwnerWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxOwnerWhitelistSpots();
  }

  // get taken spots
  @Get('/whitelist/spots/public-taken')
  @Header('Access-Control-Allow-Origin', 'https://crookedsnouts.com/')
  getPublicSpotsTaken(): Promise<number> {
    return this.BlockchainProvider.getPublicSpotsTaken();
  }

  @Get('/whitelist/spots/owner-taken')
  @Header('Access-Control-Allow-Origin', 'https://crookedsnouts.com/')
  getOwnerSpotsTaken(): Promise<number> {
    return this.BlockchainProvider.getOwnerSpotsTaken();
  }

  // get whitelist open and close time
  @Get('/whitelist/open')
  @Header('Access-Control-Allow-Origin', 'https://crookedsnouts.com/')
  getWhitelistOpen(): Promise<number> {
    return this.BlockchainProvider.getWhitelistOpen();
  }

  @Get('/whitelist/close')
  @Header('Access-Control-Allow-Origin', 'https://crookedsnouts.com/')
  getWhitelistClose(): Promise<number> {
    return this.BlockchainProvider.getWhitelistClose();
  }

  // check if address is whitelisted
  @Get('/whitelist/isWhitelisted/:address')
  @Header('Access-Control-Allow-Origin', 'https://crookedsnouts.com/')
  getIsWhitelisted(
    @Param('address') address: string
  ): Promise<boolean> {
    return this.BlockchainProvider.getIsWhitelisted(address);
  }
}
