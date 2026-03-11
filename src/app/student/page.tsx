"use client";

import { motion } from "framer-motion";
import { Bot, Clock, FileCheck, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
  const stats = [
    {
      title: "Attendance",
      value: "85%",
      icon: <TrendingUp size={24} className="text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Pending Requests",
      value: "2",
      icon: <FileCheck size={24} className="text-orange-400" />,
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
    {
      title: "Classes Today",
      value: "4",
      icon: <Clock size={24} className="text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            Welcome back, Atul! 👋
          </h1>
          <p className="text-gray-400">
            Here is what's happening with your academics today.
          </p>
        </div>
        <Link
          href="/student/helpdesk"
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20"
        >
          <Bot size={20} /> Ask AI Assistant
        </Link>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-2xl bg-[#111] border ${stat.border} flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300`}
          >
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">
                {stat.title}
              </p>
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
            </div>
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.bg}`}
            >
              {stat.icon}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Routine Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-[#111] border border-white/10 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">
              Today's Routine
            </h3>
            <Link
              href="/student/routine"
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              View Full <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {/* Class Item 1 */}
            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="w-16 text-center shrink-0 border-r border-white/10 pr-4">
                <p className="text-sm font-bold text-white">09:00</p>
                <p className="text-xs text-gray-500">AM</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-400">
                  Data Structures & Algorithms
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Room 302 • Prof. Rahman
                </p>
              </div>
            </div>
            {/* Class Item 2 */}
            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="w-16 text-center shrink-0 border-r border-white/10 pr-4">
                <p className="text-sm font-bold text-white">11:30</p>
                <p className="text-xs text-gray-500">AM</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-400">
                  Artificial Intelligence
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Lab 2 • Prof. Sarah
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Quick Insight Widget */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Bot size={100} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4 relative z-10 flex items-center gap-2">
            <Bot size={24} className="text-blue-400" /> AI Insights
          </h3>
          <div className="space-y-4 relative z-10">
            <p className="text-sm text-gray-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">
              "You have a mid-term exam for Discrete Mathematics next week.
              Would you like me to generate a summary of Chapter 4?"
            </p>
            <button className="w-full py-2.5 bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg text-sm font-medium transition-colors">
              Generate Summary
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
