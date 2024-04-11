require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY; // replace with your Sepolia private key
const AGUNG_RPC_URL = process.env.AGUNG_RPC_URL; // replace with a Sepolia RPC URL if you have a different one

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    agung: {
      url: AGUNG_RPC_URL,
      chianId: 9990,
      accounts: [`0x${PRIVATE_KEY}`], // Make sure to add 0x prefix to the private key
    },
  },
};