"use client";

import { motion } from "framer-motion";
import { BrainCircuit, MessageSquareText, Workflow, ScanText, LineChart } from "lucide-react";

const aiFeatures = [
  {
    icon: <MessageSquareText size={20} className="text-blue-400" />,
    title: "Natural Language Processing (NLP)",
    description: "Understands student queries contextually to provide accurate answers and route complex issues to human admins.",
  },
  {
    icon: <Workflow size={20} className="text-purple-400" />,
    title: "Constraint Satisfaction Algorithms",
    description: "Powers the smart routine generator to calculate thousands of variables and ensure 100% conflict-free schedules.",
  },
  {
    icon: <ScanText size={20} className="text-indigo-400" />,
    title: "Optical Character Recognition (OCR)",
    description: "Automatically extracts data from uploaded documents to speed up transcript and certificate requests.",
  },
  {
    icon: <LineChart size={20} className="text-emerald-400" />,
    title: "Predictive Machine Learning",
    description: "Analyzes historical data to predict peak server loads, common query trends, and student performance risks.",
  },
];

export default function AboutAI() {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <BrainCircuit size={16} /> The Engine
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Not just software. <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">A thinking campus.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              CampusAI goes beyond basic CRUD operations. We leverage advanced machine learning models and large language APIs to automate the heavy lifting.
            </p>

            <div className="space-y-6">
              {aiFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual AI Core Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] flex items-center justify-center hidden md:flex"
          >
            {/* Outer Rotating Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] rounded-full border border-white/10 border-dashed"
            />
            {/* Inner Rotating Ring (Reverse) */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] rounded-full border border-indigo-500/30"
            />
            
            {/* The Core (Glowing Brain) */}
            <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center shadow-[0_0_80px_rgba(99,102,241,0.6)]">
              <BrainCircuit size={48} className="text-white animate-pulse" />
            </div>

            {/* Floating Nodes */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center shadow-lg text-blue-400">
              <MessageSquareText size={24} />
            </motion.div>
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 right-10 w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center shadow-lg text-emerald-400">
              <LineChart size={24} />
            </motion.div>
            <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute top-20 right-4 w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center shadow-lg text-purple-400">
              <Workflow size={20} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}