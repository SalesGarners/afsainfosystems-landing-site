"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cloud,
  RefreshCw,
  Smartphone,
  Server,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: RefreshCw,
    title: "Next-Generation App Development & Management",
    description:
      "Help manage diverse and complex applications at a lower cost and enable rapid response to new functionality. AFSA services can reduce total cost of operations by up to 30% and defects by up to 30%.",
    accent: "#FF4081",
  },
  {
    icon: Cloud,
    title: "Cloud Application Development",
    description:
      "Rapidly deliver new customized software, solutions, and contextual experiences for the cloud at scale.",
    accent: "#FF6B35",
  },
  {
    icon: Code2,
    title: "Application Modernization",
    description:
      "Continuously modernize your applications to support business agility using proprietary methodologies and tools to assess your portfolio and identify the best modernization approach.",
    accent: "#E040FB",
  },
  {
    icon: Smartphone,
    title: "Mobile Business App Development",
    description:
      "Develop robust mobile apps with maintenance and security delivered on a robust architecture.",
    accent: "#10B981",
  },
  {
    icon: Server,
    title: "Enterprise Application Services",
    description:
      "AFSA helps you get more out of your investments in Oracle applications with full lifecycle enterprise application services.",
    accent: "#F59E0B",
  },
];

const APPROACH_POINTS = [
  "Transform legacy portfolios to flexible, modular applications",
  "Cutting-edge research, AI automation and user feedback driven development",
  "Greater business alignment, customer engagement and ROI",
  "Reduce total cost of operations by up to 30%",
  "Reduce defects by up to 30%",
  "Proprietary methodologies for application portfolio assessment",
];

// ─── TECH STACK SVG ICONS ────────────────────────────────────────────────────

