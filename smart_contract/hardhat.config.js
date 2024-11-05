require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.27",
    networks: {
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/8uH2Qzcg8DB494070pLE9DJDPoE8_Rxi",
            accounts: ["48683f88f2c0289e54e136187c3b06af3d5ce5a2170689c84cc414908e95046e"],
        },
    },
};

// Voting contract deployed to:  0x8D9459F9Ff5C8f17380fD21070EBc5Ea40cf986a