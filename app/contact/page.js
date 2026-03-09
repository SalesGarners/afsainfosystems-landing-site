"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const OFFICES = [
  {
    label: "Headquarters",
    city: "Pune",
    country: "India",
    address: "AFSA Infosystems Pvt. Ltd., Clover Hills Plaza, Office No. 523, 5th Floor, NIBM-Undri Road, Kondhwa, Pune — 411048",
    phone: "+91 932 542 5236",
    phoneHref: "tel:+919325425236",
    email: "info@afsainfosystems.com",
    emailHref: "mailto:info@afsainfosystems.com",
    accent: "#FF6B35",
    mapHref: "https://maps.google.com/?q=Clover+Hills+Plaza+Kondhwa+Pune",
  },
  {
    label: "Middle East Office",
    city: "Riyadh",
    country: "Saudi Arabia",
    address: "7405 King Fahd Road, AL-Washam, AL-Salhya Computer Center, P.O.Box — 14245 Riyadh, KSA",
    phone: "+966 504 419 225",
    phoneHref: "tel:+966504419225",
    email: "hashim@afsainfosystems.com",
    emailHref: "mailto:hashim@afsainfosystems.com",
    accent: "#E040FB",
    mapHref: "https://maps.google.com/?q=King+Fahd+Road+Riyadh+Saudi+Arabia",
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/afsainfosystems/", color: "#1877F2" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/afsainfosystems", color: "#1DA1F2" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/afsa-infosystems", color: "#0A66C2" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/afsainfosystems/", color: "#E1306C" },
];

