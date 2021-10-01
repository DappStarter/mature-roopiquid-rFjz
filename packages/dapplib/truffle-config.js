require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan rice sad unlock harvest merry fog sister'; 
let testAccounts = [
"0x663df016ce582fe7e1c9b1e2e6e74ce203efa69b22d8d5a726b4dcc3834cfa1e",
"0x88d2e032a9ac8f33748e3e0b544931827e5d0eb95c819355efbb9aafb2ab55d3",
"0x447cc2fe2cfb8e221d0d6eb24331104ae0e1e0c68572e568aac75843939d8bac",
"0xb5664af2b888b60a53feaf46d12d5d2765ad31b7e52d75b665fddb1657e7e868",
"0x51e1528dffb1097d4a31d81e7d430bee4f4aee1518de8c152a75e759efd2d4fe",
"0x58e613e3f7de5c1338884d2cbbd950106e9d9d03dc55825783212d068d517382",
"0x224918c834d3ca9c0273aa325cf003b2dbb9de78f126d66ba8c97d837b348fa7",
"0xade21eda41d071f2577e0c1a511ea7097d3c0d78b1f0f02b4f9e815fda213e2b",
"0x608acd10620a9f54a7e05669b442d1095cdb4d1db30dcb7749d4ca571db2fb3d",
"0xc0243792f79a99dc792c701182bf4cb57845593a14a1ba6ae8a3507b1f8231fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

