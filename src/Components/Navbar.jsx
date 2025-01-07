import React from 'react';

const Navbar = () => (
  <header className="bg-gray-900 text-white py-4 fixed w-full top-0 shadow-lg z-50">
    <div className="container mx-auto flex justify-between items-center px-6">
      <h1 className="text-2xl font-bold">Your Company</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-yellow-500">About</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#team" className="hover:text-yellow-500">Team</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
