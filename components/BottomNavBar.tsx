
import React from 'react';
import { Screen } from '../types';
import { ICONS } from '../constants';

interface BottomNavBarProps {
  activeTab: 'bible' | 'plans' | 'bookmarks' | 'settings';
  onNavigate: (screen: Screen) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onNavigate }) => {
  const navItems = [
    { id: 'bible', icon: ICONS.bible, label: 'Bible', screen: 'bookSelection' as Screen },
    { id: 'plans', icon: ICONS.plans, label: 'Plans', screen: 'bookSelection' as Screen },
    { id: 'bookmarks', icon: ICONS.bookmarks, label: 'Bookmarks', screen: 'bookSelection' as Screen },
    { id: 'settings', icon: ICONS.settings, label: 'Settings', screen: 'settings' as Screen },
  ];

  return (
    <div className="grid grid-cols-4 gap-1 p-2 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.screen)}
          className={`flex flex-col items-center justify-center p-1 rounded-lg ${
            activeTab === item.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
          } hover:bg-gray-100 dark:hover:bg-gray-700`}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavBar;
