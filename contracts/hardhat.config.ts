
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';

module.exports = {
	//Specifing XRP Testnet network for smart contract deploying
	networks: {
		xrp: {
			url: "https://rpc-evm-sidechain.xrpl.org",
			accounts: [`e47eb7ab976d439097f5e8fc052e485d0a460721f78f071c40412b1e74a84d7a`],
			chainId: 1440002,
			gasPrice: 10_000_000_000
		},
	},
	//Specifing Solidity compiler version
	solidity: {
		compilers: [
			{
				version: '0.8.17',
			},
		],
	},
	//Specifing Account to choose for deploying
	namedAccounts: {
		deployer: 0,
	}
};