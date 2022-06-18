import { Controller, Get, Inject, Param } from '@nestjs/common';
import { BlockchainProviderService } from './blockchain-provider.service';

@Controller('blockchain-provider')
export class BlockchainProviderController {

  constructor(
    @Inject(BlockchainProviderService) private BlockchainProvider: BlockchainProviderService,
  ) {}

  // get max whitelist spots
  @Get('/whitelist/spots/max')
  getMaxWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxWhitelistSpots();
  }

  @Get('/whitelist/spots/max-public')
  getMaxPublicWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxPublicWhitelistSpots();
  }

  @Get('/whitelist/spots/max-owner')
  getMaxOwnerWhitelistSpots(): Promise<number> {
    return this.BlockchainProvider.getMaxOwnerWhitelistSpots();
  }

  // get taken spots
  @Get('/whitelist/spots/public-taken')
  getPublicSpotsTaken(): Promise<number> {
    return this.BlockchainProvider.getPublicSpotsTaken();
  }

  @Get('/whitelist/spots/owner-taken')
  getOwnerSpotsTaken(): Promise<number> {
    return this.BlockchainProvider.getOwnerSpotsTaken();
  }

  // get whitelist open and close time
  @Get('/whitelist/open')
  getWhitelistOpen(): Promise<number> {
    return this.BlockchainProvider.getWhitelistOpen();
  }

  @Get('/whitelist/close')
  getWhitelistClose(): Promise<number> {
    return this.BlockchainProvider.getWhitelistClose();
  }

  // check if address is whitelisted
  @Get('/whitelist/isWhitelisted/:address')
  getIsWhitelisted(
    @Param('address') address: string
  ): Promise<boolean> {
    return this.BlockchainProvider.getIsWhitelisted(address);
  }
}
