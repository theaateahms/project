import React, { useState } from 'react';
import { Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './auth/AuthModal';
import { MainNav } from './navigation/MainNav';
import { UserDropdown } from './user/UserDropdown';

export function Header() {
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Moon className="w-8 h-8 text-[#7047EB]" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#7047EB] to-[#B47FFF] text-transparent bg-clip-text">
              IslamicEvents
            </span>
          </div>
          
          <MainNav />
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <UserDropdown />
            ) : (
              <>
                <button 
                  onClick={() => handleAuthClick('login')}
                  className="btn-secondary"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => handleAuthClick('signup')}
                  className="btn-primary"
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </header>
  );
}