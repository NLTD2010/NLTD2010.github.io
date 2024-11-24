/*
 Create by: Nguyen Le Thai Duong
*/
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
        bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 group"
      aria-label="Toggle theme"
    >
      <Moon
        className={`absolute w-6 h-6 transition-opacity duration-500 ${
          theme === 'dark'
            ? 'opacity-100 group-hover:opacity-0 text-blue-400'
            : 'opacity-0 group-hover:opacity-100 text-gray-500' 
        }`}
      />
      <Sun
        className={`absolute w-6 h-6 transition-opacity duration-500 ${
          theme === 'light'
            ? 'opacity-100 group-hover:opacity-0 text-orange-400'
            : 'opacity-0 group-hover:opacity-100 text-yellow-300'
        }`}
      />
    </button>
  );
};

export default ThemeSwitcher;
