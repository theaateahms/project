import React, { useState, useRef, useEffect } from 'react';
import { User as UserIcon, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { DropdownMenu } from './DropdownMenu';

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = async (action: string) => {
    setIsOpen(false);
    
    switch (action) {
      case 'browse-events':
        navigate('/');
        break;
      case 'manage-events':
        navigate('/my-events');
        break;
      case 'account-settings':
        navigate('/settings');
        break;
      case 'logout':
        await logout();
        navigate('/');
        break;
      default:
        console.log('User menu action:', action);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 group"
      >
        <div className="w-8 h-8 rounded-full bg-[#7047EB]/10 flex items-center justify-center">
          <UserIcon className="w-4 h-4 text-[#7047EB]" />
        </div>
        <span className="font-medium text-gray-700 group-hover:text-gray-900">
          {user?.name}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && <DropdownMenu onItemClick={handleItemClick} />}
    </div>
  );
}