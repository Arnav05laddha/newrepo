import React from 'react';
import { Shield, Lock, Key, Users, Database, Share2 } from 'lucide-react';

const features = [
  {
    name: 'Full Data Ownership',
    description: 'You own and control your personal data, stored securely on decentralized networks.',
    icon: Database
  },
  {
    name: 'Passwordless Authentication',
    description: 'Log in securely without passwords using cryptographic methods.',
    icon: Key
  },
  {
    name: 'Cross-Platform Compatibility',
    description: 'Use OneID seamlessly across Web2 and Web3 applications.',
    icon: Share2
  },
  {
    name: 'Enhanced Privacy',
    description: 'Zero-Knowledge Proofs ensure your privacy while proving your identity.',
    icon: Lock
  },
  {
    name: 'Verifiable Credentials',
    description: 'Store and manage your credentials securely on the blockchain.',
    icon: Shield
  },
  {
    name: 'Multi-Device Support',
    description: 'Access your identity securely across all your devices.',
    icon: Users
  }
];

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose OneID?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A comprehensive identity solution built for the future of the internet.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}