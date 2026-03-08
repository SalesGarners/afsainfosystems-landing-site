"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Server,
  Layers,
  Shield,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  {
    icon: Server,
    title: "Migrations",
    description:
      "A simple migration path to Oracle Cloud for any type of on-premise workload.",
    accent: "#F80000",
  },
  {
    icon: Layers,
    title: "Integration",
    description:
      "Integration of existing platforms with Oracle Cloud — allowing you to exploit IaaS, PaaS and digital services.",
    accent: "#FF6B35",
  },
  {
    icon: Shield,
    title: "Managed Services",
    description:
      "Effortlessly control your Oracle workloads on Oracle Cloud with our Multi-Cloud Managed Services.",
    accent: "#E040FB",
  },
];

const TRANSFORM_POINTS = [
  {
    label: "Migrate",
    desc: "Seamlessly migrate between Oracle Cloud and any cloud or legacy platform by leveraging our Multi-Cloud Transformation Services.",
  },
  {
    label: "Integrate",
    desc: "Whichever platforms you currently have, you can integrate and connect them easily to applications on Oracle Cloud.",
  },
  {
    label: "Manage",
    desc: "Effortlessly control Oracle workloads on your Oracle Cloud with our Multi-Cloud Managed Services. We give you the tools to orchestrate Oracle Cloud and all your platforms through a single pane of glass.",
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
          background: "radial-gradient(ellipse at top right, #F80000 0%, transparent 70%)",
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
              <span className="text-gray-600">Oracle Cloud</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/oracle.png"
                alt="Oracle"
                width={64}
                height={64}
                className="h-10 w-auto object-contain"
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ color: "#F80000", background: "rgba(248,0,0,0.08)" }}
              >
                Oracle Cloud
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Let Us Manage Your
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #F80000 0%, #FF6B35 100%)",
                }}
              >
                Cloud Operations
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              So you can focus on the business. As a Partner and Global Managed Service Provider
              of Oracle Cloud, AFSA Infosystems accelerates your Oracle-based transformation
              journey through a truly agnostic multi-cloud approach to Hybrid IT.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #F80000 0%, #FF6B35 100%)",
                  boxShadow: "0 8px 32px rgba(248,0,0,0.2)",
                }}
              >
                Get Started
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
            className="relative"
          >
            {/* Partnership highlight card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/oracle.png"
                  alt="Oracle"
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <div className="w-px h-8 bg-gray-200" />
                <Image
                  src="/afsa-logo.png"
                  alt="AFSA Infosystems"
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <h3
                className="text-gray-900 font-bold text-lg mb-3"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                AFSA and Oracle
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Throughout our long-standing partnership, AFSA Infosystems and Oracle have
                co-created innovative solutions for thousands of enterprise customers across
                the globe. As a Partner and Global Managed Service Provider of Oracle Cloud,
                AFSA Infosystems can accelerate your Oracle-based transformation journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CAPABILITIES ─────────────────────────────────────────────────────────────

function Capabilities() {
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
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#F80000" }}>
            Our Oracle Capabilities
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              We Help You With Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #F80000, #FF6B35)" }}
              >
                Multi-Cloud Expertise
              </span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Through our agnostic multi-cloud approach to Hybrid IT and expertise in Oracle
              platforms and applications.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.08}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${cap.accent}10`,
                    border: `1px solid ${cap.accent}20`,
                  }}
                >
                  <Icon size={20} style={{ color: cap.accent }} />
                </div>
                <h3
                  className="text-gray-900 font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {cap.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── TRANSFORM SECTION ────────────────────────────────────────────────────────

function TransformSection() {
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
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#F80000" }}>
              End-to-End Oracle
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Transform, Integrate and{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #F80000, #FF6B35)" }}
              >
                Manage Oracle Cloud
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our global partnership allows organizations with Oracle workloads to have a clear
              path to the cloud — and then have their platforms and apps integrated and fully
              managed from end-to-end.
            </p>

            <div className="space-y-4">
              {TRANSFORM_POINTS.map((point, i) => (
                <motion.div
                  key={point.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={0.1 + i * 0.08}
                  className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4"
                >
                  <div
                    className="shrink-0 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white"
                    style={{ background: "linear-gradient(135deg, #F80000, #FF6B35)" }}
                  >
                    {point.label}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.15}
            className="relative"
          >
            {/* Decorative multi-cloud visual */}
            <div
              className="relative rounded-2xl p-10 border border-gray-100 bg-gray-50 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, #F80000 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 space-y-4">
                {["Oracle Cloud Infrastructure", "Hybrid Cloud", "Multi-Cloud Management", "Oracle Applications"].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2 size={15} style={{ color: "#F80000" }} className="shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-400 text-xs text-center">
                    Global Managed Service Provider — Oracle Cloud
                  </p>
                </div>
              </div>
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
            style={{ background: "linear-gradient(90deg, #F80000, transparent)" }}
          />
          <div
            className="absolute top-0 left-0 w-px h-40"
            style={{ background: "linear-gradient(180deg, #F80000, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-40 h-px"
            style={{ background: "linear-gradient(270deg, #FF6B35, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-px h-40"
            style={{ background: "linear-gradient(0deg, #FF6B35, transparent)" }}
          />

          <Image
            src="/oracle.png"
            alt="Oracle"
            width={80}
            height={40}
            className="h-10 w-auto object-contain mx-auto mb-6"
          />
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Find the Perfect{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #F80000, #FF6B35)" }}
            >
              Oracle Cloud Solution
            </span>
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Contact us today and our certified Oracle architects will craft a tailored cloud
            strategy and migration roadmap for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #F80000 0%, #FF6B35 100%)",
                boxShadow: "0 8px 32px rgba(248,0,0,0.18)",
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
                <Mail size={14} style={{ color: "#F80000" }} />
                info@afsainfosystems.com
              </a>
              <a
                href="tel:+919325425236"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Phone size={14} style={{ color: "#F80000" }} />
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

export default function OracleCloudPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Capabilities />
      <TransformSection />
      <CTA />
    </main>
  );
}