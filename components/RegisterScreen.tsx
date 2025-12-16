
import React from 'react';
import { Screen } from '../types';
import { ICONS } from '../constants';

interface RegisterScreenProps {
  onNavigate: (screen: Screen) => void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-gray-900 p-6 text-white">
      <div className="flex justify-end">
        <button onClick={() => onNavigate('welcome')} className="text-gray-300">
          {ICONS.close}
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">User Registration</h1>
        <p className="text-gray-400 mb-8">Create your account to start studying.</p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Full name"
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="Phone number (with area code)"
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={() => onNavigate('bookSelection')}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-full mt-8 shadow-lg hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{' '}
          <button onClick={() => onNavigate('bookSelection')} className="font-bold text-blue-400 hover:underline">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
