import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Laptop } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar: React.FC = () => {
  const navItems = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/blog', name: 'Blog', icon: BookOpen },
    { path: '/devices', name: 'Devices', icon: Laptop },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium 
                  transition-all duration-200 ease-in-out transform hover:scale-105
                  ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
