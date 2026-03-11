"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, User, Mail, Lock, LogIn, BadgeAlert } from "lucide-react";
import { supabase } from "@/lib/supabase"; // <-- Eita make sure koro ache

function SignUpForm() {
  const searchParams = useSearchParams();
  const urlRole = searchParams.get("role");

  const [role, setRole] = useState<"student" | "faculty">(
    (urlRole as "student" | "faculty") || "student",
  );

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Real Form States
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Real Supabase Connection Logic
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Supabase Auth-e data pathano hocche
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
          role: role,
          id_number: formData.idNumber,
        },
      },
    });

    if (error) {
      setMessage({ type: "error", text: error.message });
      setLoading(false);
      return;
    }

    setMessage({
      type: "success",
      text: "Account created successfully! Redirecting to login...",
    });

    // 1.5 second por login page e pathabe
    setTimeout(() => {
      window.location.href = `/login?role=${role}`;
    }, 1500);
  };

  // Theme based on role
  const theme =
    role === "student"
      ? {
          gradient: "from-blue-600 to-cyan-500",
          glow: "shadow-[0_0_30px_rgba(37,99,235,0.15)]",
          active: "bg-blue-600 text-white",
        }
      : {
          gradient: "from-purple-600 to-pink-500",
          glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
          active: "bg-purple-600 text-white",
        };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <motion.div
        key={role}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none opacity-20 ${role === "student" ? "bg-blue-500/10" : "bg-purple-500/10"}`}
      />

      <Link
        href="/login"
        className="absolute top-8 left-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors z-20"
      >
        <ArrowLeft size={20} />{" "}
        <span className="hidden md:inline">Back to Login</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative z-10 w-full max-w-md bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-shadow duration-500 ${theme.glow}`}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400 text-sm">
            Register as a new member of CampusAI
          </p>
        </div>

        {/* Role Selection */}
        <div className="flex p-1 bg-white/5 rounded-xl mb-6 border border-white/5">
          <button
            onClick={() => setRole("student")}
            type="button"
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${role === "student" ? theme.active : "text-gray-400 hover:text-white"}`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("faculty")}
            type="button"
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${role === "faculty" ? theme.active : "text-gray-400 hover:text-white"}`}
          >
            Faculty
          </button>
        </div>

        {message && (
          <div
            className={`p-3 rounded-lg mb-4 text-sm font-medium border ${message.type === "success" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}`}
          >
            {message.text}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-400 ml-1">
              Full Name
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                type="text"
                placeholder="e.g. Atul Paul"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-white/30"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-400 ml-1">
              {role === "student" ? "Student ID" : "Faculty ID"}
            </label>
            <div className="relative">
              <BadgeAlert
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required
                type="text"
                placeholder={
                  role === "student" ? "e.g. 2026-123-456" : "e.g. FAC-001"
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-white/30"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-400 ml-1">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="example@campus-ai.edu"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-white/30"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-400 ml-1">
              Password
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-white/30"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            type="submit"
            className={`w-full mt-2 py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 bg-gradient-to-r ${theme.gradient} transition-all ${loading ? "opacity-70" : ""}`}
          >
            {loading ? "Creating Account..." : "Sign Up"} <LogIn size={18} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <SignUpForm />
    </Suspense>
  );
}
