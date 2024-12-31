import React from 'react';
import { Shield, Lock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Shield,
    title: 'Privacy',
    description: 'Your data remains under your control with end-to-end encryption.'
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Military-grade protection for your digital identity.'
  },
  {
    icon: Users,
    title: 'User Control',
    description: 'Full ownership and management of your digital credentials.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Cutting-edge technology powering the future of digital identity.'
  }
];

export function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            About OneID
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Revolutionizing Digital Identity for a Decentralized World
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Empowering users with privacy, security, and seamless access across platforms.
            We're building the foundation for a more secure and user-centric digital future.
          </p>
        </div>

        {/* Our Story */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
          <div className="mt-4 prose prose-lg text-gray-600 dark:text-gray-300">
            <p>
              Founded in 2024, OneID emerged from a simple yet powerful idea: what if users truly owned their digital identity?
              In a world where data breaches and privacy concerns are rampant, we saw the need for a revolutionary approach to digital identity management.
            </p>
            <p className="mt-4">
              Our team of security experts, blockchain developers, and privacy advocates came together to create a solution
              that puts users first. By leveraging blockchain technology and zero-knowledge proofs, we've built a platform
              that ensures your digital identity remains secure, private, and under your control.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Values</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="relative p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <value.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{value.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </div>
  );
}