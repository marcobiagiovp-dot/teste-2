
import React from 'react';
import { Screen } from '../types';
import { ICONS } from '../constants';

interface WelcomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-blue-100 to-white p-8 justify-center items-center text-center">
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="mb-6">{ICONS.bookOpen}</div>
        <h1 className="text-4xl font-bold text-gray-800">Bible Study</h1>
        <p className="text-gray-600 mt-2">Deepen your faith with the Word of God.</p>
      </div>
      <div className="w-full">
        <button
          onClick={() => onNavigate('bookSelection')}
          className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-full mb-4 shadow-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <button
          onClick={() => onNavigate('register')}
          className="w-full bg-white text-blue-500 font-bold py-3 px-4 rounded-full border border-blue-500 hover:bg-blue-50 transition-colors"
        >
          Register
        </button>
        <p className="text-gray-500 text-sm mt-6">
          <a href="#" className="underline">Terms and Privacy</a>
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
