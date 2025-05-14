import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@parity/hardhat-polkadot';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const dirname = path.resolve();


const config: HardhatUserConfig = {
    solidity: '0.8.28',
    resolc: {
        compilerSource: 'npm',
    },
    networks: {
        hardhat: {
            polkavm: true,
            // Uncomment to deploy to a local fork of the westend network.
            forking: {
                url: 'wss://westend-asset-hub-rpc.polkadot.io',
            },
            // Uncomment to deploy to a local node using the node binary
            // nodeConfig: {
            //     nodeBinaryPath: '/Users/utkarshbhardwaj/Desktop/Projects/UtkarshBhardwaj007/hardhat-polkadot-example/binaries/substrate-node',
            //     rpcPort: 8000,
            //     dev: true,
            // },
            adapterConfig: {
                // adapterBinaryPath: path.join(dirname, 'binaries/eth-rpc'),
                adapterBinaryPath: '/Users/cocdap/polkadot/openguild/polkadot-sdk/target/release/eth-rpc',
                dev: true,
            },
        },
        localNode: {
            polkavm: true,
            url: `http://127.0.0.1:8545`,
        },
        westendAssetHub: {
            polkavm: true,
            url: 'https://westend-asset-hub-eth-rpc.polkadot.io',
            accounts: [process.env.PRIVATE_KEY as string],
        },
    }
};

export default config;
