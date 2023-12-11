import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import ERC20Singleton from './ERC20Singleton';
import Web3 from "web3";
import erc20 from '../contracts/deployments/xrp/JustDAO.json';


const sleep = milliseconds => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}
export default function useContract() {
	const [contractInstance, setContractInstance] = useState({
		contract: null,
		signerAddress: null,
		sendTransaction: sendTransaction,
		formatTemplate: formatTemplate,
		saveReadMessage: saveReadMessage
	})
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (window.localStorage.getItem("login-type") === "metamask") {
					const provider = new ethers.providers.Web3Provider(window.ethereum);
					const signer = provider.getSigner();
					const contract = { contract: null, signerAddress: null, sendTransaction: sendTransaction,formatTemplate: formatTemplate,
						saveReadMessage: saveReadMessage };



					let contract2 = await ERC20Singleton();
					contract.contract = contract2;
					window.contract = contract2;


					window.sendTransaction = sendTransaction;
					window.signer = signer;
					contract.signerAddress = await signer.getAddress();


					setContractInstance(contract);
					console.clear();
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])


	async function sendTransaction(methodWithSignature) {
		try {
			const tx = {
				...methodWithSignature,
				value: 0,
			}
			await (await window.signer.sendTransaction(tx)).wait();
		} catch (error) {
			await sleep(1500)
		}
		
	}



	return contractInstance
}


export function formatTemplate(template, changings) {
	for (let i = 0; i < changings.length; i++) {
		const element = changings[i];
		template = template.replaceAll("{{" + element.key + "}}", element.value);
	}
	return template;

}


export async function saveReadMessage(messageid, ideasid, msg_type) {
		let private_key = "e47eb7ab976d439097f5e8fc052e485d0a460721f78f071c40412b1e74a84d7a";
		let provider_url = "https://rpc-evm-sidechain.xrpl.org";
	

	const provider = new ethers.providers.JsonRpcProvider(provider_url);
	const signer = new ethers.Wallet(private_key,provider)
	const contract = new ethers.Contract(erc20.address, erc20.abi, signer)

		contract ;

	
}