"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Cloud, Database, Code2, BarChart3, MapPin, Phone, Mail } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const OFFERINGS = [
  {
    icon: Cloud,
    title: "Cloud Computing & Oracle EBS",
    description:
      "Enterprise solutions in Cloud Computing and Oracle E-Business Suite for SMEs to large organizations across multiple business domains.",
    accent: "#FF6B35",
  },
  {
    icon: Code2,
    title: "Application Development",
    description:
      "Business process assessment and defining a Digital Transformation road map with cutting-edge application development.",
    accent: "#E040FB",
  },
  {
    icon: BarChart3,
    title: "Big Data & Analytics",
    description:
      "Using cutting-edge technologies to improve ROI and TCO through advanced big data engineering and analytics.",
    accent: "#F59E0B",
  },
  {
    icon: Database,
    title: "ODC, Staff Augmentation & Outsourcing",
    description:
      "Offshore Development Centre setup, staff augmentation and end-to-end outsourcing tailored to your business needs.",
    accent: "#FF4081",
  },
];

const LOCATIONS = [
  {
    city: "Pune",
    country: "India",
    label: "Headquarters",
    address: "Kondhwa, Pune — 411048",
    phone: "+91 932 542 5236",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    label: "Middle East Office",
    address: "Riyadh, KSA",
    phone: "+966 504 419 225",
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, #FF6B35 0%, #E040FB 50%, transparent 75%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <a href="/" className="hover:text-gray-600 transition-colors">Home</a>
          <span>/</span>
          <span className="text-gray-600">About Us</span>
        </div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: "#FF6B35", background: "rgba(255,107,53,0.08)" }}
            >
              About AFSA Infosystems
            </span>

            <h1
              className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              A Leading IT Consulting
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)" }}
              >
                & Services Company
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              We choose to represent with the symbol of cloud because it best describes a
              vision that brings endless possibilities for enterprises to grow.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              We are a team of young, passionate and qualified professionals working on a
              mission to make IT solutions easy, reliable and cost effective for organizations
              across the globe. We are a team obsessed with success in excelling our customers
              expectations in what we do.
            </p>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)",
                boxShadow: "0 8px 32px rgba(255,107,53,0.25)",
              }}
            >
              Get in Touch
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── MISSION ──────────────────────────────────────────────────────────────────

function Mission() {
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
            We Assist
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Being a Consulting Company at Core,{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6B35, #E040FB)" }}
            >
              We Help Organizations
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
            Providing blended and integrated IT solutions for SMEs to large organizations
            across multiple business domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OFFERINGS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.08}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${item.accent}10`, border: `1px solid ${item.accent}20` }}
                >
                  <Icon size={20} style={{ color: item.accent }} />
                </div>
                <h3
                  className="text-gray-900 font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── LOCATIONS ────────────────────────────────────────────────────────────────

function Locations() {
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
            Our Presence
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Global{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6B35, #E040FB)" }}
            >
              Offices
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.city}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6"
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block"
                style={{ color: "#FF6B35", background: "rgba(255,107,53,0.08)" }}
              >
                {loc.label}
              </span>
              <h3
                className="text-gray-900 font-black text-2xl mb-1"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {loc.city}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{loc.country}</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-gray-500 text-sm">
                  <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: "#FF6B35" }} />
                  {loc.address}
                </div>
                <div className="flex items-start gap-2 text-gray-500 text-sm">
                  <Phone size={13} className="mt-0.5 shrink-0" style={{ color: "#FF6B35" }} />
                  {loc.phone}
                </div>
              </div>
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
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-white border border-gray-100 rounded-2xl p-12 shadow-sm overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-40 h-px" style={{ background: "linear-gradient(90deg, #FF6B35, transparent)" }} />
          <div className="absolute top-0 left-0 w-px h-40" style={{ background: "linear-gradient(180deg, #FF6B35, transparent)" }} />
          <div className="absolute bottom-0 right-0 w-40 h-px" style={{ background: "linear-gradient(270deg, #E040FB, transparent)" }} />
          <div className="absolute bottom-0 right-0 w-px h-40" style={{ background: "linear-gradient(0deg, #E040FB, transparent)" }} />

          <h2
            className="text-3xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Ready to{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6B35, #E040FB)" }}
            >
              Cloudify Your Business?
            </span>
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Get in touch with our team of experts and start your digital transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)", boxShadow: "0 8px 32px rgba(255,107,53,0.2)" }}
            >
              Contact Us
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="mailto:info@afsainfosystems.com"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Mail size={14} style={{ color: "#FF6B35" }} />
              info@afsainfosystems.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Mission />
      <Locations />
      <CTA />
    </main>
  );
}