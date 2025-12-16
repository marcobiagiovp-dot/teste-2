
import React, { useState } from 'react';
import { Screen, Book } from '../types';
import { BIBLE_BOOKS, ICONS } from '../constants';
import BottomNavBar from './BottomNavBar';

interface BookSelectionScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
}

const BookSelectionScreen: React.FC<BookSelectionScreenProps> = ({ onNavigate }) => {
  const [activeTestament, setActiveTestament] = useState<'Old' | 'New'>('Old');
  const [selectedBook, setSelectedBook] = useState<Book | null>(BIBLE_BOOKS[0]);
  
  const books = BIBLE_BOOKS.filter(book => book.testament === activeTestament);

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
  };

  const handleChapterSelect = (chapter: number) => {
    if (selectedBook) {
      onNavigate('textViewer', { book: selectedBook.name, chapter });
    }
  };

  return (
    <div className="flex flex-col h-full dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <header className="p-4 border-b dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Book and Chapter Selection</h1>
          <button className="text-blue-500">{ICONS.user}</button>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {ICONS.search}
          </div>
          <input
            type="text"
            placeholder="Search Books, Chapters..."
            className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>

      {/* Testament Tabs */}
      <div className="flex border-b dark:border-gray-700">
        <button
          onClick={() => setActiveTestament('Old')}
          className={`flex-1 py-3 text-center font-semibold ${activeTestament === 'Old' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        >
          Old Testament
        </button>
        <button
          onClick={() => setActiveTestament('New')}
          className={`flex-1 py-3 text-center font-semibold ${activeTestament === 'New' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        >
          New Testament
        </button>
      </div>

      {/* Book List */}
      <div className="flex-grow overflow-y-auto">
        <ul>
          {books.map(book => (
            <li key={book.name}>
              <button
                onClick={() => handleBookSelect(book)}
                className={`w-full text-left p-4 border-b dark:border-gray-700 flex justify-between items-center ${selectedBook?.name === book.name ? 'bg-blue-50 dark:bg-blue-900/50' : ''}`}
              >
                <span className="text-lg">{book.name}</span>
                <span className="text-gray-400">{ICONS.chevronRight}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Chapter Selector */}
      {selectedBook && (
        <div className="border-t dark:border-gray-700 p-2 shadow-inner bg-gray-50 dark:bg-gray-800">
          <div className="flex overflow-x-auto space-x-1">
            {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => (
              <button
                key={chapter}
                onClick={() => handleChapterSelect(chapter)}
                className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-white dark:bg-gray-700 border dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900"
              >
                {chapter}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <BottomNavBar activeTab="bible" onNavigate={onNavigate} />
    </div>
  );
};

export default BookSelectionScreen;
