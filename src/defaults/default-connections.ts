import { NetworkConnection, NetworkName } from "../networks/connections/network-connection.types";

export const DEFAULT_RPC_URL: Record<NetworkName, string> = {
	"polygon-mumbai": "https://rpc-mumbai.matic.today",
	bsc: "https://bsc-dataseed.binance.org",
	ethereum: "https://eth-mainnet.public.blastapi.io",
	polygon: "https://rpc-mainnet.matic.quiknode.pro",
	zil: "",
	hardhat: "http://127.0.0.1:8545/",
	aurora: "https://mainnet.aurora.dev",
	cronos: "https://cronosrpc-1.xstaking.sg"
};

export class DefaultTools {
	static getDefaultConnection(networkName: NetworkName): NetworkConnection {
		const url = DEFAULT_RPC_URL[networkName];
		return {
			networkName: networkName,
			rpcUrl: url,
		};
	}
}