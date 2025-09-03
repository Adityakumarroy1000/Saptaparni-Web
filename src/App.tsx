// --- src/App.tsx ---
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Join from "./pages/Join";
import Donate from "./pages/Donate";
import logo from "./assets/logo.jpg";
import type { JSX } from "react";
import { useState } from "react"; // <-- Add this at the top

export default function App(): JSX.Element {

        // Inside your component:
        const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans">
      <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-12 rounded-full" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 text-lg text-gray-800">
            <Link to="/" className="hover:text-yellow-700">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-700">
              About
            </Link>
            <Link to="/events" className="hover:text-yellow-700">
              Events
            </Link>
            <Link to="/team" className="hover:text-yellow-700">
              Team
            </Link>
            <Link to="/join" className="hover:text-yellow-700">
              Join
            </Link>
            <Link to="/donate" className="hover:text-yellow-700">
              Donate
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 space-y-2 text-center text-gray-800">
            <Link
              to="/"
              className="block hover:text-yellow-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:text-yellow-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About
            </Link>
            <Link
              to="/events"
              className="block hover:text-yellow-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Events
            </Link>
            <Link
              to="/team"
              className="block hover:text-yellow-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Team
            </Link>
            <Link
              to="/join"
              className="block hover:text-yellow-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Join
            </Link>
            <Link
              to="/donate"
              className="block hover:text-yellow-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Donate
            </Link>
          </div>
        )}
      </header>

      <main className="h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<Join />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>

      <footer className="bg-gray-100 text-center text-gray-500 py-6">
        © 2025 সপ্তপর্ণী. All Rights Reserved.
      </footer>
    </div>
  );
}
