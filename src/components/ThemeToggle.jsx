import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle-container">
      <button 
        className="theme-toggle-btn" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <Moon size={22} />
        ) : (
          <Sun size={22} />
        )}
      </button>
    </div>
  );
}
