// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./interfaces/ICredential.sol";
import "./access/Ownable.sol";

contract CredentialRegistryV2 is ICredential, Ownable {
    struct Credential {
        bytes32 id;
        address issuer;
        address subject;
        bytes32 dataHash;
        uint256 issuedAt;
        uint256 expiresAt;
        bool revoked;
        bytes32[] updates;
    }
    
    mapping(bytes32 => Credential) private credentials;
    mapping(address => bool) public issuers;
    mapping(address => bytes32[]) private subjectCredentials;
    
    modifier onlyIssuer() {
        require(issuers[msg.sender], "Not an authorized issuer");
        _;
    }
    
    modifier onlyCredentialIssuer(bytes32 id) {
        require(credentials[id].issuer == msg.sender, "Not the credential issuer");
        _;
    }
    
    function addIssuer(address issuer) external onlyOwner {
        issuers[issuer] = true;
    }
    
    function removeIssuer(address issuer) external onlyOwner {
        issuers[issuer] = false;
    }
    
    function issue(
        address subject,
        bytes32 dataHash,
        uint256 expiresAt
    ) external override onlyIssuer returns (bytes32) {
        require(subject != address(0), "Invalid subject address");
        
        bytes32 id = keccak256(abi.encodePacked(
            msg.sender,
            subject,
            dataHash,
            block.timestamp
        ));
        
        credentials[id] = Credential({
            id: id,
            issuer: msg.sender,
            subject: subject,
            dataHash: dataHash,
            issuedAt: block.timestamp,
            expiresAt: expiresAt,
            revoked: false,
            updates: new bytes32[](0)
        });
        
        subjectCredentials[subject].push(id);
        
        emit CredentialIssued(id, msg.sender, subject);
        return id;
    }
    
    function update(bytes32 id, bytes32 newDataHash) external override onlyCredentialIssuer(id) {
        Credential storage credential = credentials[id];
        require(!credential.revoked, "Credential is revoked");
        
        credential.updates.push(credential.dataHash);
        credential.dataHash = newDataHash;
        
        emit CredentialUpdated(id, newDataHash);
    }
    
    function revoke(bytes32 id) external override onlyCredentialIssuer(id) {
        Credential storage credential = credentials[id];
        require(!credential.revoked, "Already revoked");
        
        credential.revoked = true;
        emit CredentialRevoked(id);
    }
    
    function verify(bytes32 id) external view override returns (bool) {
        Credential memory credential = credentials[id];
        return credential.issuer != address(0) &&
               !credential.revoked &&
               (credential.expiresAt == 0 || credential.expiresAt > block.timestamp);
    }
    
    function getCredential(bytes32 id) external view returns (
        address issuer,
        address subject,
        bytes32 dataHash,
        uint256 issuedAt,
        uint256 expiresAt,
        bool revoked,
        bytes32[] memory updates
    ) {
        Credential memory cred = credentials[id];
        return (
            cred.issuer,
            cred.subject,
            cred.dataHash,
            cred.issuedAt,
            cred.expiresAt,
            cred.revoked,
            cred.updates
        );
    }
    
    function getSubjectCredentials(address subject) external view returns (bytes32[] memory) {
        return subjectCredentials[subject];
    }
}