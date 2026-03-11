"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Portals", href: "#portals" },
    { name: "About AI", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          CampusAI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group px-4 py-2 text-gray-300 hover:text-white transition-colors duration-500 ease-out font-medium"
            >
              {link.name}
              {/* Premium Animated Underline */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white font-medium transition-colors duration-300 px-4 py-2"
          >
            Login
          </Link>
          <Link
            href="/login"
            className="bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-out font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 font-medium w-full text-center py-3 hover:bg-white/5 hover:text-white transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col w-full px-8 space-y-3 pt-4 border-t border-white/10">
                <Link
                  href="/login"
                  className="w-full text-center py-3 border border-white/20 rounded-xl text-gray-300 font-medium hover:bg-white/5 transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  className="w-full text-center py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
