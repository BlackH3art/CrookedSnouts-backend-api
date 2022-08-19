import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

import {
  Network,
  Alchemy,
  OwnedNftsResponse,
} from "alchemy-sdk";
import { NFTsResponseInterface } from 'src/interfaces/NFTsResponseInterface';
import { collectionMumbaiAddress, crookedSnoutsCollectionABI } from 'src/utils/constants';



const settings = {
  apiKey: process.env.MUMBAI_RPC_LINK, // Replace with your Alchemy API key.
  network: Network.MATIC_MUMBAI // Replace with your network.
};

const collectionContractProvider = () => {
  // const POLYGON_RPC = process.env.POLYGON_RPC_LINK;
  const MUMBAI_RPC = process.env.MUMBAI_RPC_LINK;
  const provider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC);
  const collectionContract = new ethers.Contract(collectionMumbaiAddress, crookedSnoutsCollectionABI, provider);

  return collectionContract;
}


@Injectable()
export class NftDataService {


  alchemy: Alchemy = new Alchemy(settings);
  CrookedSnoutsCollection: ethers.Contract = collectionContractProvider();




  async getAddressNfts(address: string): Promise<any> {

    const response: OwnedNftsResponse = await this.alchemy.nft.getNftsForOwner(address, {
      contractAddresses: [collectionMumbaiAddress]
    });
    
    const nftsResponse: NFTsResponseInterface[] = response.ownedNfts.map((item) => ({
      tokenId: item.tokenId,
      image: item.rawMetadata.image
    }));
    
    return nftsResponse;
  }

}