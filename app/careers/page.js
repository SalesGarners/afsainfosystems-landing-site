"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  ChevronDown,
  X,
  CheckCircle2,
  Mail,
  Send,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const OPENINGS = [
  {
    id: 1,
    title: "Oracle EBS Functional Consultant",
    department: "Oracle Practice",
    location: "Pune, India",
    type: "Full-time",
    experience: "3 – 6 years",
    accent: "#E040FB",
    tags: ["Oracle EBS", "Finance", "SCM", "Implementation"],
    description:
      "We are looking for an experienced Oracle EBS Functional Consultant to join our Oracle practice. You will work on end-to-end EBS implementations, roll-outs and upgrades for global enterprise clients.",
    responsibilities: [
      "Lead Oracle EBS Finance or SCM module implementations and roll-outs",
      "Conduct business process workshops and gather functional requirements",
      "Prepare functional design documents, test scripts and user training material",
      "Work closely with technical teams on customizations and integrations",
      "Provide post go-live support and managed services",
    ],
    techStack: ["Oracle EBS R12", "Oracle Financial Management", "Oracle SCM", "Oracle HCM", "SQL"],
    values: [
      "Customer-first mindset",
      "Ownership and accountability",
      "Continuous learning",
      "Collaboration over silos",
    ],
  },
  {
    id: 2,
    title: "AWS Cloud Solutions Architect",
    department: "Cloud Practice",
    location: "Pune, India / Remote",
    type: "Full-time",
    experience: "4 – 8 years",
    accent: "#FF9900",
    tags: ["AWS", "Cloud Architecture", "DevOps", "Migration"],
    description:
      "We are hiring an AWS Cloud Solutions Architect to help our clients design and execute cloud migration and modernization strategies. You will work with AWS certified engineers on complex cloud architectures.",
    responsibilities: [
      "Design and architect AWS cloud solutions tailored to client requirements",
      "Lead infrastructure migration projects — lift-and-shift, re-platform and refactor",
      "Build CI/CD pipelines, IaC templates and DevOps automation",
      "Conduct ROI/TCO analysis and AWS cloud strategy workshops",
      "Mentor junior engineers and support pre-sales technical discussions",
    ],
    techStack: ["AWS", "Terraform", "Docker", "Kubernetes", "Python", "CI/CD"],
    values: [
      "Engineering excellence",
      "Bias for action",
      "Transparency and trust",
      "Impact-driven work",
    ],
  },
  {
    id: 3,
    title: "Big Data Engineer",
    department: "Big Data Practice",
    location: "Pune, India",
    type: "Full-time",
    experience: "2 – 5 years",
    accent: "#F59E0B",
    tags: ["Hadoop", "Python", "Spark", "Data Engineering"],
    description:
      "We are looking for a Big Data Engineer to join our data practice and help enterprise clients unlock the value in their data through Hadoop-based solutions and modern data pipelines.",
    responsibilities: [
      "Design and build Hadoop-based data pipelines and batch-processing workflows",
      "Develop data ingestion, transformation and analytics solutions",
      "Optimize Hadoop cluster performance and manage data availability",
      "Collaborate with analytics teams to deliver business intelligence solutions",
      "Support data discovery, preparation and reporting use cases",
    ],
    techStack: ["Apache Hadoop", "Apache Spark", "Python", "Hive", "HDFS", "SQL"],
    values: [
      "Curiosity and experimentation",
      "Data-driven decision making",
      "Team ownership",
      "Quality over speed",
    ],
  },
];

