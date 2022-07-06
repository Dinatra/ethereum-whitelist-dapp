const { ethers } = require("hardhat");

const init = async () => {
    const whiteListContract = await ethers.getContractFactory("Whitelist");
    const deployedWhiteListContract = await whiteListContract.deploy(10)

    await deployedWhiteListContract.deployed()

    console.log("Whitelist Contract Address:", deployedWhiteListContract.address);
}

init()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
        process.exit(1);
    })

