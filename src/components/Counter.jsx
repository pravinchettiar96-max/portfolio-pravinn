'use client';
import { useState } from 'react';

// Q3. Counter Component
// Create a Counter component that:
// - Shows a number starting from 0
// - Has "+" and "-" buttons
// - Uses useState
// - Extra: Disable "-" button if count is 0

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800">Counter</h2>
      
      {/* Display count */}
      <div className="text-5xl font-bold text-purple-600">
        {count}
      </div>
      
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={decrement}
          disabled={count === 0}
          className={`px-6 py-3 text-xl font-bold rounded-lg transition-all duration-300 ${
            count === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600 hover:scale-105'
          }`}
        >
          -
        </button>
        
        <button
          onClick={increment}
          className="px-6 py-3 text-xl font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
        >
          +
        </button>
      </div>
      
      {/* Tab indicator (as shown in image) */}
      <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
        Tab 1
      </div>
    </div>
  );
}

// Example usage:
// <Counter />
