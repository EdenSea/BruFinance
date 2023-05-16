/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBruPrice,
  IBruPriceInterface,
} from "../../../contracts/interfaces/IBruPrice";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "ids",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "prices",
        type: "uint256[]",
      },
    ],
    name: "updatePrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBruPrice__factory {
  static readonly abi = _abi;
  static createInterface(): IBruPriceInterface {
    return new utils.Interface(_abi) as IBruPriceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBruPrice {
    return new Contract(address, _abi, signerOrProvider) as IBruPrice;
  }
}
