// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IDID {
    event DIDRegistered(address indexed owner, string did);
    event DIDUpdated(string indexed did, string newDocument);
    event DIDDeactivated(string indexed did);
    
    function register(string calldata did, string calldata document) external;
    function update(string calldata did, string calldata newDocument) external;
    function deactivate(string calldata did) external;
    function resolve(string calldata did) external view returns (string memory document, bool active);
    function verify(string calldata did, address owner) external view returns (bool);
}