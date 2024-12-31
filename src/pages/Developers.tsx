import React from 'react';
import { Code, Key, Shield, Share2 } from 'lucide-react';

export function Developers() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            OneID Developer Documentation
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Integrate decentralized identity management into your applications
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Getting Started
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Key className="h-5 w-5 text-indigo-600" />
              Authentication
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All API requests must include a JWT token in the Authorization header:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
              {`Authorization: Bearer <your_jwt_token>`}
            </pre>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            API Reference
          </h2>

          {/* DID Management */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-indigo-600" />
              DID Management
            </h3>
            
            <div className="space-y-6">
              {/* Register DID */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2">Register DID</h4>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">
                    POST /api/did/register
                  </span>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Request Body:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`{
  "walletAddress": "0x..."
}`}
                  </pre>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Response:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`{
  "did": "did:oneid:0x..."
}`}
                  </pre>
                </div>
              </div>

              {/* Verify DID */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2">Verify DID</h4>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">
                    POST /api/did/verify
                  </span>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Request Body:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`{
  "did": "did:oneid:0x...",
  "signature": "0x...",
  "message": "..."
}`}
                  </pre>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Response:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`{
  "isValid": true
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Credential Management */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Code className="h-6 w-6 text-indigo-600" />
              Credential Management
            </h3>
            
            <div className="space-y-6">
              {/* Issue Credential */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2">Issue Credential</h4>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">
                    POST /api/credentials
                  </span>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Request Body:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`{
  "type": "EmailVerification",
  "claims": {
    "email": "user@example.com"
  },
  "userId": "..."
}`}
                  </pre>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Response:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`{
  "credential": {
    "id": "...",
    "type": "EmailVerification",
    "issuer": "did:oneid:issuer",
    "claims": {
      "email": "user@example.com"
    },
    "issuedAt": "2024-03-15T..."
  }
}`}
                  </pre>
                </div>
              </div>

              {/* Verify Credential */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2">Verify Credential</h4>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">
                    GET /api/credentials/:credentialId/verify
                  </span>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Response:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`{
  "isValid": true
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Selective Disclosure */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Share2 className="h-6 w-6 text-indigo-600" />
              Selective Disclosure
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Smart Contract Integration</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For selective disclosure, integrate with our smart contracts:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`// Contract Address
const CONTRACT_ADDRESS = "0x...";

// ABI
const CONTRACT_ABI = [
  "function requestDisclosure(address subject, bytes32 schemaHash)",
  "function approveDisclosure(bytes32 requestId, bytes32 proofHash)",
  "function getDisclosureStatus(bytes32 requestId)"
];`}
              </pre>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Rate Limits
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>General API requests: 100 requests per 15 minutes per IP</li>
              <li>Authentication endpoints: 5 requests per hour per IP</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}