require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    fuji: { // Avalanche testnet
      url: process.env.AVALANCHE_FUJI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: { // Avalanche mainnet
      url: process.env.AVALANCHE_MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
