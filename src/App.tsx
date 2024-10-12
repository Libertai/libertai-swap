import WormholeConnect, {nttManualRoute} from '@wormhole-foundation/wormhole-connect';

function App() {
    return (
        <WormholeConnect config={{
            network: "Testnet",
            routes: [nttManualRoute({
                tokens: {
                    LTAI: [{
                        chain: "BaseSepolia",
                        token: "0x92e1d72210429Ce7eE8a0d64D526D4b9752801FF",
                        manager: "0xc16b38Ff76393df09D917F653b24EEA7A3cbafdE",
                        transceiver: [{address: "0x58dC1D987Cb925E778266621Ca8f95c39c37E948", type: 'wormhole'}]
                    }, {
                        chain: "Solana",
                        token: "5ooRTqmvm95bHwp4HMo3iszCwsEseY5hksfSa9EDVpBY",
                        manager: "NTtAhS2BEN2Ek9JU7SfwLPu4MUTWVCUGkwk7DVrGya6",
                        transceiver: [{address: "6boPo5aXJLof2brUi3REN2RjXMPj29FSekEK9iz8L4zB", type: "wormhole"}]
                    }]
                }
            })],

            chains: ["BaseSepolia", "Solana"],
            rpcs: {
                BaseSepolia: "https://sepolia.base.org",
                Solana: "https://api.devnet.solana.com"
            },
            tokensConfig: {
                LTAIbase: {
                    key: "LTAIbase",
                    symbol: "LTAI",
                    nativeChain: "BaseSepolia",
                    icon: "https://libertai.io/favicon.svg",
                    tokenId: {
                        chain: "BaseSepolia",
                        address: "0x92e1d72210429Ce7eE8a0d64D526D4b9752801FF"
                    },
                    coinGeckoId: "libertai",
                    decimals: 18
                },
                LTAIsol: {
                    key: "LTAIsol",
                    symbol: "LTAI",
                    nativeChain: "Solana",
                    icon: "https://libertai.io/favicon.svg",
                    tokenId: {
                        chain: "Solana",
                        address: "5ooRTqmvm95bHwp4HMo3iszCwsEseY5hksfSa9EDVpBY"
                    },
                    coinGeckoId: "libertai",
                    decimals: 9
                }
            }
        }}/>
    );
}

export default App


// routes: nttRoutes({
//     tokens: {
//         LTAI: [{
//             chain: "BaseSepolia",
//             token: "LTAI",
//             manager: "0xc16b38Ff76393df09D917F653b24EEA7A3cbafdE",
//             transceiver: [{address: "0x58dC1D987Cb925E778266621Ca8f95c39c37E948", type: 'wormhole'}]
//         }, {
//             chain: "Solana",
//             token: "LTAI",
//             manager: "NTtAhS2BEN2Ek9JU7SfwLPu4MUTWVCUGkwk7DVrGya6",
//             transceiver: [{address: "6boPo5aXJLof2brUi3REN2RjXMPj29FSekEK9iz8L4zB", type: "wormhole"}]
//         }]
//     }
// }),
