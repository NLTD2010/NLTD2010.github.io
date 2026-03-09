/*
 Create by: Nguyen Le Thai Duong
*/
import React from 'react';
import { Home, BookOpen, Laptop } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import type { Page } from '../App';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const navItems: { id: Page; name: string; icon: React.ElementType }[] = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'blog', name: 'Blog', icon: BookOpen },
    { id: 'devices', name: 'Devices', icon: Laptop },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium 
                  transition-all duration-200 ease-in-out transform hover:scale-105
                  ${
                    activePage === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;