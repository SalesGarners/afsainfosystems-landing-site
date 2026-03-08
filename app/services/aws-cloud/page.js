"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Server,
  Code2,
  Layers,
  Shield,
  Phone,
  Mail,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CONSULTING_POINTS = [
  "Aligning AWS Cloud strategy with business strategy",
  "Conducting ROI / TCO analysis",
  "Mapping application dependencies",
  "Identifying the most efficient ways to provision and manage AWS Cloud resources",
  "Describing best practices, finding tools and frameworks for detailed AWS road map",
  "Designing, building and managing Amazon cloud infrastructure based on Re-hosting, Re-platforming and Refactoring approaches",
];

const CAPABILITIES = [
  {
    icon: Server,
    title: "Migrations",
    description:
      "A simple migration path to Cloud platforms for any type of on-premise workload.",
    accent: "#FF9900",
  },
  {
    icon: Code2,
    title: "App Modernization",
    description:
      "Legacy app modernization and platform management via a single provider.",
    accent: "#FF6B35",
  },
  {
    icon: Layers,
    title: "Integration",
    description:
      "Integration of existing platforms with Cloud — exploiting IaaS, PaaS and digital services.",
    accent: "#E040FB",
  },
  {
    icon: Shield,
    title: "Managed Services",
    description:
      "Effortlessly control your workloads on your Cloud with our Multi-Cloud Managed Services.",
    accent: "#10B981",
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
      {/* Warm glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #FF9900 0%, transparent 70%)",
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
              <a href="/services/aws-cloud" className="hover:text-gray-600 transition-colors">Services</a>
              <span>/</span>
              <span className="text-gray-600">AWS Cloud</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/aws.png"
                alt="AWS"
                width={64}
                height={64}
                className="h-10 w-auto object-contain"
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ color: "#FF9900", background: "rgba(255,153,0,0.1)" }}
              >
                Amazon Web Services
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Manage Your AWS Cloud
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #FF9900 0%, #FF6B35 100%)",
                }}
              >
                With Reliable Expertise
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              AFSA Infosystems offers end-to-end AWS Cloud Consulting services including Managed
              AWS Services and Infrastructure & Applications Migration. As an AWS Cloud Consulting
              Partner, we help make your business-critical applications equipped for the cloud,
              based on the approach best suited for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #FF9900 0%, #FF6B35 100%)",
                  boxShadow: "0 8px 32px rgba(255,153,0,0.25)",
                }}
              >
                Get Started
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-600 font-medium text-sm rounded-xl hover:bg-gray-50 transition-all"
              >
                Talk to an Architect
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src="/AWS-Cloud-Consultancy-Services-AFSA-Infosystems-1536x864.png"
              alt="AWS Cloud Consulting Services"
              width={760}
              height={428}
              className="w-full rounded-2xl object-cover shadow-xl shadow-orange-100"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── OVERVIEW ─────────────────────────────────────────────────────────────────

function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-3">
              Our Approach
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              AWS Cloud Consulting Services
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #FF9900, #FF6B35)" }}
              >
                That Build Real Value
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              With our Amazon Web Services Cloud Consulting Services, we understand your needs,
              identify solutions that fit your requirements and expose areas of risk along with
              mitigating processes required to reduce or eliminate them.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our AWS certified solutions architects assist you to develop and execute an Amazon
              Web Services Migration strategy that optimizes your applications. Our experience
              helps you seamlessly migrate any part of your applications, computing and storage
              operations to the AWS Cloud from existing infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.12}
          >
            <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-5">
              What We Help You With
            </p>
            <div className="space-y-3">
              {CONSULTING_POINTS.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={0.08 + i * 0.06}
                  className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#FF9900" }}
                  />
                  <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                </motion.div>
              ))}
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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-3">
            Our AWS Capabilities
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            With Expertise in Cloud Platforms —
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF9900, #FF6B35)" }}
            >
              We Help You With
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Our track record of successful Infrastructure Migrations, Cloud Application
            Development and DevOps projects spans more than a dozen client engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.08}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${cap.accent}12`,
                    border: `1px solid ${cap.accent}25`,
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

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative rounded-2xl p-12 md:p-16 text-center overflow-hidden border border-gray-100 bg-white shadow-sm"
        >
          <div
            className="absolute top-0 left-0 w-40 h-px"
            style={{ background: "linear-gradient(90deg, #FF9900, transparent)" }}
          />
          <div
            className="absolute top-0 left-0 w-px h-40"
            style={{ background: "linear-gradient(180deg, #FF9900, transparent)" }}
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
            src="/aws.png"
            alt="AWS"
            width={80}
            height={48}
            className="h-10 w-auto object-contain mx-auto mb-6"
          />
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Find the Perfect{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF9900, #FF6B35)" }}
            >
              AWS Cloud Solution
            </span>
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Contact us today and our certified architects will craft a tailored AWS strategy
            and migration roadmap for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF9900 0%, #FF6B35 100%)",
                boxShadow: "0 8px 32px rgba(255,153,0,0.2)",
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
                <Mail size={14} style={{ color: "#FF9900" }} />
                info@afsainfosystems.com
              </a>
              <a
                href="tel:+919325425236"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Phone size={14} style={{ color: "#FF9900" }} />
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

export default function AWSCloudPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Overview />
      <Capabilities />
      <CTA />
    </main>
  );
}