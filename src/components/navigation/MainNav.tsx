import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from './NavLink';
import { NavDropdown } from './NavDropdown';
import { DropdownItem } from './DropdownItem';

export function MainNav() {
  const navigate = useNavigate();

  const handleItemClick = (action: string) => {
    switch (action) {
      case 'post-free':
      case 'post-paid':
        navigate('/create-event');
        break;
      default:
        console.log('Navigation action:', action);
    }
  };

  return (
    <nav className="hidden md:flex space-x-8">
      <div className="relative group">
        <NavLink
          label="Discover"
          showDropdownIcon
          className="group-hover:text-gray-900"
        />
        <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="py-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100">
            <DropdownItem
              label="Events"
              onClick={() => handleItemClick('events')}
            />
            <DropdownItem
              label="Lessons"
              onClick={() => handleItemClick('lessons')}
            />
            <DropdownItem
              label="Activities"
              onClick={() => handleItemClick('activities')}
            />
            <DropdownItem
              label="More"
              onClick={() => handleItemClick('more')}
            />
          </div>
        </div>
      </div>

      <div className="relative group">
        <NavLink
          label="Post Event"
          showDropdownIcon
          className="group-hover:text-gray-900"
        />
        <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="py-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100">
            <DropdownItem
              label="Free Event"
              onClick={() => handleItemClick('post-free')}
            />
            <DropdownItem
              label="Ticketed Event"
              onClick={() => handleItemClick('post-paid')}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}