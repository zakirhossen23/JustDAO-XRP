
import { ethers } from "ethers";
export async function sendTransfer(amount, Recipient, ShowAlert) {
	const tx = {
		from: window.ethereum.selectedAddress,
		to: Recipient,
		value: ethers.utils.parseEther(amount),
		gasPrice: 6_000_000_000
	};
	const reciept = await (await signer.sendTransaction(tx)).wait();
	return {
		transaction: `https://evm-sidechain.xrpl.org/tx/${reciept.transactionHash}`
	};
}