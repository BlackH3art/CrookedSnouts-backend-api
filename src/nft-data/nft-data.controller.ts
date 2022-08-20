import { Controller, Get, Header, Inject, Param } from '@nestjs/common';
import { NftDataService } from './nft-data.service';
import { crooked, local } from 'src/utils/constants';

import { NFTsResponseInterface } from 'src/interfaces/NFTsResponseInterface';


@Controller('nft-data')
export class NftDataController {

  constructor(
    @Inject(NftDataService) private NftData: NftDataService
  ) {}


  @Header('Access-Control-Allow-Origin', crooked)
  @Get('/:address')
  getAddressNfts(
    @Param('address') address: string
  ): Promise<NFTsResponseInterface[]> {
    return this.NftData.getAddressNfts(address);
  }
}
