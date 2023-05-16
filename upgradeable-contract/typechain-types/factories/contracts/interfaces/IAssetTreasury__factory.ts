/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAssetTreasury,
  IAssetTreasuryInterface,
} from "../../../contracts/interfaces/IAssetTreasury";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAssetTreasury__factory {
  static readonly abi = _abi;
  static createInterface(): IAssetTreasuryInterface {
    return new utils.Interface(_abi) as IAssetTreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAssetTreasury {
    return new Contract(address, _abi, signerOrProvider) as IAssetTreasury;
  }
}