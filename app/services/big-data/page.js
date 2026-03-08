"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Database,
  Search,
  BarChart3,
  Wifi,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const SOLUTIONS = [
  {
    icon: Database,
    title: "Data Preparation",
    description:
      "Cleanse, transform and structure raw data from disparate sources into analytics-ready formats.",
    accent: "#F59E0B",
  },
  {
    icon: Search,
    title: "Data Discovery",
    description:
      "Identify patterns, trends and outliers across massive datasets to uncover hidden business insights.",
    accent: "#FF6B35",
  },
  {
    icon: Wifi,
    title: "Data Availability",
    description:
      "Ensure enterprise data is always accessible, reliable and available across your entire organization.",
    accent: "#10B981",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Drive business value with advanced analytics, complex batch-production schedules and real-time reporting.",
    accent: "#E040FB",
  },
];

const DIFFERENTIATORS = [
  "Hadoop Managed Services for traditional enterprise adoption",
  "End-to-end solutions so time is better spent analysing and driving business value",
  "Private cloud leveraging Hadoop for complex analytics and batch-production",
  "Best-in-class Technology-Managed Services without the time, cost and complexity of traditional big data initiatives",
  "A unique mix of speed, scale, skills and end-to-end solutions unavailable elsewhere in the big data space",
];

const TOOLS = [
  { name: "Python", color: "#3776AB" },
  { name: "Apache Hadoop", color: "#F59E0B" },
  { name: "Amazon Web Services", color: "#FF9900" },
];

// ─── UTILS ───────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #F59E0B 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <a href="/" className="hover:text-gray-600 transition-colors">Home</a>
              <span>/</span>
              <span className="text-gray-400">Services</span>
              <span>/</span>
              <span className="text-gray-600">Big Data</span>
            </div>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: "#F59E0B", background: "rgba(245,158,11,0.1)" }}
            >
              Big Data & Analytics
            </span>

            <h1
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Realize the Advantages of
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #F59E0B 0%, #FF6B35 100%)",
                }}
              >
                Big Data Analytics
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              We solve complex Big Data challenges for global enterprises. AFSA provides
              Hadoop Managed Services to help traditional enterprises adopt Apache Hadoop —
              including Data preparation, Data discovery, Data availability and Data analytics.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              AFSA delivers best-in-class, Technology-Managed Services and solutions to
              enterprises looking to unlock the potential in their data without the time, cost
              and complexity associated with traditional big data initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #FF6B35 100%)",
                  boxShadow: "0 8px 32px rgba(245,158,11,0.25)",
                }}
              >
                Contact Now
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-600 font-medium text-sm rounded-xl hover:bg-gray-50 transition-all"
              >
                Talk to an Expert
              </a>
            </div>
          </motion.div>

          {/* Right — differentiators card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm">
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-5"
                style={{ color: "#F59E0B" }}
              >
                Why AFSA Big Data
              </p>
              <div className="space-y-3">
                {DIFFERENTIATORS.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#F59E0B" }}
                    />
                    <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SOLUTIONS ────────────────────────────────────────────────────────────────

function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "#F59E0B" }}
          >
            Our Solutions
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            A Big Data Consulting &{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #F59E0B, #FF6B35)" }}
            >
              Solutions Provider
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            AFSA delivers an end-to-end solution, so that time is better spent analysing
            and driving business value from big data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.08}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${sol.accent}10`,
                    border: `1px solid ${sol.accent}20`,
                  }}
                >
                  <Icon size={20} style={{ color: sol.accent }} />
                </div>
                <h3
                  className="text-gray-900 font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {sol.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{sol.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── TOOLS SECTION ────────────────────────────────────────────────────────────

function Tools() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: "#F59E0B" }}
            >
              Tools & Technology
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Cutting Edge Big Data
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #F59E0B, #FF6B35)" }}
              >
                Engineering Services
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              AFSA provides a full spectrum of services in a private cloud that leverages
              Hadoop, helping businesses perform complex analytics and batch-production
              schedules not possible prior to Hadoop. We offer a unique mix of speed, scale,
              skills and end-to-end solutions unavailable anywhere else in the big data space.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FF6B35 100%)",
                boxShadow: "0 8px 32px rgba(245,158,11,0.2)",
              }}
            >
              Contact Now
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.12}
            className="space-y-3"
          >
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool.name}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.1 + i * 0.08}
                className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: tool.color }}
                />
                <span className="text-gray-700 font-medium text-sm">{tool.name}</span>
                <div className="ml-auto">
                  <CheckCircle2 size={15} style={{ color: "#F59E0B" }} />
                </div>
              </motion.div>
            ))}
            <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-center">
              <p className="text-gray-400 text-xs">
                Cutting edge Big Data Engineering services at your fingertips
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative rounded-2xl p-12 md:p-16 text-center overflow-hidden border border-gray-100 bg-white shadow-sm"
        >
          <div
            className="absolute top-0 left-0 w-40 h-px"
            style={{ background: "linear-gradient(90deg, #F59E0B, transparent)" }}
          />
          <div
            className="absolute top-0 left-0 w-px h-40"
            style={{ background: "linear-gradient(180deg, #F59E0B, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-40 h-px"
            style={{ background: "linear-gradient(270deg, #FF6B35, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-px h-40"
            style={{ background: "linear-gradient(0deg, #FF6B35, transparent)" }}
          />

          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Unlock the Power of{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #F59E0B, #FF6B35)" }}
            >
              Your Data
            </span>
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Contact us today and our Big Data engineers will design a tailored Hadoop and
            analytics solution for your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FF6B35 100%)",
                boxShadow: "0 8px 32px rgba(245,158,11,0.2)",
              }}
            >
              Contact Us
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@afsainfosystems.com"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Mail size={14} style={{ color: "#F59E0B" }} />
                info@afsainfosystems.com
              </a>
              <a
                href="tel:+919325425236"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Phone size={14} style={{ color: "#F59E0B" }} />
                +91 932 542 5236
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BigDataPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Solutions />
      <Tools />
      <CTA />
    </main>
  );
}