const COMPANY_VALUES = [
  "Customer-first mindset in everything we do",
  "Young, passionate team obsessed with excellence",
  "Global exposure — clients across India, Middle East and beyond",
  "Work on real enterprise-scale cloud and ERP projects",
  "Continuous learning culture with access to certifications",
  "Collaborative environment where your ideas matter",
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

function buildMailtoLink(job) {
  const to = "info@afsainfosystems.com";
  const subject = encodeURIComponent(`Job Application — ${job.title}`);
  const body = encodeURIComponent(
    `Hi AFSA Infosystems Team,

I am applying for the position of ${job.title} (${job.department}).

--- APPLICANT DETAILS ---

Full Name:
Email:
Phone:
Location:
LinkedIn / Portfolio:

--- EXPERIENCE ---

Total Experience:
Relevant Experience:

--- TECH STACK ---
${job.techStack.map((t) => `• ${t}: [Years of experience]`).join("\n")}

--- BRIEF COVER NOTE ---
[Tell us why you're a great fit for this role and what excites you about AFSA Infosystems]

--- RESUME ---
[Please attach your resume to this email]

Looking forward to hearing from you.

Regards,
[Your Name]`
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

// ─── JOB CARD ─────────────────────────────────────────────────────────────────

function JobCard({ job, index, inView }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.1}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-300"
    >
      {/* Card header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ color: job.accent, background: `${job.accent}10` }}
              >
                {job.department}
              </span>
            </div>
            <h3
              className="text-gray-900 font-bold text-lg"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {job.title}
            </h3>
          </div>
          <a
            href={buildMailtoLink(job)}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 font-bold text-xs rounded-xl text-white transition-opacity hover:opacity-90"
            style={{
              background: `linear-gradient(135deg, ${job.accent}, ${job.accent}cc)`,
              boxShadow: `0 4px 16px ${job.accent}30`,
            }}
          >
            <Send size={11} />
            Apply
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <MapPin size={11} style={{ color: job.accent }} />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase size={11} style={{ color: job.accent }} />
            {job.type}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} style={{ color: job.accent }} />
            {job.experience}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: job.accent }}
        >
          {expanded ? "Show less" : "View full details"}
          <ChevronDown
            size={13}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Expandable details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50">
              {/* Responsibilities */}
              <div className="md:col-span-1">
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={{ color: job.accent }}
                >
                  Responsibilities
                </p>
                <ul className="space-y-2">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-xs leading-relaxed">
                      <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: job.accent }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={{ color: job.accent }}
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg font-medium text-white"
                      style={{ background: `${job.accent}cc` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={{ color: job.accent }}
                >
                  What We Value
                </p>
                <ul className="space-y-2">
                  {job.values.map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-xs leading-relaxed">
                      <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: job.accent }} />
                      {v}
                    </li>
                  ))}
                </ul>

                <a
                  href={buildMailtoLink(job)}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 font-bold text-xs rounded-xl text-white transition-opacity hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${job.accent}, ${job.accent}bb)`,
                    boxShadow: `0 4px 16px ${job.accent}30`,
                  }}
                >
                  <Mail size={12} />
                  Apply via Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, #FF6B35 0%, #E040FB 60%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <a href="/" className="hover:text-gray-600 transition-colors">Home</a>
          <span>/</span>
          <span className="text-gray-600">Careers</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: "#FF6B35", background: "rgba(255,107,53,0.08)" }}
            >
              Careers at AFSA
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Build Your Career
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)" }}
              >
                With Global Impact
              </span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Join a team of young, passionate professionals working on real enterprise-scale
              cloud, Oracle and big data projects for clients across India, the Middle East
              and beyond.
            </p>
            <a
              href="#openings"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)",
                boxShadow: "0 8px 32px rgba(255,107,53,0.25)",
              }}
            >
              View Open Roles
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-5"
                style={{ color: "#FF6B35" }}
              >
                Why AFSA
              </p>
              <div className="space-y-3">
                {COMPANY_VALUES.map((val, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#FF6B35" }} />
                    <p className="text-gray-600 text-sm leading-relaxed">{val}</p>
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

// ─── OPENINGS ─────────────────────────────────────────────────────────────────

function Openings() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="openings" ref={ref} className="py-24 bg-gray-50" style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#FF6B35" }}>
            Current Openings
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Open{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #FF6B35, #E040FB)" }}
              >
                Positions
              </span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Click Apply to open a pre-filled email with your resume and tech stack.
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {OPENINGS.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OPEN APPLICATION ─────────────────────────────────────────────────────────

function OpenApplication() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const mailto = `mailto:info@afsainfosystems.com?subject=${encodeURIComponent("Open Application — AFSA Infosystems")}&body=${encodeURIComponent(
    `Hi AFSA Infosystems Team,

I would like to submit an open application to join your team.

--- APPLICANT DETAILS ---

Full Name:
Email:
Phone:
Location:

--- ROLE OF INTEREST ---
[Cloud / Oracle EBS / Big Data / Application Development / Other]

--- EXPERIENCE ---

Total Experience:
Tech Stack:
[List your key technologies and years of experience]

--- BRIEF NOTE ---
[Tell us about yourself and what you are looking for]

--- RESUME ---
[Please attach your resume to this email]

Regards,
[Your Name]`
  )}`;

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-gray-50 border border-gray-100 rounded-2xl p-12 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-40 h-px" style={{ background: "linear-gradient(90deg, #FF6B35, transparent)" }} />
          <div className="absolute top-0 left-0 w-px h-40" style={{ background: "linear-gradient(180deg, #FF6B35, transparent)" }} />
          <div className="absolute bottom-0 right-0 w-40 h-px" style={{ background: "linear-gradient(270deg, #E040FB, transparent)" }} />
          <div className="absolute bottom-0 right-0 w-px h-40" style={{ background: "linear-gradient(0deg, #E040FB, transparent)" }} />

          <h2
            className="text-2xl md:text-3xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Don't See a Role That Fits?
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6B35, #E040FB)" }}
            >
              Send an Open Application
            </span>
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            We are always looking for talented people. Send us your resume and tell us
            what you are passionate about — we will be in touch.
          </p>
          <a
            href={mailto}
            className="group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)",
              boxShadow: "0 8px 32px rgba(255,107,53,0.2)",
            }}
          >
            <Mail size={15} />
            Send Open Application
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Openings />
      <OpenApplication />
    </main>
  );
}