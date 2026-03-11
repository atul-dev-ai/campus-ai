"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Briefcase,
  Sparkles,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
// import { supabase } from "@/lib/supabase"; // Jokhon amra data fetch korbo tokhon eita uncomment korbo

export default function FacultyDashboard() {
  const [facultyName, setFacultyName] = useState("Professor");

  // Future Supabase Fetching Logic (Ready for when auth is fully connected)
  /*
  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase.from('profiles').select('full_name').eq('id', user.id).single();
        if (data) setFacultyName(data.full_name);
      }
    }
    loadProfile();
  }, []);
  */

  const stats = [
    {
      title: "Upcoming Lectures",
      value: "3",
      icon: <Clock size={24} className="text-purple-400" />,
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      title: "Total Students",
      value: "120+",
      icon: <Users size={24} className="text-pink-400" />,
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
    {
      title: "Active Capstones",
      value: "4",
      icon: <Briefcase size={24} className="text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
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
            Welcome, {facultyName}! 🎓
          </h1>
          <p className="text-gray-400">
            Manage your classes, students, and generate lecture materials via
            AI.
          </p>
        </div>
        <Link
          href="/faculty/notes"
          className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-purple-600/20"
        >
          <Sparkles size={20} /> Generate AI Notes
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule (Faculty View) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#111] border border-white/10 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">
              Today's Lectures
            </h3>
            <Link
              href="/faculty/classes"
              className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {/* Lecture Item */}
            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="w-16 text-center shrink-0 border-r border-white/10 pr-4">
                <p className="text-sm font-bold text-white">10:00</p>
                <p className="text-xs text-gray-500">AM</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-400">
                  Data Structures & Algorithms
                </h4>
                <p className="text-sm text-gray-400 mt-1 flex items-center gap-3">
                  <span>Room 302</span>
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded">
                    <CheckCircle2 size={10} /> Material Prepared
                  </span>
                </p>
              </div>
            </div>

            {/* Lecture Item */}
            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="w-16 text-center shrink-0 border-r border-white/10 pr-4">
                <p className="text-sm font-bold text-white">02:00</p>
                <p className="text-xs text-gray-500">PM</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-400">
                  Advanced Database Lab
                </h4>
                <p className="text-sm text-gray-400 mt-1 flex items-center gap-3">
                  <span>Lab 04</span>
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded">
                    <Sparkles size={10} /> AI Notes Pending
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Generator Quick Access */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute -top-10 -right-10 p-4 opacity-5">
            <BookOpen size={150} />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2 relative z-10">
              <BookOpen size={24} className="text-purple-400" /> AI Course
              Material
            </h3>
            <p className="text-sm text-gray-400 mb-6 relative z-10">
              Save hours of prep time. Convert your raw bullet points into
              complete lecture notes, summaries, and practice MCQs instantly.
            </p>
          </div>

          <div className="space-y-3 relative z-10 bg-black/20 p-4 rounded-xl border border-white/5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Last Generated:</span>
              <span className="text-purple-400 font-medium">
                Sorting Algorithms Summary
              </span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
            <p className="text-xs text-gray-500 text-right mt-1">
              Ready to download
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
