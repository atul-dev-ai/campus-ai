"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  FileText,
  CheckCircle2,
  Download,
  Copy,
  Loader2,
  Send,
} from "lucide-react";

export default function AINotesGenerator() {
  const [topic, setTopic] = useState("");
  const [format, setFormat] = useState("detailed");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedNotes, setGeneratedNotes] = useState<string | null>(null);

  // Fake AI Generation Logic (For Hackathon Demo)
  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsGenerating(true);
    setGeneratedNotes(null);

    setTimeout(() => {
      setIsGenerating(false);
      // Mock generated content based on format
      setGeneratedNotes(`
### Lecture: ${topic}

**1. Introduction & Overview**
This lecture covers the fundamental principles of ${topic}. Students will learn how to apply these concepts in real-world scenarios, focusing on efficiency and best practices.

**2. Key Concepts & Definitions**
* **Core Principle A:** The foundation of the topic, dealing with basic structures.
* **Core Principle B:** Advanced application and optimization techniques.
* **Use Case:** Implemented widely in modern enterprise systems to reduce latency.

**3. Practice Questions (MCQs)**
**Q1.** What is the primary advantage of ${topic}?
a) Higher cost
b) Improved performance and scalability
c) Slower execution time
d) None of the above
*Answer: b*

**4. Summary for Students**
Ensure you review Chapter 4 of the textbook. Pay special attention to the difference between Principle A and B, as this will be on the upcoming mid-term exam.
      `);
    }, 3000); // 3 second fake loading
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-10">
      {/* Header */}
      <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
          <Sparkles className="text-purple-400" /> AI Course Material Generator
        </h1>
        <p className="text-gray-400 text-sm">
          Instantly convert your raw topics or bullet points into structured
          lecture notes, summaries, and practice quizzes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left/Top: Input Area */}
        <div className="lg:col-span-5 space-y-6">
          <form
            onSubmit={handleGenerate}
            className="bg-[#111] border border-white/10 rounded-2xl p-6"
          >
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 block">
                  Lecture Topic or Raw Notes
                </label>
                <textarea
                  rows={5}
                  required
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., 'Binary Search Trees: Time complexity, insertion, and deletion algorithms...'"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 resize-none transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 block">
                  Output Format
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500/50 appearance-none"
                >
                  <option value="detailed" className="bg-[#111]">
                    Detailed Lecture Notes
                  </option>
                  <option value="summary" className="bg-[#111]">
                    Short Summary & Key Points
                  </option>
                  <option value="quiz" className="bg-[#111]">
                    Practice Quiz (MCQs)
                  </option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isGenerating || !topic.trim()}
                className={`w-full py-3.5 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all ${
                  isGenerating || !topic.trim()
                    ? "bg-white/10 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                }`}
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Generating AI
                    Content...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Generate Material
                  </>
                )}
              </button>
            </div>

            {/* Tips Section */}
            <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
              <p className="text-xs text-purple-300 leading-relaxed">
                <strong className="text-purple-400">Pro Tip:</strong> The more
                context you provide in the raw notes, the more accurate and
                tailored the generated material will be for your students.
              </p>
            </div>
          </form>
        </div>

        {/* Right/Bottom: Result Area */}
        <div className="lg:col-span-7">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl h-full min-h-[500px] flex flex-col relative overflow-hidden">
            {/* Output Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#111]">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <FileText size={16} className="text-pink-400" /> Output Result
              </div>
              <div className="flex gap-2">
                <button
                  disabled={!generatedNotes}
                  className="p-2 text-gray-400 hover:text-white disabled:opacity-50 transition-colors"
                  title="Copy Text"
                >
                  <Copy size={16} />
                </button>
                <button
                  disabled={!generatedNotes}
                  className="p-2 text-gray-400 hover:text-white disabled:opacity-50 transition-colors"
                  title="Download PDF"
                >
                  <Download size={16} />
                </button>
              </div>
            </div>

            {/* Output Body */}
            <div className="p-6 flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full text-center space-y-4"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-white/5 border-t-purple-500 animate-spin"></div>
                      <Sparkles
                        size={20}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-400 animate-pulse"
                      />
                    </div>
                    <p className="text-purple-400 font-medium">
                      Analyzing topic parameters...
                    </p>
                    <p className="text-sm text-gray-500">
                      Structuring content & generating questions
                    </p>
                  </motion.div>
                ) : generatedNotes ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-line"
                  >
                    {generatedNotes}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-gray-600 space-y-3"
                  >
                    <BookOpen size={48} className="opacity-20" />
                    <p>Enter a topic and hit generate to see the magic.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
