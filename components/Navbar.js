"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

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

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500"
        style={{ paddingTop: scrolled ? "12px" : "0px" }}
      >
        <nav
          className={cn(
            "transition-all duration-500 w-full outline-none",
            scrolled
              ? "max-w-5xl mx-4 rounded-2xl bg-white/92 backdrop-blur-xl shadow-xl shadow-gray-300/40"
              : "max-w-full bg-transparent"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "px-5 h-14" : "px-6 h-16 max-w-7xl mx-auto"
            )}
          >
            <a href="/">
              <Image
                src="/afsa-logo.png"
                alt="AFSA Infosystems"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
                priority
              />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100/60">
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-200 text-gray-400",
                          activeDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 min-w-[220px] bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="flex items-center px-4 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all"
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100/60"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center">
              <a
                href="/contact"
                className="px-5 py-2 text-sm font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)" }}
              >
                Get Started
              </a>
            </div>

            <button
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 overflow-y-auto lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-gray-100 py-4">
                {link.children ? (
                  <>
                    <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-orange-500">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="/contact"
              className="mt-6 block w-full text-center py-3 font-bold rounded-xl text-sm text-white"
              style={{ background: "linear-gradient(135deg, #FF6B35 0%, #E040FB 100%)" }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}