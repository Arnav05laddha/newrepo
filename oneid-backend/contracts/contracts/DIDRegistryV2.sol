// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./interfaces/IDID.sol";
import "./access/Ownable.sol";

contract DIDRegistryV2 is IDID, Ownable {
    struct DIDDocument {
        string document;
        bool active;
        uint256 lastUpdated;
    }
    
    mapping(string => DIDDocument) private documents;
    mapping(string => address) private owners;
    mapping(address => string[]) private ownerDIDs;
    
    modifier onlyDIDOwner(string calldata did) {
        require(owners[did] == msg.sender, "Not the DID owner");
        _;
    }
    
    function register(string calldata did, string calldata document) external override {
        require(owners[did] == address(0), "DID already registered");
        
        owners[did] = msg.sender;
        documents[did] = DIDDocument({
            document: document,
            active: true,
            lastUpdated: block.timestamp
        });
        ownerDIDs[msg.sender].push(did);
        
        emit DIDRegistered(msg.sender, did);
    }
    
    function update(string calldata did, string calldata newDocument) external override onlyDIDOwner(did) {
        require(documents[did].active, "DID is not active");
        
        documents[did].document = newDocument;
        documents[did].lastUpdated = block.timestamp;
        
        emit DIDUpdated(did, newDocument);
    }
    
    function deactivate(string calldata did) external override onlyDIDOwner(did) {
        require(documents[did].active, "DID already deactivated");
        
        documents[did].active = false;
        
        emit DIDDeactivated(did);
    }
    
    function resolve(string calldata did) external view override returns (string memory document, bool active) {
        DIDDocument memory doc = documents[did];
        return (doc.document, doc.active);
    }
    
    function verify(string calldata did, address owner) external view override returns (bool) {
        return owners[did] == owner && documents[did].active;
    }
    
    function getDIDs(address owner) external view returns (string[] memory) {
        return ownerDIDs[owner];
    }
}