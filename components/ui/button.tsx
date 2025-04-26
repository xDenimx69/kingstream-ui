import React from 'react';

export function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-150 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}
