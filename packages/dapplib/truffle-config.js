require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile public grace slight bridge shallow'; 
let testAccounts = [
"0x2859573253302534cd7f47a43204c686cca808a56f00cf7885a55b53cfe72b6b",
"0x7fee6ede9b2437faaf52fe28384f2408cdd5cf0b6e6f7bdabd4ef6e37915b4c4",
"0xab04abaf48b140a2739255aff91c9a19316e570a4efdb06873abc131ddf00b7d",
"0x45044a6b463ef1482e1a2268415a76b550cd6616ce51a8368b31d24885da929c",
"0x88e8db9889f08f1b5eaa71b34be6310a88dae26a389b8138e242c9b85b915c43",
"0x8fc1b7deed767992ca5a928fd3fa1d16bb55f446d9cfe6455d486385b57c246f",
"0x3485a045e0df653342925fdf1de1e17fc46d0696625f96c4497b2f47557e7d8e",
"0xad6834b4f4ce8c9ec090b657edbb71a2c0f4304a190b58ccef53ff5e555cc902",
"0xfb643f71bb50c77ce3f6fb7a2e345a23d7336543974eedd7eb9dcd53f611c4b3",
"0xa3ea0e9fe3e0195f897fbb2d51b0f90798abb9b6497d66478a7d398f2f416d57"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

