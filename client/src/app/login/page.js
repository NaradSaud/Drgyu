'use client'; // To indicate a client-side component

import { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // To toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup form
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        <form>
          {/* Name field for Signup */}
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password for Signup */}
          {!isLogin && (
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              className="text-blue-600 hover:underline ml-1 font-semibold"
              onClick={toggleForm}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