const SUBJECTS = [
  "AWS Cloud Consulting",
  "Oracle Cloud",
  "Oracle E-Business Suite",
  "Application Development",
  "Big Data",
  "Training",
  "Careers",
  "General Enquiry",
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

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const mailtoHref = () => {
    const to = "info@afsainfosystems.com";
    const subject = encodeURIComponent(fields.subject || "Enquiry — AFSA Infosystems");
    const body = encodeURIComponent(
      `Name: ${fields.firstName} ${fields.lastName}
Email: ${fields.email}
Phone: ${fields.phone || "—"}
Subject: ${fields.subject}

Message:
${fields.message}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-300 focus:bg-white transition-all duration-200";

  const isValid = fields.firstName && fields.email && fields.subject && fields.message;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            First Name <span className="text-orange-400">*</span>
          </label>
          <input
            type="text"
            placeholder="John"
            value={fields.firstName}
            onChange={set("firstName")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            value={fields.lastName}
            onChange={set("lastName")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Email <span className="text-orange-400">*</span>
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            value={fields.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Phone
          </label>
          <input
            type="tel"
            placeholder="+1 234 567 8900"
            value={fields.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Subject <span className="text-orange-400">*</span>
        </label>
        <select
          value={fields.subject}
          onChange={set("subject")}
          className={inputClass}
        >
          <option value="">Select a subject</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Message <span className="text-orange-400">*</span>
        </label>
        <textarea
          placeholder="Tell us about your project or enquiry..."
          value={fields.message}
          onChange={set("message")}
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      <a
        href={isValid ? mailtoHref() : undefined}
        onClick={!isValid ? (e) => e.preventDefault() : undefined}
        className={`group inline-flex items-center gap-2 w-full justify-center px-7 py-3.5 font-bold text-sm rounded-xl text-white transition-all ${
          isValid ? "hover:opacity-90 cursor-pointer" : "opacity-40 cursor-not-allowed"
        }`}
        style={{
          background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)",
          boxShadow: isValid ? "0 8px 32px rgba(255,107,53,0.25)" : "none",
        }}
      >
        <Send size={14} />
        Send Message
        <ArrowRight size={14} className={isValid ? "group-hover:translate-x-0.5 transition-transform" : ""} />
      </a>

      <p className="text-gray-400 text-xs text-center">
        Clicking Send Message will open your email client with a pre-filled message.
      </p>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-32 pb-8 bg-white overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, #FF6B35 0%, #E040FB 60%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <a href="/" className="hover:text-gray-600 transition-colors">Home</a>
          <span>/</span>
          <span className="text-gray-600">Contact</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{ color: "#FF6B35", background: "rgba(255,107,53,0.08)" }}
          >
            Contact Us
          </span>
          <h1
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Let's Build Something
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #FFCA28 50%, #E040FB 100%)" }}
            >
              Great Together
            </span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Reach out to our team and we will get back to you to discuss how
            AFSA Infosystems can accelerate your digital transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── MAIN CONTACT SECTION ─────────────────────────────────────────────────────

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form — 3 cols */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-8"
          >
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-1"
              style={{ color: "#FF6B35" }}
            >
              Send a Message
            </p>
            <h2
              className="text-2xl font-black text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Contact AFSA Infosystems
            </h2>
            <ContactForm />
          </motion.div>

          {/* Offices — 2 cols */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="lg:col-span-2 space-y-4"
          >
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.12 + i * 0.1}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6"
              >
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block"
                  style={{ color: office.accent, background: `${office.accent}10` }}
                >
                  {office.label}
                </span>
                <h3
                  className="text-gray-900 font-black text-xl mb-1"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {office.city}
                </h3>
                <p className="text-gray-400 text-xs mb-4">{office.country}</p>

                <div className="space-y-3">
                  <a
                    href={office.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-gray-500 text-xs leading-relaxed hover:text-gray-800 transition-colors group"
                  >
                    <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: office.accent }} />
                    <span className="group-hover:underline underline-offset-2">{office.address}</span>
                  </a>
                  <a
                    href={office.phoneHref}
                    className="flex items-center gap-2.5 text-gray-500 text-xs hover:text-gray-800 transition-colors"
                  >
                    <Phone size={13} className="shrink-0" style={{ color: office.accent }} />
                    {office.phone}
                  </a>
                  <a
                    href={office.emailHref}
                    className="flex items-center gap-2.5 text-gray-500 text-xs hover:text-gray-800 transition-colors"
                  >
                    <Mail size={13} className="shrink-0" style={{ color: office.accent }} />
                    {office.email}
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.32}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6"
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: "#FF6B35" }}
              >
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 rounded-xl flex items-center justify-center border border-gray-200 bg-white hover:scale-105 hover:shadow-sm transition-all duration-200"
                    >
                      <Icon size={15} style={{ color: social.color }} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────


// ─── MAP SECTION ──────────────────────────────────────────────────────────────

const MAP_EMBEDS = {
  pune: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0!2d73.8856!3d18.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac9a5a5a5a5%3A0x0!2sClover+Hills+Plaza%2C+NIBM-Undri+Road%2C+Kondhwa%2C+Pune%2C+Maharashtra+411048!5e0!3m2!1sen!2sin!4v1",
  riyadh: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0!2d46.6753!3d24.6877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xb7abcd!2sKing+Fahd+Road%2C+Riyadh%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1",
};

function MapSection() {
  const [active, setActive] = useState("pune");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const offices = [
    { key: "pune", label: "Pune, India", accent: "#FF6B35" },
    { key: "riyadh", label: "Riyadh, KSA", accent: "#E040FB" },
  ];

  return (
    <section ref={ref} className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden"
        >
          {/* Toggle header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "#FF6B35" }}>
                Our Offices
              </p>
              <h2
                className="text-xl font-black text-gray-900"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {active === "pune" ? "Pune, India — Headquarters" : "Riyadh, Saudi Arabia — Middle East Office"}
              </h2>
            </div>

            {/* Toggle pills */}
            <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl p-1">
              {offices.map((o) => (
                <button
                  key={o.key}
                  onClick={() => setActive(o.key)}
                  className="px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200"
                  style={
                    active === o.key
                      ? { background: `linear-gradient(135deg, ${o.accent}, ${o.accent}cc)`, color: "#fff", boxShadow: `0 4px 12px ${o.accent}30` }
                      : { color: "#9ca3af", background: "transparent" }
                  }
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* Map iframe */}
          <div className="relative w-full h-[420px]">
            <AnimatePresence mode="wait">
              <motion.iframe
                key={active}
                src={MAP_EMBEDS[active]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </AnimatePresence>
          </div>

          {/* Address strip */}
          <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {active === "pune" ? (
              <>
                <div className="flex items-start gap-2 text-gray-500 text-xs">
                  <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: "#FF6B35" }} />
                  Clover Hills Plaza, Office No. 523, 5th Floor, NIBM-Undri Road, Kondhwa, Pune — 411048
                </div>
                <a href="tel:+919325425236" className="flex items-center gap-2 text-gray-500 text-xs hover:text-gray-800 transition-colors shrink-0">
                  <Phone size={13} style={{ color: "#FF6B35" }} />
                  +91 932 542 5236
                </a>
              </>
            ) : (
              <>
                <div className="flex items-start gap-2 text-gray-500 text-xs">
                  <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: "#E040FB" }} />
                  7405 King Fahd Road, AL-Washam, AL-Salhya Computer Center, P.O.Box 14245, Riyadh, KSA
                </div>
                <a href="tel:+966504419225" className="flex items-center gap-2 text-gray-500 text-xs hover:text-gray-800 transition-colors shrink-0">
                  <Phone size={13} style={{ color: "#E040FB" }} />
                  +966 504 419 225
                </a>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Hero />
      <ContactSection />
      <MapSection />
    </main>
  );
}