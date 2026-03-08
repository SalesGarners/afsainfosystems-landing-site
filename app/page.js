"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Code2,
  BarChart3,
  ArrowRight,
  Phone,
} from "lucide-react";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  {
    label: "Services",
    children: [
      { label: "AWS Cloud", href: "/services/aws-cloud" },
      { label: "Oracle Cloud", href: "/services/oracle-cloud" },
      { label: "Application Development", href: "/services/application-development" },
      { label: "Big Data", href: "/services/big-data" },
      { label: "Oracle E-Business Suite", href: "/services/oracle-ebs" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Training", href: "/training" },
      { label: "Support", href: "/support" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  {
    logo: "/aws.png",
    title: "AWS Cloud",
    description:
      "End-to-end AWS consulting with certified architects. Infrastructure migrations, DevOps pipelines, and cloud-native architecture.",
    accent: "#FF9900",
    tags: ["Migration", "DevOps", "Architecture"],
  },
  {
    logo: "/oracle.png",
    title: "Oracle Cloud",
    description:
      "Global Oracle Managed Service Provider. Migrate, integrate and manage Oracle workloads across a true multi-cloud hybrid environment.",
    accent: "#F80000",
    tags: ["OCI", "Hybrid", "Managed"],
  },
  {
    icon: Code2,
    title: "Application Development",
    description:
      "Custom cloud-native apps, legacy modernization and mobile development. Reduce operational costs by up to 30% with modern architectures.",
    accent: "#FF4081",
    tags: ["Custom Apps", "Mobile", "Modernization"],
  },
  {
    icon: BarChart3,
    title: "Big Data",
    description:
      "Hadoop managed services, data preparation, discovery and analytics. Unlock the full potential of your enterprise data.",
    accent: "#F59E0B",
    tags: ["Hadoop", "Python", "Analytics"],
  },
  {
    logo: "/oracle.png",
    title: "Oracle E-Business Suite",
    description:
      "Full EBS lifecycle — implementations, upgrades, customizations and managed services. Maximize your Oracle investment.",
    accent: "#10B981",
    tags: ["ERP", "Finance", "SCM", "HCM"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "AFSA Infosystems set themselves apart because of their focus on the channel. Their team ensures the success of its partners with excellent support and a simple cloud sizing solution.",
    author: "Frank n Raf Market Research LLP",
    role: "Cloud Partner",
  },
  {
    quote:
      "AFSA Infosystems enables us to focus on our core initiatives and has provided us an agile way to plan and execute migrations. Our success is intrinsically linked to our partnership with them.",
    author: "Maven Biztech",
    role: "Technology Partner",
  },
  {
    quote:
      "Upgrading a failing in-house hosted solution to Cloud Computing was a breeze. The controls accompanied by AFSA's technical staff has solidified our hosted solutions for years to come.",
    author: "SalesGarners Marketing Pvt. Ltd.",
    role: "Enterprise Client",
  },
];

const PARTNERS = [
  { label: "AWS", logo: "/aws.png" },
  { label: "Microsoft Azure", logo: null },
  { label: "Google Cloud", logo: null },
  { label: "Oracle", logo: "/oracle.png" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

// ─── HERO SECTION ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Soft warm gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(ellipse at center, #FF6B35 0%, #E040FB 50%, transparent 75%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, #FFCA28 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold uppercase tracking-widest mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          Leading IT Consulting & Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          Migrate. Modernize.
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 40%, #E040FB 100%)",
            }}
          >
            Transform.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          End-to-end cloud consulting across AWS, Azure, GCP and Oracle. We help global
          enterprises modernize, migrate and manage their most critical workloads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)",
              boxShadow: "0 8px 32px rgba(255,107,53,0.25)",
            }}
          >
            Start Your Cloud Journey
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/services/cloud-computing"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 text-gray-600 font-medium text-sm rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-20 flex items-center justify-center gap-3 flex-wrap"
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest mr-2">
            Trusted Partners
          </span>
          {PARTNERS.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-full bg-gray-50 hover:border-orange-200 hover:text-gray-700 transition-all"
            >
              {p.logo && (
                <Image src={p.logo} alt={p.label} width={16} height={16} className="w-4 h-4 object-contain" />
              )}
              {p.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── SERVICES SECTION ────────────────────────────────────────────────────────

function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-gray-50" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-3">
            What We Do
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Services Built for{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)",
                }}
              >
                Enterprise Scale
              </span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              From cloud migrations to big data analytics — solutions that reduce complexity and
              drive measurable business value.
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
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${service.accent}12`,
                    border: `1px solid ${service.accent}25`,
                  }}
                >
                  {service.logo ? (
                    <Image
                      src={service.logo}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <Icon size={20} style={{ color: service.accent }} />
                  )}
                </div>

                <h3 className="text-gray-900 font-semibold text-base mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md"
                      style={{
                        color: service.accent,
                        background: `${service.accent}10`,
                        border: `1px solid ${service.accent}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: service.accent }}
                >
                  Learn More <ArrowRight size={11} />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS SECTION ────────────────────────────────────────────────────

