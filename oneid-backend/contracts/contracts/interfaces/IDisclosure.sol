// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IDisclosure {
    event DisclosureRequested(bytes32 indexed id, address indexed requester, address indexed subject);
    event DisclosureApproved(bytes32 indexed id);
    event DisclosureRejected(bytes32 indexed id);
    
    function requestDisclosure(address subject, bytes32 schemaHash) external returns (bytes32);
    function approveDisclosure(bytes32 requestId, bytes32 proofHash) external;
    function rejectDisclosure(bytes32 requestId) external;
    function getDisclosureStatus(bytes32 requestId) external view returns (uint8 status);
}