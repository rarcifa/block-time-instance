/**
 * Enumeration for common Ethereum JSON-RPC method names.
 *
 * @enum {string}
 */
export enum EthMethod {
  /**
   * Method for making a call or a transaction to read data.
   */
  Call = 'eth_call',

  /**
   * Method for getting the balance of an account.
   */
  GetBalance = 'eth_getBalance',

  /**
   * Method for getting the block by number.
   */
  GetBlockByNumber = 'eth_getBlockByNumber',
}
