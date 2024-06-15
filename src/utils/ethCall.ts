import {
  JsonRpcRequestPayload,
  Params,
} from '../lib/interfaces/jsonRpcRequest.js';

/**
 * This function creates the payload necessary for making JSON-RPC calls such as `eth_call`.
 *
 * @param {Object|string} param - An object containing the 'to' and 'data' properties for the RPC call, or the method signature.
 * @param {string} method - The JSON-RPC method to be invoked (e.g., 'eth_call', 'eth_sendTransaction').
 * @param {string} [tag='latest'] - The block number tag specifying the state to query or transact with. Common values are 'latest', 'earliest', or 'pending'.
 * @param {number} [id=1] - A unique identifier for the JSON-RPC request, used to match responses with requests.
 * @returns {object} The JSON-RPC payload formatted as an object.
 *
 * @example
 * const data = constructEthMethodPayload(
 *  {
 *   to: '0xCONTRACT_ADDRESS',
 *   data: '0x6352211e#,
 *  },
 *  'eth_call'
 * );
 */
export const constructEthMethodPayload = (
  params: Params,
  method: string,
  id: number = 1
): JsonRpcRequestPayload => {
  return {
    jsonrpc: '2.0',
    method,
    params,
    id,
  };
};
