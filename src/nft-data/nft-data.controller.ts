import { Controller, Get, Inject, Param } from '@nestjs/common';
import { NftDataService } from './nft-data.service';

import { NFTsResponseInterface } from 'src/interfaces/NFTsResponseInterface';


@Controller('nft-data')
export class NftDataController {

  constructor(
    @Inject(NftDataService) private NftData: NftDataService
  ) {}


  @Get('/:address')
  getAddressNfts(
    @Param('address') address: string
  ): Promise<NFTsResponseInterface[]> {
    return this.NftData.getAddressNfts(address);
  }
}
