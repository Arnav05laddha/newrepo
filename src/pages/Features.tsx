import React from 'react';
import { FeatureHero } from '../components/features/FeatureHero';
import { FeatureGrid } from '../components/features/FeatureGrid';
import { FeatureShowcase } from '../components/features/FeatureShowcase';
import { FeatureCTA } from '../components/features/FeatureCTA';

export function Features() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <FeatureHero />
      <FeatureGrid />
      <FeatureShowcase />
      <FeatureCTA />
    </div>
  );
}