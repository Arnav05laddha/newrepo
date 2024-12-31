import React from 'react';
import { Database, Key, Share2, Lock, Shield, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'Full Data Ownership & Control',
    description: 'Users own their personal data, stored securely on a decentralized network.',
    icon: Database,
    useCases: [
      'Personal information management',
      'Credential storage',
      'Identity verification'
    ]
  },
  {
    title: 'Selective Data Sharing',
    description: 'Share only the data you want, when you want.',
    icon: Share2,
    useCases: [
      'Age verification without revealing birth date',
      'Partial identity disclosure',
      'Temporary access grants'
    ]
  },
  {
    title: 'Passwordless Authentication',
    description: 'Log in securely without passwords using cryptographic methods.',
    icon: Key,
    useCases: [
      'Website login',
      'App authentication',
      'Service access'
    ]
  },
  {
    title: 'Cross-Platform Compatibility',
    description: 'Use OneID across Web2 and Web3 applications seamlessly.',
    icon: Users,
    useCases: [
      'Social media login',
      'DeFi applications',
      'Enterprise systems'
    ]
  },
  {
    title: 'Zero-Knowledge Proofs',
    description: 'Authenticate without revealing sensitive information.',
    icon: Lock,
    useCases: [
      'Age verification',
      'Credit score validation',
      'Membership proof'
    ]
  },
  {
    title: 'Verifiable Credentials',
    description: 'Hold tamper-proof credentials on-chain.',
    icon: Shield,
    useCases: [
      'Academic credentials',
      'Professional certifications',
      'Identity documents'
    ]
  }
];

export function FeatureGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}