function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-28 bg-gray-50" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-3">
            Client Stories
          </p>
          <h2
            className="text-4xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Trusted by{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)",
              }}
            >
              Global Enterprises
            </span>
          </h2>
        </motion.div>

        <div className="relative bg-white border border-gray-100 rounded-2xl p-10 md:p-12 min-h-[220px] shadow-sm">
          <div
            className="absolute top-0 left-8 right-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,107,53,0.4), rgba(224,64,251,0.4), transparent)",
            }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: "linear-gradient(135deg, #FF6B35, #E040FB)" }}
                >
                  {TESTIMONIALS[active].author[0]}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">
                    {TESTIMONIALS[active].author}
                  </p>
                  <p className="text-gray-400 text-xs">{TESTIMONIALS[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "24px" : "6px",
                height: "6px",
                background:
                  i === active
                    ? "linear-gradient(90deg, #FF6B35, #E040FB)"
                    : "rgba(0,0,0,0.12)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────

function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative border border-gray-100 rounded-2xl p-12 md:p-16 text-center overflow-hidden shadow-sm"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.04) 0%, rgba(224,64,251,0.04) 100%)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-32 h-px"
            style={{ background: "linear-gradient(90deg, #FF6B35, transparent)" }}
          />
          <div
            className="absolute top-0 left-0 w-px h-32"
            style={{ background: "linear-gradient(180deg, #FF6B35, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-32 h-px"
            style={{ background: "linear-gradient(270deg, #E040FB, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-px h-32"
            style={{ background: "linear-gradient(0deg, #E040FB, transparent)" }}
          />

          <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-4">
            Ready to Transform?
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Let&apos;s Build Your
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)",
              }}
            >
              Cloud Future
            </span>
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Talk to our certified architects and get a tailored roadmap for your cloud
            transformation — at no cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)",
                boxShadow: "0 8px 32px rgba(255,107,53,0.2)",
              }}
            >
              Schedule a Free Consultation
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="tel:+919325425236"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-200 text-gray-600 font-medium text-sm rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all"
            >
              <Phone size={14} style={{ color: "#FF6B35" }} />
              +91 932 542 5236
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── MISSION SECTION ─────────────────────────────────────────────────────────

function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white overflow-hidden" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute w-[420px] h-[420px] rounded-full opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, #FF6B35 0%, #E040FB 60%, transparent 80%)",
                filter: "blur(60px)",
              }}
            />
            <Image
              src="/mission.png"
              alt="Our Mission"
              width={520}
              height={380}
              className="relative z-10 w-full max-w-md object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Content side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.15}
          >
            <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-4">
              Our Mission
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Built on{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)",
                }}
              >
                Passion &amp; Purpose
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We are a team of young, passionate and qualified professionals working on a mission
              to make IT solutions easy, reliable and cost effective for organizations across the
              globe. We are a team obsessed with success in excelling our customers&apos;
              expectations in what we do.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Easy to Adopt", desc: "Seamless onboarding, no steep learning curves." },
                { label: "Reliable by Design", desc: "Built for uptime, resilience and continuity." },
                { label: "Cost Effective", desc: "Maximize ROI with optimized cloud spending." },
                { label: "Customer Obsessed", desc: "Your success is our single measure of performance." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "linear-gradient(135deg, #FF6B35, #E040FB)" }}
                  />
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{item.label}</p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}