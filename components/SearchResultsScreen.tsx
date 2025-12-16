
import React from 'react';
import { Screen } from '../types';
import { ICONS, getBibleText } from '../constants';

interface SearchResultsScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
  query: string;
}

const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({ onNavigate, query }) => {
  const results = [
      ...getBibleText('John', 1),
      ...getBibleText('John', 3),
  ].filter(v => v.text.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col h-full dark:bg-gray-900 dark:text-gray-200">
      <header className="flex items-center p-4 border-b dark:border-gray-700">
        <button onClick={() => onNavigate('textViewer', { book: 'John', chapter: 1 })}>{ICONS.back}</button>
        <h1 className="text-lg font-semibold mx-auto">Search Results for "{query}"</h1>
      </header>
      <main className="flex-grow overflow-y-auto">
        {results.length > 0 ? (
          <ul>
            {results.map((verse, index) => (
              <li key={index} className="border-b dark:border-gray-700">
                <button 
                  onClick={() => onNavigate('textViewer', { book: verse.book, chapter: verse.chapter })}
                  className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <p className="font-bold text-blue-600 dark:text-blue-400">{verse.book} {verse.chapter}:{verse.verse}</p>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">{verse.text}</p>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p>No results found for "{query}".</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchResultsScreen;
