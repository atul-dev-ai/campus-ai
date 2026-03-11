"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Users, Shield, ArrowRight } from "lucide-react";

const portals = [
  {
    role: "Student Portal",
    description:
      "Access your smart routine, track service requests, and get 24/7 help from the AI campus assistant.",
    icon: <GraduationCap size={32} />,
    href: "/login?role=student", // Login page e role parameter pass korbo
    color: "from-blue-600 to-cyan-500",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]",
    borderColor: "group-hover:border-blue-500/50",
  },
  {
    role: "Faculty Portal",
    description:
      "Manage class schedules, generate AI-assisted lecture notes, and monitor capstone project progress.",
    icon: <Users size={32} />,
    href: "/login?role=faculty",
    color: "from-purple-600 to-pink-500",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    role: "Admin Dashboard",
    description:
      "Oversee university operations, manage user roles, and view predictive analytics for better decision-making.",
    icon: <Shield size={32} />,
    href: "/login?role=admin",
    color: "from-emerald-600 to-teal-500",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    borderColor: "group-hover:border-emerald-500/50",
  },
];

export default function Portals() {
  return (
    <section id="portals" className="py-24 relative z-10 bg-[#050505]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            One Platform, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
              Tailored Experiences
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Secure, role-based access ensures everyone has exactly the tools
            they need to succeed.
          </motion.p>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <Link
                href={portal.href}
                className={`group block h-full bg-[#111] border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${portal.borderColor} ${portal.glowColor}`}
              >
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${portal.color} text-white shadow-lg`}
                >
                  {portal.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {portal.role}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {portal.description}
                </p>

                {/* Action Link (Animated) */}
                <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors mt-auto">
                  Access Portal
                  <ArrowRight
                    size={18}
                    className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
