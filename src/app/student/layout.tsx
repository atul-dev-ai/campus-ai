"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  User,
} from "lucide-react";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/student",
    },
    {
      name: "Smart Routine",
      icon: <Calendar size={20} />,
      path: "/student/routine",
    },
    {
      name: "Service Requests",
      icon: <FileText size={20} />,
      path: "/student/requests",
    },
    {
      name: "AI Helpdesk",
      icon: <MessageSquare size={20} />,
      path: "/student/helpdesk",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/student/settings",
    },
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0a0a0a] border-r border-white/10">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            CampusAI
          </Link>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path} className="relative block">
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-xl"
                  />
                )}
                <div
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? "text-blue-400 font-medium" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                >
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Topbar */}
        <header className="h-20 flex items-center justify-between px-6 border-b border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-4 py-2 w-64 focus-within:border-blue-500/50 transition-colors">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-gray-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white bg-[#111] border border-white/10 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-[#0a0a0a] rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center border border-white/20">
                <User size={20} className="text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-white leading-tight">
                  Atul Paul
                </p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content goes here */}
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay (Keep simple for now) */}
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-50 md:hidden flex flex-col">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#050505]">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CampusAI
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} className="text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 py-6 px-4 space-y-3 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)} // Link e click korle menu auto close hobe
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-colors ${
                    isActive
                      ? "bg-blue-600/10 text-blue-400 border border-blue-500/20 font-medium"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span className="text-lg">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Logout Button */}
          <div className="p-6 border-t border-white/10 pb-8 bg-[#050505]">
            <button className="flex items-center gap-4 px-4 py-4 w-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
              <LogOut size={22} /> <span className="text-lg">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
