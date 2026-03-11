"use client";

import Navbar from "@/components/landing/Navbar";
import Features from "@/components/landing/Features";
import Portals from "@/components/landing/Portals";
import AboutAI from "@/components/landing/AboutAI";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Bot, Zap, LayoutDashboard } from "lucide-react";

export default function Home() {
  // Framer Motion Variants for smooth staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col overflow-hidden relative">
      <Navbar />

      {/* --- Animated Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[150px]"
        />
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- Main Hero Section --- */}
      <main className="flex-grow flex flex-col items-center justify-start pt-32 pb-20 px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto flex flex-col items-center text-center relative"
        >
          {/* Floating Icons Background */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute -left-10 top-10 hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          >
            <Bot size={28} />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute -right-15 top-32 hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          >
            <Zap size={28} />
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            animate={{ x: [0, 20] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Sparkles size={16} className="text-blue-400" />

            <span className="text-sm font-medium text-gray-300 ">
              Hackathon Project 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Transform Your Campus <br className="hidden md:block" />
              with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Automate routines, manage student requests, and experience 24/7
            AI-driven assistance. Build the university of the future, today.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-20"
          >
            <Link
              href="/signup?role=${role}"
              className="group relative flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
            <Link
              href="#portals"
              className="flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
            >
              View Portals
            </Link>
          </motion.div>
        </motion.div>

        {/* --- Dashboard Preview Mockup (The Showstopper) --- */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-16 w-full max-w-5xl relative z-10 mx-auto"
        >
          <div className="relative rounded-xl bg-[#0d0d12] border border-white/10 shadow-[0_0_80px_rgba(37,99,235,0.2)] overflow-hidden flex flex-col">
            {/* Mockup Header (Mac style dots & Fake URL bar) */}
            <div className="h-10 bg-[#16161e] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="mx-auto px-6 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-500 font-mono hidden md:block">
                campus-ai.edu/dashboard
              </div>
            </div>

            {/* Mockup Body Content (Fake Dashboard UI) */}
            <div className="flex h-[350px] md:h-[450px] opacity-80">
              {/* Fake Sidebar */}
              <div className="w-48 border-r border-white/5 p-4 hidden md:flex flex-col gap-4 shrink-0 bg-white/[0.01]">
                <div className="h-6 w-24 bg-white/10 rounded mb-4"></div>
                <div className="h-3 w-full bg-white/5 rounded"></div>
                <div className="h-3 w-3/4 bg-white/5 rounded"></div>
                <div className="h-3 w-5/6 bg-white/5 rounded"></div>
                <div className="h-3 w-4/5 bg-white/5 rounded"></div>
                <div className="mt-auto h-10 w-full bg-blue-500/20 border border-blue-500/30 rounded-lg"></div>
              </div>

              {/* Fake Main Content */}
              <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-black/20">
                {/* Top Bar */}
                <div className="flex justify-between items-center">
                  <div className="h-6 w-32 bg-white/10 rounded"></div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/10"></div>
                    <div className="h-8 w-8 rounded-full bg-white/10"></div>
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="h-20 md:h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                    <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                    <div className="h-6 w-1/3 bg-blue-400/50 rounded"></div>
                  </div>
                  <div className="h-20 md:h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                    <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                    <div className="h-6 w-1/3 bg-purple-400/50 rounded"></div>
                  </div>
                  <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 hidden md:flex flex-col justify-between">
                    <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                    <div className="h-6 w-1/3 bg-emerald-400/50 rounded"></div>
                  </div>
                </div>

                {/* AI Central Area */}
                <div className="flex-1 rounded-xl bg-gradient-to-br from-blue-900/10 to-indigo-900/10 border border-blue-500/20 flex items-center justify-center relative overflow-hidden">
                  {/* Grid Pattern inside the chart area */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="p-4 bg-blue-500/20 rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                      <Bot size={36} className="text-blue-400" />
                    </div>
                    <div className="h-3 w-32 bg-blue-400/20 rounded-full"></div>
                    <div className="h-3 w-48 bg-blue-400/10 rounded-full hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Overlay for fade effect at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </main>

      {/* --- Featues section link --- */}
      <Features />

      {/* --- Portals section link --- */}
      <Portals />
      {/* --- About AI section link --- */}
      <AboutAI />
      {/* Footer */}
      <Footer />
    </div>
  );
}
