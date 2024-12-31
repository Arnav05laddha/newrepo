// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./interfaces/IDisclosure.sol";
import "./access/Ownable.sol";

contract SelectiveDisclosure is IDisclosure, Ownable {
    enum Status { Pending, Approved, Rejected }
    
    struct DisclosureRequest {
        address requester;
        address subject;
        bytes32 schemaHash;
        bytes32 proofHash;
        Status status;
        uint256 timestamp;
    }
    
    mapping(bytes32 => DisclosureRequest) private requests;
    mapping(address => bytes32[]) private subjectRequests;
    mapping(address => bytes32[]) private requesterRequests;
    
    function requestDisclosure(
        address subject,
        bytes32 schemaHash
    ) external override returns (bytes32) {
        require(subject != address(0), "Invalid subject address");
        
        bytes32 requestId = keccak256(abi.encodePacked(
            msg.sender,
            subject,
            schemaHash,
            block.timestamp
        ));
        
        requests[requestId] = DisclosureRequest({
            requester: msg.sender,
            subject: subject,
            schemaHash: schemaHash,
            proofHash: bytes32(0),
            status: Status.Pending,
            timestamp: block.timestamp
        });
        
        subjectRequests[subject].push(requestId);
        requesterRequests[msg.sender].push(requestId);
        
        emit DisclosureRequested(requestId, msg.sender, subject);
        return requestId;
    }
    
    function approveDisclosure(bytes32 requestId, bytes32 proofHash) external override {
        DisclosureRequest storage request = requests[requestId];
        require(request.subject == msg.sender, "Not the subject of disclosure");
        require(request.status == Status.Pending, "Request not pending");
        
        request.status = Status.Approved;
        request.proofHash = proofHash;
        
        emit DisclosureApproved(requestId);
    }
    
    function rejectDisclosure(bytes32 requestId) external override {
        DisclosureRequest storage request = requests[requestId];
        require(request.subject == msg.sender, "Not the subject of disclosure");
        require(request.status == Status.Pending, "Request not pending");
        
        request.status = Status.Rejected;
        
        emit DisclosureRejected(requestId);
    }
    
    function getDisclosureStatus(bytes32 requestId) external view override returns (uint8) {
        return uint8(requests[requestId].status);
    }
    
    function getDisclosureRequest(bytes32 requestId) external view returns (
        address requester,
        address subject,
        bytes32 schemaHash,
        bytes32 proofHash,
        Status status,
        uint256 timestamp
    ) {
        DisclosureRequest memory request = requests[requestId];
        return (
            request.requester,
            request.subject,
            request.schemaHash,
            request.proofHash,
            request.status,
            request.timestamp
        );
    }
    
    function getSubjectRequests(address subject) external view returns (bytes32[] memory) {
        return subjectRequests[subject];
    }
    
    function getRequesterRequests(address requester) external view returns (bytes32[] memory) {
        return requesterRequests[requester];
    }
}