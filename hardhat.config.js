require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
    sources: "./src/contracts",
    cache: "./src/cache",
    tests: "./src/test"
  },
};
