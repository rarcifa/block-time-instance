import { blockTime } from '../../utils/blockTime.js';
import axios, { AxiosInstance } from 'axios';

/**
 * Represents a blockchain block with its number and timestamp.
 *
 * @interface
 */
export interface Block {
  block: number;
  timestamp: number;
}

/**
 * Represents the state of the blockchain interaction, including cached blocks and requests made.
 *
 * @interface
 */
export interface State {
  ethereumInstance: AxiosInstance;
  checkedBlocks: { [key: number]: number[] };
  cachedBlocks: { [key: string]: Block };
  requests: number;
  latestBlock?: Block;
  firstBlock?: Block;
  averageBlockTime?: number;
}

/**
 * Interface for the blockTime instance methods.
 *
 * @interface
 * @property {Function} getBlockFromTimestamp - Gets the block closest to the given timestamp.
 */
interface BlockTimeInstance {
  /**
   * Fetches the block from a timestamp.
   *
   * @param {number} timestamp - The timestamp value to get the closed block from.
   * @returns {Promise<Block>} A promise that resolves to the block numbe closest to the timestamp.
   */
  getBlockFromTimestamp: (timestamp: number) => Promise<Block>;
}

/**
 * Configuration parameters for creating a blockTime instance.
 *
 * @interface
 * @property {string} endpoint - The RPC endpoint URL.
 */
interface BlockTimeConfig {
  endpoint: string;
}

/**
 * Creates a new instance for interacting with the blockchain to get blocks by timestamp.
 *
 * @param {Object} config - The configuration object.
 * @param {string} config.endpoint - The RPC endpoint URL.
 * @returns {Object} The blockchain instance with methods to interact with.
 *
 * @example
 * const blockInstance = createBlockTimeClient({
 *   endpoint: 'RPC_ENDPOINT'
 * });
 */
export const createBlockTimeClient = ({
  endpoint,
}: BlockTimeConfig): BlockTimeInstance => {
  const ethereumInstance: AxiosInstance = axios.create({
    baseURL: endpoint,
  });

  const state: State = {
    ethereumInstance,
    checkedBlocks: {},
    cachedBlocks: {},
    requests: 0,
  };

  return {
    /**
     * Gets the block closest to the given timestamp.
     *
     * @param {number} timestamp - The timestamp to find the block for.
     * @returns {Promise<Block>} A promise that resolves to the block closest to the given timestamp.
     *
     * @example
     * const blockInstance = createBlockTimeClient({
     *   endpoint: 'RPC_ENDPOINT'
     * });
     *
     * async function getBlock() {
     *   try {
     *     const block = await instance.getBlockFromTimestamp(1718196040);
     *     console.log('Block:', block);
     *   } catch (e) {
     *     console.error('Error fetching block:', e);
     *   }
     * }
     *
     * getBlock();
     */
    getBlockFromTimestamp: (timestamp: number): Promise<Block> =>
      blockTime.getBlockFromTimestamp(timestamp, state),
  };
};
