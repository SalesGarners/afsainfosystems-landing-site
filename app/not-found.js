"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Warm background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #FF6B35 0%, #E040FB 60%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a href="/" className="inline-block mb-10">
            <Image
              src="/afsa-logo.png"
              alt="AFSA Infosystems"
              width={140}
              height={42}
              className="h-9 w-auto object-contain mx-auto"
            />
          </a>

          <div
            className="text-[120px] font-black leading-none mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            404
          </div>

          <h1
            className="text-2xl font-black text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Page Not Found
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            The page you are looking for does not exist or may have been moved.
            Let us help you get back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)",
                boxShadow: "0 8px 32px rgba(255,107,53,0.2)",
              }}
            >
              <Home size={15} />
              Back to Home
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-600 font-medium text-sm rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all"
            >
              Contact Us
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}