
import React from 'react';
import { Screen } from '../types';
import { ICONS } from '../constants';

interface SettingsScreenProps {
  onNavigate: (screen: Screen) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: 'text-base' | 'text-lg' | 'text-xl';
  adjustFontSize: (size: 'text-base' | 'text-lg' | 'text-xl') => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ 
  onNavigate, isDarkMode, toggleDarkMode, fontSize, adjustFontSize 
}) => {
  return (
    <div className="flex flex-col h-full dark:bg-gray-900 dark:text-gray-200">
      <header className="flex items-center p-4 border-b dark:border-gray-700">
        <button onClick={() => onNavigate('bookSelection')}>{ICONS.back}</button>
        <h1 className="text-lg font-semibold mx-auto">Settings</h1>
      </header>
      <main className="flex-grow p-6 space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Dark Mode</span>
          <button
            onClick={toggleDarkMode}
            className={`w-14 h-8 rounded-full p-1 flex items-center transition-colors ${
              isDarkMode ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
            }`}
          >
            <span className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform"></span>
          </button>
        </div>

        <div>
          <span className="font-semibold block mb-3">Font Size</span>
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button 
              onClick={() => adjustFontSize('text-base')} 
              className={`flex-1 py-2 text-center rounded-md ${fontSize === 'text-base' ? 'bg-white dark:bg-blue-500 shadow' : ''}`}
            >
              Small
            </button>
            <button 
              onClick={() => adjustFontSize('text-lg')} 
              className={`flex-1 py-2 text-center rounded-md ${fontSize === 'text-lg' ? 'bg-white dark:bg-blue-500 shadow' : ''}`}
            >
              Medium
            </button>
            <button 
              onClick={() => adjustFontSize('text-xl')} 
              className={`flex-1 py-2 text-center rounded-md ${fontSize === 'text-xl' ? 'bg-white dark:bg-blue-500 shadow' : ''}`}
            >
              Large
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsScreen;
