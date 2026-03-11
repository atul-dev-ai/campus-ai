"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  FileText,
  LineChart,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "AI Student Helpdesk",
    description:
      "24/7 intelligent chatbot that instantly resolves FAQs, routes queries to departments, and suggests academic services.",
    icon: <Bot size={28} />,
    color: "from-blue-500/20 to-blue-500/0",
    iconColor: "text-blue-400",
  },
  {
    title: "Smart Routine Generator",
    description:
      "Automatically generate optimized, conflict-free class and exam schedules based on faculty availability.",
    icon: <Calendar size={28} />,
    color: "from-purple-500/20 to-purple-500/0",
    iconColor: "text-purple-400",
  },
  {
    title: "Automated Service Requests",
    description:
      "Paperless workflow for transcripts and certificates with real-time status tracking and smart escalation.",
    icon: <FileText size={28} />,
    color: "from-indigo-500/20 to-indigo-500/0",
    iconColor: "text-indigo-400",
  },
  {
    title: "Predictive Analytics",
    description:
      "Data-driven insights for admins to track student performance, project progress, and system bottlenecks.",
    icon: <LineChart size={28} />,
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-400",
  },
  {
    title: "Secure & Centralized",
    description:
      "Role-based access control for Students, Faculty, and Admins in one unified, secure ecosystem.",
    icon: <ShieldCheck size={28} />,
    color: "from-rose-500/20 to-rose-500/0",
    iconColor: "text-rose-400",
  },
  {
    title: "Lightning Fast UX",
    description:
      "Built with Next.js App Router and optimized databases for seamless page loads and transitions.",
    icon: <Zap size={28} />,
    color: "from-amber-500/20 to-amber-500/0",
    iconColor: "text-amber-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative z-10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Everything you need to <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              automate your campus
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            CampusAI brings multiple fragmented systems into one single
            intelligent platform.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${feature.iconColor}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
