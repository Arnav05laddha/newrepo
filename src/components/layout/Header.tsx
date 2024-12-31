import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, User } from 'lucide-react';
import { ConnectButton } from '../auth/ConnectButton';
import { ThemeToggle } from '../ThemeToggle';
import { useAuth } from '../../features/auth/AuthProvider';

export function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">OneID</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/features" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                Features
              </Link>
              <Link to="/about" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                About
              </Link>
              <Link to="/developers" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                Developers
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated && (
              <Link
                to="/profile"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <User className="h-5 w-5" />
              </Link>
            )}
            <ConnectButton />
          </div>
        </div>
      </nav>
    </header>
  );
}