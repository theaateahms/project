import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from './NavLink';
import { DropdownMenu } from './DropdownMenu';
import { discoverMenuItems, createMenuItems } from './constants';

export function MainNav() {
  const navigate = useNavigate();

  const handleItemClick = (action: string) => {
    switch (action) {
      case 'events':
        navigate('/?category=events');
        break;
      case 'lessons':
        navigate('/?category=lessons');
        break;
      case 'activities':
        navigate('/?category=activities');
        break;
      case 'more':
        navigate('/discover');
        break;
      case 'new-event':
        navigate('/create-event');
        break;
      case 'new-organization':
        navigate('/create-organization');
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
          <DropdownMenu
            items={discoverMenuItems}
            onItemClick={handleItemClick}
          />
        </div>
      </div>

      <div className="relative group">
        <NavLink
          label="Create"
          showDropdownIcon
          className="group-hover:text-gray-900"
        />
        <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <DropdownMenu
            items={createMenuItems}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    </nav>
  );
}