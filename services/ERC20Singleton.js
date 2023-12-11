
import { ethers } from 'ethers';

import erc20 from '../contracts/deployments/xrp/JustDAO.json';

export default async function ERC20Singleton() {


	const provider = new ethers.providers.Web3Provider(window.ethereum);
	let signer = provider.getSigner();
	

	const contract = new ethers.Contract(erc20.address, erc20.abi, signer)

	return contract
}
