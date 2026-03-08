"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Cloud, Database, Monitor, Users, BookOpen, Building2, Mail, Phone } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROGRAMS = [
  {
    icon: Cloud,
    title: "AWS Certifications",
    description:
      "Hands-on training for AWS Certified Solutions Architect, Developer and SysOps certifications. Covers core AWS services, architecture best practices and exam preparation.",
    accent: "#FF9900",
    badge: "Cloud",
  },
  {
    icon: Database,
    title: "Big Data & Hadoop",
    description:
      "In-depth training on Apache Hadoop ecosystem including HDFS, MapReduce, Hive, Spark and related big data engineering tools for real-world enterprise use cases.",
    accent: "#F59E0B",
    badge: "Big Data",
  },
];

const DELIVERY_MODES = [
  {
    icon: Monitor,
    title: "Online Training",
    description: "Live instructor-led sessions conducted remotely — join from anywhere.",
    accent: "#FF6B35",
  },
  {
    icon: Building2,
    title: "Classroom Training",
    description: "In-person classroom workshops at our training centre in Pune.",
    accent: "#E040FB",
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Customized training programs delivered on-site for enterprise teams.",
    accent: "#FF4081",
  },
  {
    icon: BookOpen,
    title: "University Programs",
    description: "Specialized training programs designed for university students and fresh graduates.",
    accent: "#FFCA28",
  },
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
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, #FFCA28 0%, #FF6B35 50%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <a href="/" className="hover:text-gray-600 transition-colors">Home</a>
          <span>/</span>
          <span className="text-gray-600">Training</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{ color: "#FF6B35", background: "rgba(255,107,53,0.08)" }}
          >
            Training & Development
          </span>
          <h1
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Train & Deploy
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)" }}
            >
              Ready to Hire Talent
            </span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            AFSA's Train and Deploy program is aimed towards creating well-trained, efficient
            professional resources for the marketplace. This program is geared to create new
            talent and resources by providing specific, customized training and placements for
            companies that require industry professionals.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            The resources who evolve from the program are fully trained and Ready to Hire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)",
                boxShadow: "0 8px 32px rgba(255,107,53,0.25)",
              }}
            >
              Enquire Now
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="mailto:info@afsainfosystems.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-600 font-medium text-sm rounded-xl hover:bg-gray-50 transition-all"
            >
              <Mail size={14} />
              info@afsainfosystems.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PROGRAMS ─────────────────────────────────────────────────────────────────

function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#FF6B35" }}>
            Courses
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Niche & Hi-End{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6B35, #FFCA28)" }}
            >
              Technology Courses
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Courses and workshops on niche technologies for students, professionals, universities and corporates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {PROGRAMS.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${prog.accent}10`, border: `1px solid ${prog.accent}20` }}
                  >
                    <Icon size={20} style={{ color: prog.accent }} />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ color: prog.accent, background: `${prog.accent}10` }}
                  >
                    {prog.badge}
                  </span>
                </div>
                <h3
                  className="text-gray-900 font-bold text-lg mb-3"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {prog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{prog.description}</p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style={{ color: prog.accent }}
                >
                  Enquire about this course
                  <ArrowRight size={12} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── DELIVERY MODES ───────────────────────────────────────────────────────────

function DeliveryModes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#FF6B35" }}>
            How We Deliver
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Flexible{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6B35, #E040FB)" }}
            >
              Training Modes
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DELIVERY_MODES.map((mode, i) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={mode.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.07}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${mode.accent}10`, border: `1px solid ${mode.accent}20` }}
                >
                  <Icon size={20} style={{ color: mode.accent }} />
                </div>
                <h3
                  className="text-gray-900 font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {mode.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{mode.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function TrainingPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Programs />
      <DeliveryModes />
    </main>
  );
}