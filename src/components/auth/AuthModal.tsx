import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = React.useState(initialMode);
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <h2 className="text-2xl font-bold text-center mb-2">
          {mode === 'login' ? 'Welcome Back!' : 'Create Your Account'}
        </h2>
        <p className="text-gray-600 text-center mb-8">
          {mode === 'login' 
            ? 'Enter your details to sign in to your account'
            : 'Fill in your information to get started'}
        </p>

        {mode === 'login' ? (
          <LoginForm onSuccess={onClose} />
        ) : (
          <SignUpForm onSuccess={onClose} />
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-[#7047EB] hover:text-[#5F3DC4] font-medium"
          >
            {mode === 'login' 
              ? "Don't have an account? Create one" 
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}