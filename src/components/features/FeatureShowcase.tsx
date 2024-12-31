import React from 'react';
import { Shield } from 'lucide-react';

export function FeatureShowcase() {
  return (
    <div className="bg-indigo-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Security First Design
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-300">
              Every feature in OneID is built with security and privacy as the foundation. 
              Our architecture ensures your data remains protected while providing seamless access.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Learn more about our security
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-gray-700">
              <Shield className="h-12 w-12 text-indigo-600" />
            </div>
            {/* Add more security feature icons here */}
          </div>
        </div>
      </div>
    </div>
  );
}