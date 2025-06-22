
import { FC } from "react";

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Market', href: '#market' },
  { label: 'About Us', href: '#news' },
  { label: 'Forex', href: '#forex' },
  { label: 'About', href: '#about' },
];

interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

const BRAND_NAME = 'CryptoWave';

export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => (
  <header className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black animate-pulse shadow-lg">
    <div className="container mx-auto px-8 py-5 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <i className="fas fa-rocket text-4xl text-blue-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] animate-pulse" />
        <span className="text-3xl font-extrabold  tracking-wider text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
          {BRAND_NAME}
        </span>
      </div>

      <nav className="hidden md:flex space-x-8">
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="relative px-4 py-2 text-lg font-medium text-gray-300 hover:text-white transition before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400 before:opacity-0 hover:before:opacity-30 before:transition"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-5">
        <button
          onClick={onSignup}
          className="px-6 py-2 rounded-full border-2 border-purple-400 text-purple-200 font-semibold drop-shadow-[0_0_8px_rgba(128,0,128,0.7)] hover:bg-purple-500 hover:bg-opacity-20 transition"
        >
          Sign Up
        </button>
        <button
          onClick={onLogin}
          className="hidden md:inline-block px-6 py-2 rounded-full border-2 border-blue-400 text-blue-200 font-semibold drop-shadow-[0_0_8px_rgba(0,128,255,0.7)] hover:bg-blue-500 hover:bg-opacity-20 transition"
        >
          Log In
        </button>
        <button className="md:hidden p-2 focus:outline-none text-gray-300 hover:text-white transition">
          <i className="fas fa-bars text-3xl" />
        </button>
      </div>
    </div>
  </header>
);
 