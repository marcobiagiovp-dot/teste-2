
import React, { useState } from 'react';
import { Screen, BibleVerse } from '../types';
import { ICONS, getBibleText } from '../constants';

interface TextViewerScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
  book: string;
  chapter: number;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: 'text-base' | 'text-lg' | 'text-xl';
  adjustFontSize: (size: 'text-base' | 'text-lg' | 'text-xl') => void;
}

const TextViewerScreen: React.FC<TextViewerScreenProps> = ({ 
  onNavigate, book, chapter, isDarkMode, toggleDarkMode, fontSize, adjustFontSize
}) => {
  const verses = getBibleText(book, chapter);
  const [highlightedVerses, setHighlightedVerses] = useState<number[]>([]);
  const [showFontOptions, setShowFontOptions] = useState(false);

  const toggleHighlight = (verseNumber: number) => {
    setHighlightedVerses(prev => 
      prev.includes(verseNumber) 
        ? prev.filter(v => v !== verseNumber)
        : [...prev, verseNumber]
    );
  };
  
  const handleAddNote = (verse: BibleVerse) => {
    onNavigate('addNote', { verse });
  };
  
  return (
    <div className="flex flex-col h-full dark:bg-gray-900 dark:text-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b dark:border-gray-700 relative">
        <button onClick={() => onNavigate('bookSelection')}>{ICONS.back}</button>
        <h1 className="text-lg font-semibold">Text Viewer</h1>
        <button onClick={() => setShowFontOptions(!showFontOptions)} className="text-lg font-serif">Aa</button>
        {showFontOptions && (
          <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border dark:border-gray-700 z-10 w-48">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Font Size</p>
              <div className="flex justify-between items-center">
                  <button onClick={() => adjustFontSize('text-base')} className={`px-3 py-1 rounded ${fontSize === 'text-base' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>A</button>
                  <button onClick={() => adjustFontSize('text-lg')} className={`px-3 py-1 rounded ${fontSize === 'text-lg' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>A</button>
                  <button onClick={() => adjustFontSize('text-xl')} className={`px-3 py-1 rounded ${fontSize === 'text-xl' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>A</button>
              </div>
          </div>
        )}
      </header>
      
      {/* Toolbar */}
      <div className="flex items-center justify-around p-2 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {isDarkMode ? ICONS.sun : ICONS.moon}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-yellow-500">{ICONS.highlight}</button>
        <button onClick={() => handleAddNote(verses[0])} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-blue-500">{ICONS.note}</button>
      </div>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto p-6">
        <h2 className="text-2xl font-bold mb-4">{book} {chapter}</h2>
        <div className={`leading-relaxed ${fontSize} space-y-4`}>
          {verses.map(verse => (
            <div 
              key={verse.verse} 
              onClick={() => toggleHighlight(verse.verse)} 
              className="flex items-start gap-3 cursor-pointer"
            >
              <div className="w-5 text-right font-medium text-gray-500 dark:text-gray-400 select-none">{verse.verse}</div>
              <p className={`flex-1 ${highlightedVerses.includes(verse.verse) ? 'bg-yellow-200 dark:bg-yellow-600/50 rounded px-1' : ''}`}>
                {verse.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold border-b dark:border-gray-700 pb-2 mb-4">Cross References</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center text-blue-500 hover:underline cursor-pointer">Genesis 1:1 {ICONS.chevronRight}</li>
            <li className="flex justify-between items-center text-blue-500 hover:underline cursor-pointer">Colossians 1:16 {ICONS.chevronRight}</li>
            <li className="flex justify-between items-center text-blue-500 hover:underline cursor-pointer">Colossians 1:16 {ICONS.chevronRight}</li>
          </ul>
        </div>
         <button onClick={() => onNavigate('share', { verse: verses.find(v => v.book === 'John' && v.chapter === 3 && v.verse === 16) || verses[0] })} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Share Verse</button>
      </main>

      {/* Bottom Nav */}
      <div className="grid grid-cols-5 gap-1 p-2 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <BottomNavIcon icon={ICONS.home} label="Home" onClick={() => onNavigate('bookSelection')} />
        <BottomNavIcon icon={ICONS.search} label="Search" onClick={() => onNavigate('searchResults', { query: 'Love'})} />
        <BottomNavIcon icon={ICONS.study} label="Study" active />
        <BottomNavIcon icon={ICONS.note} label="Notes" onClick={() => onNavigate('addNote', { verse: verses[0] })} />
        <BottomNavIcon icon={ICONS.profile} label="Profile" onClick={() => onNavigate('settings')} />
      </div>
    </div>
  );
};


const BottomNavIcon = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center p-1 rounded-lg ${active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'} hover:bg-gray-100 dark:hover:bg-gray-700`}>
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);

export default TextViewerScreen;
