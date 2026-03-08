"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Truck,
  Factory,
  Users,
  HeartHandshake,
  CheckCircle2,
  Wrench,
  RotateCcw,
  ArrowUpCircle,
  Sliders,
  LifeBuoy,
  Database,
  Phone,
  Mail,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const ENTERPRISE_SOLUTIONS = [
  {
    icon: DollarSign,
    title: "Oracle Financial Management",
    description:
      "Comprehensive financial management covering general ledger, accounts payable, accounts receivable, fixed assets and cash management.",
  },
  {
    icon: Truck,
    title: "Oracle Supply Chain Management",
    description:
      "End-to-end supply chain visibility from procurement through fulfilment with demand planning, inventory and logistics management.",
  },
  {
    icon: Factory,
    title: "Oracle Manufacturing",
    description:
      "Discrete, process and mixed-mode manufacturing capabilities with production scheduling, quality management and cost control.",
  },
  {
    icon: Users,
    title: "Oracle Human Capital Management",
    description:
      "Complete HR lifecycle management covering core HR, payroll, talent management, learning and workforce analytics.",
  },
  {
    icon: HeartHandshake,
    title: "Oracle Customer Relationship Management",
    description:
      "Integrated CRM with sales, service and marketing capabilities to improve customer engagement and drive revenue growth.",
  },
];

const SERVICE_OFFERINGS = [
  {
    icon: Wrench,
    label: "Implementations",
    desc: "Full end-to-end Oracle EBS implementation tailored to your industry and business processes.",
  },
  {
    icon: RotateCcw,
    label: "Roll Outs",
    desc: "Structured global and regional rollouts ensuring consistency and compliance across all entities.",
  },
  {
    icon: ArrowUpCircle,
    label: "Upgrades",
    desc: "Seamless version upgrades with minimal business disruption and full regression testing.",
  },
  {
    icon: Sliders,
    label: "Enhancements & Customizations",
    desc: "Tailored extensions and customizations that align Oracle EBS precisely with your workflows.",
  },
  {
    icon: LifeBuoy,
    label: "Managed Services",
    desc: "Ongoing application management, monitoring and support to keep your EBS environment running optimally.",
  },
  {
    icon: Database,
    label: "Oracle Database Support",
    desc: "Expert DBA services, performance tuning, patching and database administration for Oracle DB environments.",
  },
];

const KEY_BENEFITS = [
  "Make better decisions, reduce costs and increase performance",
  "Enhance key business processes and overturn existing inefficiencies",
  "Ensure greater productivity and cost reduction",
  "Ease day-to-day administration across all departments",
  "Strong vertical industry experience and global process knowledge",
  "Direct alliance partnership with Oracle for best solution options",
];

// ─── EBS ORBIT ANIMATION ─────────────────────────────────────────────────────

const ORBIT_MODULES = [
  { label: "Finance", angle: 0 },
  { label: "SCM", angle: 72 },
  { label: "MFG", angle: 144 },
  { label: "HCM", angle: 216 },
  { label: "CRM", angle: 288 },
];

