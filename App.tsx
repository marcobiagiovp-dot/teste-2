
import React, { useState, useCallback } from 'react';
import { Screen, BibleVerse } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import RegisterScreen from './components/RegisterScreen';
import BookSelectionScreen from './components/BookSelectionScreen';
import TextViewerScreen from './components/TextViewerScreen';
import AddNoteScreen from './components/AddNoteScreen';
import ShareScreen from './components/ShareScreen';
import SearchResultsScreen from './components/SearchResultsScreen';
import SettingsScreen from './components/SettingsScreen';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [navParams, setNavParams] = useState<any>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState<'text-base' | 'text-lg' | 'text-xl'>('text-base');

  const navigate = useCallback((screen: Screen, params: any = {}) => {
    setScreen(screen);
    setNavParams(params);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const adjustFontSize = (size: 'text-base' | 'text-lg' | 'text-xl') => setFontSize(size);

  const renderScreen = () => {
    switch (screen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={navigate} />;
      case 'register':
        return <RegisterScreen onNavigate={navigate} />;
      case 'bookSelection':
        return <BookSelectionScreen onNavigate={navigate} />;
      case 'textViewer':
        return <TextViewerScreen 
                    onNavigate={navigate} 
                    book={navParams.book} 
                    chapter={navParams.chapter} 
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                    fontSize={fontSize}
                    adjustFontSize={adjustFontSize}
                    />;
      case 'addNote':
        return <AddNoteScreen onNavigate={navigate} verse={navParams.verse} />;
      case 'share':
        return <ShareScreen onNavigate={navigate} verse={navParams.verse} />;
      case 'searchResults':
        return <SearchResultsScreen onNavigate={navigate} query={navParams.query} />;
      case 'settings':
        return <SettingsScreen 
                  onNavigate={navigate}
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  fontSize={fontSize}
                  adjustFontSize={adjustFontSize}
                  />;
      default:
        return <WelcomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} h-screen font-sans`}>
      <div className="bg-white dark:bg-black h-full">
        <div className="max-w-sm mx-auto h-full bg-white dark:bg-gray-900 shadow-lg">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
