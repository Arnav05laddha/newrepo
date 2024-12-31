// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CredentialRegistry {
    struct Credential {
        bytes32 id;
        address issuer;
        address subject;
        bytes32 dataHash;
        uint256 issuedAt;
        uint256 expiresAt;
        bool revoked;
    }
    
    mapping(bytes32 => Credential) public credentials;
    mapping(address => bool) public issuers;
    
    event CredentialIssued(bytes32 indexed id, address indexed issuer, address indexed subject);
    event CredentialRevoked(bytes32 indexed id);
    
    modifier onlyIssuer() {
        require(issuers[msg.sender], "Not an authorized issuer");
        _;
    }
    
    function addIssuer(address issuer) external {
        // In production, this would be restricted to a governance mechanism
        issuers[issuer] = true;
    }
    
    function issue(
        address subject,
        bytes32 dataHash,
        uint256 expiresAt
    ) external onlyIssuer returns (bytes32) {
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
            revoked: false
        });
        
        emit CredentialIssued(id, msg.sender, subject);
        return id;
    }
    
    function revoke(bytes32 id) external {
        Credential storage credential = credentials[id];
        require(credential.issuer == msg.sender, "Not the credential issuer");
        require(!credential.revoked, "Already revoked");
        
        credential.revoked = true;
        emit CredentialRevoked(id);
    }
    
    function verify(bytes32 id) external view returns (bool) {
        Credential memory credential = credentials[id];
        return credential.issuer != address(0) &&
               !credential.revoked &&
               (credential.expiresAt == 0 || credential.expiresAt > block.timestamp);
    }
}