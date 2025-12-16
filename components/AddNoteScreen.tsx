
import React from 'react';
import { Screen, BibleVerse } from '../types';

interface AddNoteScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
  verse: BibleVerse;
}

const AddNoteScreen: React.FC<AddNoteScreenProps> = ({ onNavigate, verse }) => {
  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-200 dark:border-gray-700">
        <button 
          onClick={() => onNavigate('textViewer', { book: verse.book, chapter: verse.chapter })} 
          className="text-blue-500"
        >
          Cancel
        </button>
        <h1 className="font-semibold">Add Observation</h1>
        <button 
          onClick={() => onNavigate('textViewer', { book: verse.book, chapter: verse.chapter })} 
          className="text-blue-500 font-bold"
        >
          Save
        </button>
      </header>
      <main className="flex-grow p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">{verse.book} {verse.chapter}:{verse.verse}</p>
          <p className="text-gray-600 dark:text-gray-400 mt-1 italic">"{verse.text}"</p>
        </div>
        <textarea
          placeholder="Write your observations here..."
          className="w-full h-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </main>
      {/* This is a placeholder for the keyboard */}
      <div className="p-2 bg-gray-200 dark:bg-gray-700 text-center text-sm text-gray-500">
          Keyboard Area
      </div>
    </div>
  );
};

export default AddNoteScreen;
