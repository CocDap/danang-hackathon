# Challenge 2: Lending and Borrowing Protocol 

This project demonstrates how to use Hardhat with Polkadot. It comes with a few sample contracts, Hardhat Ignition modules that deploy the contract and binaries needed for local deployment.

1) All binaries are in the `binaries` folder. Be sure to update the path of the binaries in the `hardhat.config.ts` file.

2) Time is returned in milliseconds in Polkadot. See the ignition module `Lock.ts`.


Then configure the hardhat config as per documentation (linked below).


5) Commands to run the project:

```bash
git clone git@github.com:UtkarshBhardwaj007/hardhat-polkadot-example.git

npm install

npx hardhat vars set WESTEND_HUB_PK (your westend asset hub private key)

(optional) npm install --save-dev solc@<WHATEVER-VERSION-YOU-NEED> (if you need a specific solc version or you get errors regarding your solc version)

npx hardhat compile

npx hardhat ignition deploy ./ignition/modules/MyToken.ts --network westendAssetHub
```

6) Resources:
- [Polkadot Smart Contracts Documentation](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/)
- [Polkadot Smart Contracts Tutorial](https://papermoonio.github.io/polkadot-mkdocs/tutorials/smart-contracts/)
- [Polkadot Smart Contract Basics](https://papermoonio.github.io/polkadot-mkdocs/polkadot-protocol/smart-contract-basics/)
- [Hardhat-Polkadot Plugin](https://github.com/paritytech/hardhat-polkadot/tree/main/packages/hardhat-polkadot)
- [SubScan Block Explorer for Asset Hub Westend](https://assethub-westend.subscan.io/)
- [Remix for Polkadot](https://remix.polkadot.io/)
- [Old Smart Contract Docs](https://contracts.polkadot.io/)

7) Support Channels:
- [Discord](https://discord.gg/polkadot)
- [Stack Exchange](https://substrate.meta.stackexchange.com/)
- [Telegram](https://t.me/substratedevs)
- [Reddit](https://www.reddit.com/r/Polkadot/)



LendingTokenModule#LendingToken - 0xdD6AC228fc29b3827E8E728Da1737322E84FF1a6
CollateralTokenModule#CollateralToken - 0x4D039C42243643EC7015A64B93bdb5A89ddD5944
LendingBorrowingModule#LendingBorrowing - 0x006aeBBf1b039C2A190028BA4E7A60C429a6c746
