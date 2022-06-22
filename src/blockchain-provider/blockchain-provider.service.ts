import { Injectable } from '@nestjs/common';

import { ethers } from 'ethers';
import { crookedSnoutsWhitelistABI, whitelistMumbaiAddress, whitelistPolygonAddress } from '../utils/constants';

const whitelistContractProvider = () => {
  const ALCHEMY_RPC = process.env.POLYGON_RPC_LINK;
  const GETBLOCK_LINK = process.env.GETBLOCK_LINK;
  const MUMBAI_RPC = process.env.MUMBAI_RPC_LINK;
  const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_RPC);
  const whitelistContract = new ethers.Contract(whitelistPolygonAddress, crookedSnoutsWhitelistABI, provider);

  return whitelistContract;
}

@Injectable()
export class BlockchainProviderService {

  CrookedSnoutsWhitelist: ethers.Contract = whitelistContractProvider();
  
  // get max whitelist spots
  async getMaxWhitelistSpots(): Promise<number> {
    return await this.CrookedSnoutsWhitelist.maxWhitelistedAddresses();
  }

  async getMaxPublicWhitelistSpots(): Promise<number> {
    return await this.CrookedSnoutsWhitelist.publicWhitelistSpots();
  }

  async getMaxOwnerWhitelistSpots(): Promise<number> {
    return await this.CrookedSnoutsWhitelist.ownerWhitelistSpots();
  }

  // get taken spots
  async getPublicSpotsTaken(): Promise<number> {
    return await this.CrookedSnoutsWhitelist.publicSpotsTaken();
  }

  async getOwnerSpotsTaken(): Promise<number> {
    return await this.CrookedSnoutsWhitelist.ownerSpotsTaken();
  }

  // get whitelist open and close time
  async getWhitelistOpen(): Promise<number> {
    return await this.CrookedSnoutsWhitelist.whitelistOpen();
  }

  async getWhitelistClose(): Promise<number> {
    return await this.CrookedSnoutsWhitelist.whitelistClose();
  }

  // check if address is whitelisted
  async getIsWhitelisted(address: string): Promise<boolean> {
    return await this.CrookedSnoutsWhitelist.whitelistedAddresses(address);
  }
}
