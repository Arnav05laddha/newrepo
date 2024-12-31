// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DIDRegistry {
    mapping(address => string) public dids;
    mapping(string => address) public owners;
    
    event DIDRegistered(address indexed owner, string did);
    event DIDTransferred(string did, address indexed from, address indexed to);
    
    function register(string calldata did) external {
        require(owners[did] == address(0), "DID already registered");
        require(bytes(dids[msg.sender]).length == 0, "Address already has a DID");
        
        dids[msg.sender] = did;
        owners[did] = msg.sender;
        
        emit DIDRegistered(msg.sender, did);
    }
    
    function transfer(string calldata did, address newOwner) external {
        require(owners[did] == msg.sender, "Not the DID owner");
        require(newOwner != address(0), "Invalid new owner");
        
        delete dids[msg.sender];
        dids[newOwner] = did;
        owners[did] = newOwner;
        
        emit DIDTransferred(did, msg.sender, newOwner);
    }
    
    function verify(string calldata did, address owner) external view returns (bool) {
        return owners[did] == owner;
    }
}