const TECH_STACK = [
  {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#339933"/>
        <path d="M12 5.5l6.5 3.6v7.2L12 19.8 5.5 16.3V9.1L12 5.5z" fill="#fff" opacity="0.15"/>
        <text x="12" y="14" textAnchor="middle" fontSize="5" fontWeight="bold" fill="white">JS</text>
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#ED8B00",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M8.85 16.83c0 0-0.93 0.54 0.66 0.72 1.92 0.22 2.9 0.19 5.02-0.22 0 0 0.56 0.35 1.34 0.65C12.17 19.43 5.98 17.85 8.85 16.83z" fill="#ED8B00"/>
        <path d="M8.27 14.32c0 0-1.05 0.78 0.55 0.94 2.07 0.21 3.71 0.23 6.54-0.31 0 0 0.39 0.39 1 0.61C12.41 16.73 4.99 15.6 8.27 14.32z" fill="#ED8B00"/>
        <path d="M13.32 10.13c1.18 1.36-0.31 2.58-0.31 2.58s2.99-1.54 1.62-3.47c-1.28-1.8-2.26-2.7 3.05-5.78C17.68 3.46 10.06 5.25 13.32 10.13z" fill="#ED8B00"/>
        <path d="M19.26 18.02c0 0 0.69 0.57-0.76 1.01-2.75 0.83-11.46 1.08-13.88 0.03-0.87-0.38 0.76-0.9 1.27-1.01 0.53-0.11 0.84-0.09 0.84-0.09-0.96-0.68-6.24 1.34-2.68 1.91C13.87 21.35 22.5 19.15 19.26 18.02z" fill="#ED8B00"/>
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M11.94 2C8.4 2 8.65 3.54 8.65 3.54L8.66 5.14h3.35v0.5H6.16S4 5.38 4 8.95c0 3.57 1.97 3.44 1.97 3.44h1.18v-1.65s-0.06-1.97 1.94-1.97h3.34s1.88 0.03 1.88-1.82V3.78S14.6 2 11.94 2zM10.19 3.13c0.34 0 0.61 0.27 0.61 0.61s-0.27 0.61-0.61 0.61-0.61-0.27-0.61-0.61S9.85 3.13 10.19 3.13z" fill="#3776AB"/>
        <path d="M12.06 22c3.54 0 3.29-1.54 3.29-1.54l-0.01-1.6h-3.35v-0.5h5.85s2.16 0.26 2.16-3.31c0-3.57-1.97-3.44-1.97-3.44h-1.18v1.65s0.06 1.97-1.94 1.97H11.57s-1.88-0.03-1.88 1.82v3.17S9.4 22 12.06 22zm1.75-1.13c-0.34 0-0.61-0.27-0.61-0.61s0.27-0.61 0.61-0.61 0.61 0.27 0.61 0.61S14.15 20.87 13.81 20.87z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: "Flutter",
    color: "#02569B",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M14.5 2L5 11.5l3 3 9.5-9.5L14.5 2z" fill="#54C5F8"/>
        <path d="M14.5 2L5 11.5l3 3 9.5-9.5L14.5 2z" fill="#54C5F8"/>
        <path d="M8 14.5l3 3-3 3H14.5L20 15l-3-3-9 2.5z" fill="#02569B"/>
        <path d="M11 17.5l3.5-3-0.5-0.5L11 17.5z" fill="#45D1FD" opacity="0.85"/>
        <path d="M8 17.5h6.5l-3.5-3.5L8 17.5z" fill="#01579B"/>
      </svg>
    ),
  },
  {
    name: "Angular",
    color: "#DD0031",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M12 2L3 5.25l1.36 11.84L12 21l7.64-3.91L21 5.25 12 2z" fill="#DD0031"/>
        <path d="M12 2v19l7.64-3.91L21 5.25 12 2z" fill="#C3002F"/>
        <path d="M12 4.6L6.3 17.4h2.1l1.16-2.9h4.88l1.16 2.9h2.1L12 4.6zm0 3.5l1.82 4.6H10.18L12 8.1z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M13.5 9.5h2v2h-2V9.5zm-2.5 0h2v2h-2V9.5zm-2.5 0h2v2H8.5V9.5zm-2.5 0h2v2H6V9.5zm5-2.5h2v2h-2V7zm-2.5 0h2v2H8.5V7zm2.5-2.5h2v2h-2V4.5z" fill="#2496ED"/>
        <path d="M22 12.5c-0.5-0.35-1.65-0.47-2.54-0.3-0.11-0.91-0.65-1.7-1.6-2.4l-0.54-0.36-0.36 0.54c-0.45 0.7-0.57 1.87-0.1 2.63-0.23 0.12-0.68 0.3-1.27 0.29H2.1c-0.2 1.15 0.13 2.64 1 3.63 0.85 0.97 2.13 1.47 3.8 1.47 3.6 0 6.27-1.66 7.52-4.67 0.49 0.01 1.55 0 2.1-1.03 0.03-0.06 0.22-0.4 0.28-0.52L22 12.5z" fill="#2496ED"/>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    color: "#326CE5",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M12 2L4 6.5v9L12 22l8-6.5v-9L12 2z" fill="#326CE5"/>
        <path d="M12 5.5l1.5 4-1.5 0.7-1.5-0.7 1.5-4zm0 9l-1.5-4 1.5-0.7 1.5 0.7L12 14.5z" fill="white"/>
        <path d="M7.5 8.5l3.5 2v1.5l-3.5 2-1.5-2.75 1.5-2.75zm9 0l1.5 2.75-1.5 2.75-3.5-2V10l3.5-1.5z" fill="white" opacity="0.85"/>
      </svg>
    ),
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
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #FF4081 0%, transparent 70%)",
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
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <a href="/" className="hover:text-gray-600 transition-colors">Home</a>
              <span>/</span>
              <span className="text-gray-400">Services</span>
              <span>/</span>
              <span className="text-gray-600">Application Development</span>
            </div>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: "#FF4081", background: "rgba(255,64,129,0.08)" }}
            >
              Application Development
            </span>

            <h1
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Custom Application
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #FF4081 0%, #FF6B35 100%)",
                }}
              >
                Development & Managed Services
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Our technical expertise in Application Development and Managed Services will
              assist you in your Digital Transformation journey. Transform legacy portfolios
              to flexible, modular applications using cutting-edge research, AI automation
              and user feedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #FF4081 0%, #FF6B35 100%)",
                  boxShadow: "0 8px 32px rgba(255,64,129,0.25)",
                }}
              >
                Contact Us
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

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm">
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-5"
                style={{ color: "#FF4081" }}
              >
                A Modern Approach
              </p>
              <div className="space-y-3">
                {APPROACH_POINTS.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#FF4081" }}
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

// ─── SERVICES ─────────────────────────────────────────────────────────────────

function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "#FF4081" }}
          >
            What We Offer
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Application Development &{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #FF4081, #FF6B35)" }}
              >
                Management Services
              </span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              End-to-end application services from cloud-native development to legacy
              modernization and mobile apps.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.07}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${service.accent}10`,
                    border: `1px solid ${service.accent}20`,
                  }}
                >
                  <Icon size={20} style={{ color: service.accent }} />
                </div>
                <h3
                  className="text-gray-900 font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── TECH STACK ───────────────────────────────────────────────────────────────

function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "#FF4081" }}
          >
            Technologies We Work With
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Cutting Edge{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF4081, #FF6B35)" }}
            >
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-lg mx-auto">
            We leverage modern, battle-tested technologies to build scalable, cloud-native
            applications tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.05}
              className="group flex flex-col items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-gray-200 hover:shadow-md hover:bg-white transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {tech.svg}
              </div>
              <span className="text-gray-600 text-xs font-medium text-center group-hover:text-gray-900 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
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
            style={{ background: "linear-gradient(90deg, #FF4081, transparent)" }}
          />
          <div
            className="absolute top-0 left-0 w-px h-40"
            style={{ background: "linear-gradient(180deg, #FF4081, transparent)" }}
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
            Ready to Build Your{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF4081, #FF6B35)" }}
            >
              Next Application?
            </span>
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Contact us to learn more about our Application Development services and how we
            can accelerate your Digital Transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF4081 0%, #FF6B35 100%)",
                boxShadow: "0 8px 32px rgba(255,64,129,0.2)",
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
                <Mail size={14} style={{ color: "#FF4081" }} />
                info@afsainfosystems.com
              </a>
              <a
                href="tel:+919325425236"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Phone size={14} style={{ color: "#FF4081" }} />
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

export default function ApplicationDevelopmentPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <TechStack />
      <CTA />
    </main>
  );
}