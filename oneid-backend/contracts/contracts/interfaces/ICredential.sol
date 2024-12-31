// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ICredential {
    event CredentialIssued(bytes32 indexed id, address indexed issuer, address indexed subject);
    event CredentialRevoked(bytes32 indexed id);
    event CredentialUpdated(bytes32 indexed id, bytes32 newDataHash);
    
    function issue(address subject, bytes32 dataHash, uint256 expiresAt) external returns (bytes32);
    function revoke(bytes32 id) external;
    function verify(bytes32 id) external view returns (bool);
    function update(bytes32 id, bytes32 newDataHash) external;
}