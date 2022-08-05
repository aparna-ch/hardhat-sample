require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/5e7a16f906534263988e6ca0bc8547d8",
      accounts: ["0x652b8fff30b27c61e02434e0b77e12da63949d7724671a79fb85a4097347976e"],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
}