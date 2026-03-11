"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Terminal, Rocket, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-8 relative z-10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent block">
              CampusAI
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              The next-generation intelligent university automation platform. Building smarter campuses with AI-driven workflows and predictive analytics.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
               Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Platform Features</Link></li>
              <li><Link href="#portals" className="text-gray-400 hover:text-blue-400 transition-colors">User Portals</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About the AI</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-blue-400 transition-colors">Get Started</Link></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">API Reference</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Developer Section (Showstopper) */}
          <div className="bg-[#111] p-4 rounded-2xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-all duration-500"></div>
            
            <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2 relative z-10">
              <Terminal size={18} className="text-blue-400" /> Developer
            </h4>
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400 text-sm">Lead Front-End Engineer</span>
                <span className="text-white font-medium"><a href="https://atulpaul.vercel.app" target="_blank" rel="noopener noreferrer"> Atul Paul</a></span>
              </div>
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400 text-sm">Lead ML Engineer</span>
                <span className="text-white text-sm flex items-center gap-1"><a href="#">Nusrat</a></span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400 text-sm">Lead Researcher</span>
                <span className="text-white text-sm flex items-center gap-1"><a href="#">Alo</a></span>
              </div>
              
              
            </div>
          </div>
          
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Copyright &copy; {new Date().getFullYear()} CampusAI. All rights reserved by <span className="text-gray-400 font-bold">Team Alpha</span>.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Developed with <Heart size={14} className="text-red-500 animate-pulse" /> by <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-bold hover:text-blue-400 cursor-pointer transition-colors animate-pulse [animation-delay:1.5s]">Team Alpha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}