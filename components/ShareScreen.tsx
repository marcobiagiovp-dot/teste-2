
import React from 'react';
import { Screen, BibleVerse } from '../types';

interface ShareScreenProps {
  onNavigate: (screen: Screen, params?: any) => void;
  verse: BibleVerse;
}

const ShareScreen: React.FC<ShareScreenProps> = ({ onNavigate, verse }) => {
  return (
    <div className="flex flex-col h-full bg-gray-200 dark:bg-gray-900">
      <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
        <button onClick={() => onNavigate('textViewer', { book: verse.book, chapter: verse.chapter })} className="text-blue-500">Cancel</button>
        <h1 className="font-semibold">Share Text</h1>
        <div className="w-16"></div>
      </header>
      <main className="flex-grow flex flex-col justify-end p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-4 shadow-lg text-center">
            <p className="text-lg text-gray-800 dark:text-gray-200">"{verse.text}"</p>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">— {verse.book} {verse.chapter}:{verse.verse} (NIV)</p>
        </div>
        
        <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-300 font-semibold mb-2 block">Personal Note (Optional)</label>
            <textarea placeholder="Add a thought..." className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 shadow text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center mb-6">
            <ShareIcon logo="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" name="WhatsApp" />
            <ShareIcon logo="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" name="Instagram" />
            <ShareIcon logo="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" name="Facebook" />
            <ShareIcon logo="https://www.gstatic.com/images/icons/material/system/2x/link_googblue_24dp.png" name="Copy Link" />
            <ShareIcon logo="https://www.gstatic.com/images/icons/material/system/2x/message_googblue_24dp.png" name="Messages" />
            <ShareIcon logo="https://www.gstatic.com/images/icons/material/system/2x/email_googblue_24dp.png" name="Email" />
            <ShareIcon logo="https://www.gstatic.com/images/icons/material/system/2x/more_horiz_googblue_24dp.png" name="More" />
        </div>

        <button onClick={() => onNavigate('textViewer', { book: verse.book, chapter: verse.chapter })} className="w-full bg-blue-500 text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:bg-blue-600 transition-colors">
            Share
        </button>
      </main>
    </div>
  );
};

const ShareIcon = ({ logo, name }: { logo: string, name: string }) => (
    <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow">
          <img src={logo} alt={name} className="h-8 w-8 object-contain"/>
        </div>
        <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">{name}</p>
    </div>
);


export default ShareScreen;
