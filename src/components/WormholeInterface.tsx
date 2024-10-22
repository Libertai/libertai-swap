import WormholeConnect, { dark, nttRoutes } from "@wormhole-foundation/wormhole-connect";

export const WormholeInterface = () => (
	<WormholeConnect
		config={{
			network: "Mainnet",
			routes: [
				...nttRoutes({
					tokens: {
						LTAI: [
							{
								chain: "Base",
								token: "0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a",
								manager: "0xcb66bDF296653E37bEa3D1e73f335cd8472C9261",
								transceiver: [{ address: "0x321dbB84766c4E6D51c7F2015db20F5B9A2C5601", type: "wormhole" }],
							},
							{
								chain: "Solana",
								token: "mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u",
								manager: "ntTziNUdVjNJKZXCFbSZxfmjigyBouS8YLtAp8R2Fwa",
								transceiver: [{ address: "HNzgsJRCAcnnQXeFteFd44zgKJX9Wz9o7juA1qKZaZYB", type: "wormhole" }],
							},
						],
					},
				}),
			],

			chains: ["Base", "Solana"],
			rpcs: {
				BaseSepolia: "https://mainnet.base.org",
				Solana: "https://rpc.ankr.com/solana",
			},
			tokensConfig: {
				LTAIbase: {
					key: "LTAIbase",
					symbol: "LTAI",
					nativeChain: "Base",
					icon: "https://libertai.io/favicon.svg",
					tokenId: {
						chain: "BaseSepolia",
						address: "0xF8B1b47AA748F5C7b5D0e80C726a843913EB573a",
					},
					coinGeckoId: "libertai",
					decimals: 18,
				},
				LTAIsol: {
					key: "LTAIsol",
					symbol: "LTAI",
					nativeChain: "Solana",
					icon: "https://libertai.io/favicon.svg",
					tokenId: {
						chain: "Solana",
						address: "mntpN8z1d29f3MWhMD7VqZFpeYmbD88MgwS3Bkz8y7u",
					},
					coinGeckoId: "libertai",
					decimals: 9,
				},
			},
			ui: {
				title: "LibertAI swap",
				showHamburgerMenu: false,
				menu: [],
				defaultInputs: { fromChain: "Base", toChain: "Solana" },
			},
		}}
		theme={dark}
	/>
);
