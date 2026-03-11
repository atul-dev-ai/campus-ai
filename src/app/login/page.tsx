"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  Users,
  Shield,
  Mail,
  Lock,
  LogIn,
  AlertCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabase"; // Supabase connection

function LoginForm() {
  const searchParams = useSearchParams();
  const urlRole = searchParams.get("role");

  const [role, setRole] = useState<"student" | "faculty" | "admin">(
    (urlRole as "student" | "faculty" | "admin") || "student",
  );

  // Auth States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Dynamic themes based on selected role
  const themes = {
    student: {
      gradient: "from-blue-600 to-cyan-500",
      glow: "shadow-[0_0_30px_rgba(37,99,235,0.15)]",
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      activeTab: "bg-blue-600 text-white",
    },
    faculty: {
      gradient: "from-purple-600 to-pink-500",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      activeTab: "bg-purple-600 text-white",
    },
    admin: {
      gradient: "from-emerald-600 to-teal-500",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      activeTab: "bg-emerald-600 text-white",
    },
  };

  const currentTheme = themes[role] || themes.student;

  // Supabase Login Logic
  // Supabase Login Logic
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Authenticate with Supabase
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    if (authData.user) {
      // 2. Fetch User's Real Role from profiles table (use maybeSingle jate crash na kore)
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", authData.user.id)
        .maybeSingle(); // <-- Ekhane change kora hoyeche

      // Jodi database-e role thake oita nibe, na hole form-er tab-er role nibe
      const finalRole = profileData?.role || role;

      // 3. Set Cookie for Middleware (Hackathon bypass token)
      document.cookie = `campus-ai-auth-token=${authData.session.access_token}; path=/; max-age=86400`;

      // 4. Redirect to proper dashboard
      window.location.href = `/${finalRole}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        key={role}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none opacity-20 ${currentTheme.bg}`}
      />

      <Link
        href="/"
        className="absolute top-8 left-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors z-20"
      >
        <ArrowLeft size={20} />{" "}
        <span className="hidden md:inline">Back to Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative z-10 w-full max-w-md bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-shadow duration-500 ${currentTheme.glow}`}
      >
        <div className="text-center mb-8">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent inline-block mb-2"
          >
            CampusAI
          </Link>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Role Selection Tabs */}
        <div className="flex p-1 bg-white/5 rounded-xl mb-6 border border-white/5">
          <button
            onClick={() => setRole("student")}
            type="button"
            className={`flex-1 flex justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${role === "student" ? currentTheme.activeTab : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <GraduationCap size={16} /> Student
          </button>
          <button
            onClick={() => setRole("faculty")}
            type="button"
            className={`flex-1 flex justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${role === "faculty" ? currentTheme.activeTab : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Users size={16} /> Faculty
          </button>
          <button
            onClick={() => setRole("admin")}
            type="button"
            className={`flex-1 flex justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${role === "admin" ? currentTheme.activeTab : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Shield size={16} /> Admin
          </button>
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium">
                <AlertCircle size={16} /> {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                <Mail size={18} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  role === "student"
                    ? "student@campus-ai.edu"
                    : role === "faculty"
                      ? "faculty@campus-ai.edu"
                      : "admin@campus-ai.edu"
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                <Lock size={18} />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            type="submit"
            className={`w-full mt-6 py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 bg-gradient-to-r ${currentTheme.gradient} shadow-lg transition-all ${loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-xl"}`}
          >
            {loading ? "Authenticating..." : "Sign In"} <LogIn size={18} />
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?{" "}
          <Link
            href={`/signup?role=${role}`}
            className={`font-medium ${currentTheme.text} hover:underline`}
          >
            Create Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
