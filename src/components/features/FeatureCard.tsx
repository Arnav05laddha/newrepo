import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  useCases: string[];
}

export function FeatureCard({ title, description, icon: Icon, useCases }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-8 w-8 text-indigo-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          </div>
        </div>
        <p className="mt-4 text-gray-500 dark:text-gray-300">{description}</p>
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">Use Cases</h4>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-500 dark:text-gray-300">
            {useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}