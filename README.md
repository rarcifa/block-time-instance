# Block Time Instance

The Block Time Instance is a TypeScript/JavaScript library designed to facilitate easy and efficient interactions with blockchain data, specifically fetching block information based on timestamps. This library provides methods to interact with blockchain endpoints, allowing developers to find blocks closest to given timestamps seamlessly.

![npm](https://img.shields.io/npm/v/@rarcifa/block-time-instance)
![ES Version](https://img.shields.io/badge/ES6-yellow)
![Node Version](https://img.shields.io/badge/node-20.x-green)

## Features

- Simple and intuitive API for interacting with blockchain data.
- Fetch blocks closest to given timestamps.
- Configurable client instances tailored to your specific blockchain endpoint.

## Installation

To install the package, run the following command in your project directory:

```bash
npm i @rarcifa/block-time-instance
```

## Usage

Here’s how you can use the Block Time Instance in your project:

### Configuring the Instance

```ts
import { createBlockTimeClient } from '@rarcifa/block-time-instance';

const blockInstance = createBlockTimeClient({
  endpoint: 'CUSTOM_RPC_ENDPOINT', // evm rpc endpoint
});
```

### Fetching Block by Timestamp

```ts
const getBlock = async (timestamp) => {
  try {
    const block = await blockInstance.getBlockFromTimestamp(timestamp);
    console.log('Block:', block);
  } catch (error) {
    console.error('Error fetching block:', error);
  }
};

getBlock(1718196040);
```

## API

### BlockTimeInstance Methods

- `getBlockFromTimestamp(timestamp)`: Fetches the block closest to the given timestamp.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Licensing

The code in this project is licensed under MIT license.

## Contact

If you have any questions or comments about the library, please feel free to open an issue or a pull request on our GitHub repository.
