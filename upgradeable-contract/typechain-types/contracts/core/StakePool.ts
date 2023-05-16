/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type LiquidityMiningIntervalStruct = {
  id: PromiseOrValue<BigNumberish>;
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  totalLendAmount: PromiseOrValue<BigNumberish>;
  totalBorrowedAmount: PromiseOrValue<BigNumberish>;
  isActive: PromiseOrValue<boolean>;
};

export type LiquidityMiningIntervalStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  boolean
] & {
  id: BigNumber;
  startTime: BigNumber;
  endTime: BigNumber;
  totalLendAmount: BigNumber;
  totalBorrowedAmount: BigNumber;
  isActive: boolean;
};

export interface StakePoolInterface extends utils.Interface {
  functions: {
    "changeDisburseTokenAmount(uint256)": FunctionFragment;
    "depositInterest()": FunctionFragment;
    "disburseBruTokenToUsers(uint256)": FunctionFragment;
    "endLiquidityMiningInterval(uint256)": FunctionFragment;
    "getLatestIntervalForPool(uint256)": FunctionFragment;
    "isIntervalActive(uint256)": FunctionFragment;
    "startLiquidityMiningInterval(uint256,uint256)": FunctionFragment;
    "updateBorrowAmountInInterval(uint256,uint256,address,uint256)": FunctionFragment;
    "updateLendAmountInInterval(uint256,uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeDisburseTokenAmount"
      | "depositInterest"
      | "disburseBruTokenToUsers"
      | "endLiquidityMiningInterval"
      | "getLatestIntervalForPool"
      | "isIntervalActive"
      | "startLiquidityMiningInterval"
      | "updateBorrowAmountInInterval"
      | "updateLendAmountInInterval"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeDisburseTokenAmount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disburseBruTokenToUsers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "endLiquidityMiningInterval",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestIntervalForPool",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isIntervalActive",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startLiquidityMiningInterval",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBorrowAmountInInterval",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLendAmountInInterval",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeDisburseTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disburseBruTokenToUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endLiquidityMiningInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestIntervalForPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isIntervalActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startLiquidityMiningInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBorrowAmountInInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLendAmountInInterval",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StakePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakePoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    changeDisburseTokenAmount(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositInterest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disburseBruTokenToUsers(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endLiquidityMiningInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLatestIntervalForPool(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[LiquidityMiningIntervalStructOutput]>;

    isIntervalActive(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    startLiquidityMiningInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      durationInDays: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateBorrowAmountInInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      _type: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateLendAmountInInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      _type: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  changeDisburseTokenAmount(
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositInterest(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disburseBruTokenToUsers(
    poolIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endLiquidityMiningInterval(
    poolIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLatestIntervalForPool(
    poolIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<LiquidityMiningIntervalStructOutput>;

  isIntervalActive(
    poolIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  startLiquidityMiningInterval(
    poolIndex: PromiseOrValue<BigNumberish>,
    durationInDays: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateBorrowAmountInInterval(
    poolIndex: PromiseOrValue<BigNumberish>,
    _type: PromiseOrValue<BigNumberish>,
    _userAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateLendAmountInInterval(
    poolIndex: PromiseOrValue<BigNumberish>,
    _type: PromiseOrValue<BigNumberish>,
    _userAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeDisburseTokenAmount(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositInterest(overrides?: CallOverrides): Promise<void>;

    disburseBruTokenToUsers(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    endLiquidityMiningInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getLatestIntervalForPool(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<LiquidityMiningIntervalStructOutput>;

    isIntervalActive(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    startLiquidityMiningInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      durationInDays: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateBorrowAmountInInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      _type: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLendAmountInInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      _type: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    changeDisburseTokenAmount(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositInterest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disburseBruTokenToUsers(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endLiquidityMiningInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLatestIntervalForPool(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isIntervalActive(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startLiquidityMiningInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      durationInDays: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateBorrowAmountInInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      _type: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateLendAmountInInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      _type: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeDisburseTokenAmount(
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositInterest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disburseBruTokenToUsers(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endLiquidityMiningInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLatestIntervalForPool(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isIntervalActive(
      poolIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startLiquidityMiningInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      durationInDays: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateBorrowAmountInInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      _type: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateLendAmountInInterval(
      poolIndex: PromiseOrValue<BigNumberish>,
      _type: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}