function EBSAnimation() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto select-none">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E040FB 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Orbit ring */}
      <motion.div
        className="absolute inset-8 rounded-full"
        style={{
          border: "1px dashed rgba(248,0,0,0.25)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_MODULES.map((mod) => {
          const rad = (mod.angle * Math.PI) / 180;
          const r = 50; // percent radius
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <motion.div
              key={mod.label}
              className="absolute flex items-center justify-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="px-2.5 py-1 rounded-lg text-xs font-bold text-white shadow-md"
                style={{
                  background: "linear-gradient(135deg, #E040FB, #c000e0)",
                  boxShadow: "0 2px 12px rgba(248,0,0,0.35)",
                }}
              >
                {mod.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Inner ring — counter spin */}
      <motion.div
        className="absolute inset-16 rounded-full"
        style={{ border: "1px solid rgba(248,0,0,0.12)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Pulse rings */}
      {[0, 0.6, 1.2].map((delay, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid rgba(248,0,0,0.15)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
        />
      ))}

      {/* Centre Oracle EBS badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative flex flex-col items-center justify-center w-28 h-28 rounded-full"
          style={{
            background: "linear-gradient(135deg, #1a0000 0%, #2d0000 100%)",
            border: "2px solid rgba(248,0,0,0.4)",
            boxShadow: "0 0 40px rgba(248,0,0,0.2), inset 0 0 20px rgba(248,0,0,0.05)",
          }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/oracle.png"
            alt="Oracle"
            width={64}
            height={32}
            className="h-6 w-auto object-contain mb-1"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="text-white text-xs font-bold tracking-widest" style={{ fontSize: "9px" }}>
            E-BUSINESS SUITE
          </span>
        </motion.div>
      </div>

      {/* Connector lines from centre to orbit nodes */}
      <svg
        className="absolute inset-8 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        style={{ overflow: "visible" }}
      >
        {ORBIT_MODULES.map((mod) => {
          const rad = (mod.angle * Math.PI) / 180;
          const ox = 50 + 50 * Math.cos(rad);
          const oy = 50 + 50 * Math.sin(rad);
          return (
            <motion.line
              key={mod.label}
              x1="50" y1="50"
              x2={ox} y2={oy}
              stroke="rgba(248,0,0,0.15)"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: mod.angle / 360 }}
            />
          );
        })}
      </svg>
    </div>
  );
}

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
        className="absolute top-0 right-0 w-[700px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #E040FB 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, #E040FB 0%, transparent 70%)",
          filter: "blur(60px)",
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
              <span className="text-gray-600">Oracle E-Business Suite</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/oracle.png"
                alt="Oracle"
                width={64}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ color: "#E040FB", background: "rgba(248,0,0,0.08)" }}
              >
                Oracle EBS
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Maximize Your Oracle EBS
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #E040FB 0%, #c000e0 60%, #ff4444 100%)" }}
              >
                Investment & Reduce Run Costs
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Oracle E-Business Suite is the leader in the ERP market for large, small and
              medium enterprises — the most comprehensive suite of integrated global business
              applications that enable organizations to make better decisions, reduce costs
              and increase performance.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Our competence and expertise with a talented pool of resources ensures best
              consulting and services to our clients. We work closely with our alliance
              partner Oracle to ensure we arrive at the best solution options based on
              your requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #E040FB 0%, #c000e0 100%)",
                  boxShadow: "0 8px 32px rgba(248,0,0,0.3)",
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

          {/* Oracle EBS orbit animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          >
            <EBSAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── KEY BENEFITS ─────────────────────────────────────────────────────────────

function KeyBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 bg-gray-50" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {KEY_BENEFITS.map((point, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.06}
              className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5 hover:border-purple-100 hover:shadow-sm transition-all duration-300"
            >
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#E040FB" }} />
              <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ENTERPRISE SOLUTIONS ─────────────────────────────────────────────────────

function EnterpriseSolutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const shades = ["#E040FB", "#c800e8", "#a000c0", "#d020e0", "#f040ff"];

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
            style={{ color: "#E040FB" }}
          >
            Enterprise Solutions
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Oracle EBS{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #E040FB, #c000e0)" }}
            >
              Module Coverage
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Our expertise spans the full Oracle E-Business Suite, enhancing key business
            processes across every major functional area of your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ENTERPRISE_SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            const shade = shades[i % shades.length];
            return (
              <motion.div
                key={sol.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.07}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-purple-100 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${shade}10`,
                    border: `1px solid ${shade}20`,
                  }}
                >
                  <Icon size={20} style={{ color: shade }} />
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

// ─── SERVICE OFFERINGS ────────────────────────────────────────────────────────

function ServiceOfferings() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: "#E040FB" }}
            >
              Service Offerings
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Full Range of Oracle EBS{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #E040FB, #c000e0)" }}
              >
                Services
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              We have the expertise you need. We offer a full range of services from minor
              updates to complete end-to-end solutions, to help you get the most out of
              your investment.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our strong vertical industry experience has equipped our consultants with
              precise knowledge of global business processes, allowing them to deliver
              innovative technology solutions tailored to global and local customer
              requirements.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="space-y-3"
          >
            {SERVICE_OFFERINGS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={0.05 + i * 0.07}
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-purple-100 hover:shadow-sm transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(248,0,0,0.07)",
                      border: "1px solid rgba(248,0,0,0.12)",
                    }}
                  >
                    <Icon size={16} style={{ color: "#E040FB" }} />
                  </div>
                  <div>
                    <p
                      className="text-gray-900 font-semibold text-sm mb-1"
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
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
    <section ref={ref} className="py-24 bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative rounded-2xl p-12 md:p-16 text-center overflow-hidden border border-gray-100 bg-gray-50 shadow-sm"
        >
          <div
            className="absolute top-0 left-0 w-40 h-px"
            style={{ background: "linear-gradient(90deg, #E040FB, transparent)" }}
          />
          <div
            className="absolute top-0 left-0 w-px h-40"
            style={{ background: "linear-gradient(180deg, #E040FB, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-40 h-px"
            style={{ background: "linear-gradient(270deg, #c000e0, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-px h-40"
            style={{ background: "linear-gradient(0deg, #c000e0, transparent)" }}
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
            Find the Perfect Oracle{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #E040FB, #c000e0)" }}
            >
              EBS Services for You
            </span>
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Contact us today and our Oracle EBS certified consultants will design a tailored
            solution that maximizes your ERP investment and reduces run costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #E040FB 0%, #c000e0 100%)",
                boxShadow: "0 8px 32px rgba(248,0,0,0.25)",
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
                <Mail size={14} style={{ color: "#E040FB" }} />
                info@afsainfosystems.com
              </a>
              <a
                href="tel:+919325425236"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Phone size={14} style={{ color: "#E040FB" }} />
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

export default function OracleEBSPage() {
  return (
    <main className="bg-white">
      <Hero />
      <KeyBenefits />
      <EnterpriseSolutions />
      <ServiceOfferings />
      <CTA />
    </main>
  );
}