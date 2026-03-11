"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

// Mock Routine Data (SMC style structured data)
const routineData = {
  Monday: [
    {
      id: 1,
      time: "08:00 AM - 09:30 AM",
      subject: "Data Structures & Algorithms",
      type: "Theory",
      room: "Room 302",
      faculty: "Dr. Rahman",
      status: "completed",
    },
    {
      id: 2,
      time: "10:00 AM - 11:30 AM",
      subject: "Discrete Mathematics",
      type: "Theory",
      room: "Room 405",
      faculty: "Prof. Sarah",
      status: "live",
    },
    {
      id: 3,
      time: "12:00 PM - 02:00 PM",
      subject: "Algorithm Lab",
      type: "Lab",
      room: "Lab 02",
      faculty: "Dr. Rahman",
      status: "upcoming",
    },
  ],
  Tuesday: [
    {
      id: 4,
      time: "09:00 AM - 10:30 AM",
      subject: "Database Systems",
      type: "Theory",
      room: "Room 305",
      faculty: "Dr. Kamal",
      status: "upcoming",
    },
    {
      id: 5,
      time: "11:00 AM - 12:30 PM",
      subject: "Software Engineering",
      type: "Theory",
      room: "Room 301",
      faculty: "Prof. Ahmed",
      status: "upcoming",
    },
  ],
  Wednesday: [
    {
      id: 6,
      time: "08:00 AM - 11:00 AM",
      subject: "Database Lab",
      type: "Lab",
      room: "Lab 04",
      faculty: "Dr. Kamal",
      status: "upcoming",
    },
  ],
  Thursday: [
    {
      id: 7,
      time: "10:00 AM - 11:30 AM",
      subject: "Web Development",
      type: "Theory",
      room: "Room 202",
      faculty: "Prof. Hasan",
      status: "upcoming",
    },
    {
      id: 8,
      time: "12:00 PM - 02:00 PM",
      subject: "Web Dev Lab",
      type: "Lab",
      room: "Lab 01",
      faculty: "Prof. Hasan",
      status: "upcoming",
    },
  ],
  Friday: [], // Weekend
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function SmartRoutinePage() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [isGenerating, setIsGenerating] = useState(false);

  // Fake AI Generation Effect
  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const currentClasses =
    routineData[selectedDay as keyof typeof routineData] || [];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#111] border border-white/10 p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Calendar className="text-blue-400" /> Smart Routine Planner
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            AI-optimized, conflict-free schedule.
          </p>
        </div>

        <button
          onClick={handleRegenerate}
          disabled={isGenerating}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-white rounded-xl text-sm font-medium transition-all"
        >
          {isGenerating ? (
            <RefreshCw size={16} className="animate-spin text-blue-400" />
          ) : (
            <Sparkles size={16} className="text-blue-400" />
          )}
          {isGenerating ? "Optimizing Layout..." : "Regenerate via AI"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Timeline View */}
        <div className="lg:col-span-2 space-y-6">
          {/* Day Selector Tabs */}
          <div className="flex p-1 bg-[#111] border border-white/10 rounded-xl overflow-x-auto hide-scrollbar">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 min-w-[100px] py-2.5 rounded-lg text-sm font-medium transition-all relative ${
                  selectedDay === day
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {selectedDay === day && (
                  <motion.div
                    layoutId="day-tab"
                    className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-lg"
                  />
                )}
                <span className="relative z-10">{day}</span>
              </button>
            ))}
          </div>

          {/* Timeline UI (SMC Inspired Structure) */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 min-h-[400px]">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center h-full text-blue-400 space-y-4 py-20">
                <RefreshCw size={40} className="animate-spin" />
                <p className="font-medium animate-pulse">
                  Running Constraint Satisfaction Algorithm...
                </p>
              </div>
            ) : currentClasses.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 py-20">
                <Calendar size={48} className="mb-4 opacity-50" />
                <p>No classes scheduled for this day. Enjoy your off day!</p>
              </div>
            ) : (
              <div className="relative border-l-2 border-white/5 ml-4 md:ml-6 space-y-8 pb-4">
                <AnimatePresence mode="popLayout">
                  {currentClasses.map((cls, index) => (
                    <motion.div
                      key={cls.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-6 md:pl-8 group"
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-[#111] ${
                          cls.status === "live"
                            ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                            : cls.status === "completed"
                              ? "bg-gray-500"
                              : "bg-blue-500"
                        }`}
                      />

                      {/* Class Card */}
                      <div
                        className={`p-5 rounded-2xl border transition-all duration-300 ${
                          cls.status === "live"
                            ? "bg-emerald-500/5 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                            : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/5"
                        }`}
                      >
                        {/* Top Row: Time & Badge */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Clock
                              size={16}
                              className={
                                cls.status === "live" ? "text-emerald-400" : ""
                              }
                            />
                            <span
                              className={
                                cls.status === "live"
                                  ? "text-emerald-400 font-medium"
                                  : ""
                              }
                            >
                              {cls.time}
                            </span>
                          </div>
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                              cls.type === "Lab"
                                ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            }`}
                          >
                            {cls.type}
                          </span>
                        </div>

                        {/* Middle Row: Subject */}
                        <h3
                          className={`text-xl font-bold mb-4 ${cls.status === "completed" ? "text-gray-400" : "text-white"}`}
                        >
                          {cls.subject}
                        </h3>

                        {/* Bottom Row: Details */}
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin size={16} className="text-gray-500" />{" "}
                            {cls.room}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <User size={16} className="text-gray-500" />{" "}
                            {cls.faculty}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: AI Insights Panel */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Sparkles size={18} className="text-blue-400" /> AI Schedule
              Analysis
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                <CheckCircle2 size={18} className="text-emerald-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-emerald-400">
                    100% Conflict Free
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    No overlapping classes detected.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                <Clock size={18} className="text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-400">
                    Optimal Break Time
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Average 30m break between continuous lectures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-500/5 border border-orange-500/10 rounded-xl">
                <AlertCircle size={18} className="text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-orange-400">
                    Lab Capacity Alert
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Lab 02 is at 90% capacity for your Friday slot.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 leading-relaxed text-center">
                This routine is generated by CampusAI using advanced constraint
                satisfaction algorithms to balance faculty availability and room
                utilization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
