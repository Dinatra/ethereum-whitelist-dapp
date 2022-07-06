// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract Whitelist {

    uint public maxWhiteListedAddresses;

    mapping(address => bool) public whiteListedAddresses;

    uint8 public numAddressesWhiteListed;

    constructor(uint _maxWhiteListedAddresses) {
        maxWhiteListedAddresses = _maxWhiteListedAddresses;
    }

    function addAddressToWhiteList() public {
        require(!whiteListedAddresses[msg.sender], "You are already been whitelisted");

        require(numAddressesWhiteListed < maxWhiteListedAddresses, "Limit reached, cannot add more addresses to the whitelist");

        whiteListedAddresses[msg.sender] = true;

        numAddressesWhiteListed += 1;
    }

    
}