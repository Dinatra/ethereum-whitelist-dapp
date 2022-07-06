const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Whitelist contrat", () => {
    it("Should deploy the contract", async () => {
        const whiteListContract = await ethers.getContractFactory("Whitelist");
        const deployedWhiteListContract = await whiteListContract.deploy(10)
    
        await deployedWhiteListContract.deployed()

        const numAddressesWhiteListed = await deployedWhiteListContract.numAddressesWhiteListed()

        expect(numAddressesWhiteListed).to.equal(0)
    })

    it("Should add new whitelisted user", async () => {
        const whiteListContract = await ethers.getContractFactory("Whitelist");
        const deployedWhiteListContract = await whiteListContract.deploy(10)
    
        await deployedWhiteListContract.deployed()

        await deployedWhiteListContract.addAddressToWhiteList()
        const numAddressesWhiteListed = await deployedWhiteListContract.numAddressesWhiteListed()

        expect(numAddressesWhiteListed).to.equal(1)
    })
})