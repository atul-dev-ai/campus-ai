"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  UploadCloud,
  FileCheck,
  ScanLine,
  Clock,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServiceRequestsPage() {
  const [activeTab, setActiveTab] = useState<"new" | "history">("new");
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<{
    cgpa: string;
    credits: string;
  } | null>(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  // Mock OCR Scanning Effect
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUploaded(true);
      setIsScanning(true);
      setScannedData(null);

      // Simulating AI OCR processing delay
      setTimeout(() => {
        setIsScanning(false);
        setScannedData({ cgpa: "3.85", credits: "120" }); // Fake extracted data
      }, 3000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#111] border border-white/10 p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="text-indigo-400" /> Service Requests
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Apply for transcripts, certificates, and official documents.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl">
          <button
            onClick={() => setActiveTab("new")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "new" ? "bg-indigo-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
          >
            New Request
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "history" ? "bg-indigo-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
          >
            History & Status
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "new" ? (
          <motion.div
            key="new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Left Form Area */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Application Form
                </h2>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">
                        Request Type
                      </label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-indigo-500/50 appearance-none">
                        <option value="transcript" className="bg-[#111]">
                          Official Transcript
                        </option>
                        <option value="certificate" className="bg-[#111]">
                          Provisional Certificate
                        </option>
                        <option value="recommendation" className="bg-[#111]">
                          Letter of Recommendation
                        </option>
                        <option value="correction" className="bg-[#111]">
                          Name Correction
                        </option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">
                        Delivery Method
                      </label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-indigo-500/50 appearance-none">
                        <option value="digital" className="bg-[#111]">
                          Digital Copy (PDF)
                        </option>
                        <option value="physical" className="bg-[#111]">
                          Physical Copy (Pickup)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">
                      Purpose of Request
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly explain why you need this document..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 resize-none"
                    ></textarea>
                  </div>

                  {/* AI Auto-filled Fields (Read Only) */}
                  <AnimatePresence>
                    {scannedData && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="grid grid-cols-2 gap-5 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl overflow-hidden"
                      >
                        <div>
                          <p className="text-xs text-indigo-400 mb-1 flex items-center gap-1">
                            <ShieldCheck size={12} /> Verified CGPA
                          </p>
                          <p className="text-lg font-bold text-white">
                            {scannedData.cgpa}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-indigo-400 mb-1 flex items-center gap-1">
                            <ShieldCheck size={12} /> Completed Credits
                          </p>
                          <p className="text-lg font-bold text-white">
                            {scannedData.credits}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
                  >
                    Submit Request <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side: Smart Upload & OCR Panel */}
            <div className="space-y-6">
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UploadCloud size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Smart Document Upload
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Upload previous semester grade sheets to auto-fill CGPA and
                  credits using AI.
                </p>

                {/* Upload Dropzone */}
                <div className="relative group cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 transition-colors relative overflow-hidden ${isScanning ? "border-indigo-500 bg-indigo-500/5" : fileUploaded ? "border-emerald-500 bg-emerald-500/5" : "border-white/20 group-hover:border-indigo-500/50 group-hover:bg-white/5"}`}
                  >
                    {isScanning ? (
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <ScanLine
                          size={32}
                          className="text-indigo-400 animate-pulse"
                        />
                        <p className="text-sm font-medium text-indigo-400">
                          Extracting text via OCR...
                        </p>
                        {/* Scanning Line Animation */}
                        <motion.div
                          animate={{ top: ["0%", "100%", "0%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute left-0 w-full h-1 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] z-10 opacity-50"
                        />
                      </div>
                    ) : scannedData ? (
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <CheckCircle2 size={32} className="text-emerald-400" />
                        <p className="text-sm font-medium text-emerald-400">
                          Data Extracted Successfully!
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2 text-gray-400">
                        <FileText size={32} className="opacity-50" />
                        <p className="text-sm">Click or drag file here</p>
                        <p className="text-xs opacity-60">
                          PDF, JPG, PNG up to 5MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* History & Status Tab */
          <motion.div
            key="history"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-6">
              Recent Requests
            </h2>
            <div className="space-y-4">
              {/* Dummy Ticket 1 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg shrink-0">
                    <FileCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">
                      Official Transcript (8th Sem)
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Ticket ID: #REQ-2026-089 • Applied on Mar 01, 2026
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium shrink-0">
                  <Clock size={16} /> Processing
                </div>
              </div>

              {/* Dummy Ticket 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">
                      Provisional Certificate
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Ticket ID: #REQ-2025-992 • Applied on Dec 15, 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium shrink-0">
                  <ShieldCheck size={16} /> Completed & Sent
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
