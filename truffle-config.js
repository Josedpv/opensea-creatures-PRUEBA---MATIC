const HDWalletProvider = require("@truffle/hdwallet-provider");
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
     
      network_id: "*", // Match any network id
    },
    matic: {
      provider: () => new HDWalletProvider("alone blanket opinion enough hockey income thing champion dog always valley certain"
          , 'https://rpc-mainnet.maticvigil.com')
      ,
     
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skypDryRun: true
    }
  },
  mocha: {
    
  },
  compilers: {
    solc: {
      version: "^0.8.0",
     
    },
  },
 
};