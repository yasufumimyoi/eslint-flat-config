'use client';

import { useState } from 'react';
import LoginModal from './components/LoginModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to Next.js App</h1>
      <p className="mt-4">This is the home page. You can navigate to other pages using the navigation bar above.</p>
      
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        ログイン
      </button>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
} 