import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-5">
              <Image
                src="/afsa-logo.png"
                alt="AFSA Infosystems"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading IT consulting & services. Cloud computing, application development, big data
              and Oracle solutions for global enterprises.
            </p>
          </div>

          <div>
            <p className="text-gray-700 font-semibold text-xs mb-4 uppercase tracking-wider">
              Services
            </p>
            {[
              { label: "AWS Cloud", href: "/services/aws-cloud" },
              { label: "Oracle Cloud", href: "/services/oracle-cloud" },
              { label: "Application Development", href: "/services/application-development" },
              { label: "Big Data", href: "/services/big-data" },
              { label: "Oracle E-Business Suite", href: "/services/oracle-ebs" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="block text-gray-400 text-sm mb-2.5 hover:text-gray-700 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div>
            <p className="text-gray-700 font-semibold text-xs mb-4 uppercase tracking-wider">
              Company
            </p>
            {[
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Training", href: "/training" },
              { label: "Support", href: "/support" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="block text-gray-400 text-sm mb-2.5 hover:text-gray-700 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div>
            <p className="text-gray-700 font-semibold text-xs mb-4 uppercase tracking-wider">
              Get in Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@afsainfosystems.com"
                className="flex items-start gap-2.5 text-gray-400 text-sm hover:text-gray-700 transition-colors"
              >
                <Mail size={13} className="mt-0.5 shrink-0" style={{ color: "#FF6B35" }} />
                info@afsainfosystems.com
              </a>
              <a
                href="tel:+919325425236"
                className="flex items-start gap-2.5 text-gray-400 text-sm hover:text-gray-700 transition-colors"
              >
                <Phone size={13} className="mt-0.5 shrink-0" style={{ color: "#FF6B35" }} />
                IND: +91 932 542 5236
              </a>
              <a
                href="tel:+966504419225"
                className="flex items-start gap-2.5 text-gray-400 text-sm hover:text-gray-700 transition-colors"
              >
                <Phone size={13} className="mt-0.5 shrink-0" style={{ color: "#FF6B35" }} />
                KSA: +966 504 419 225
              </a>
              <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: "#FF6B35" }} />
                Kondhwa, Pune — 411048
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} AFSA Infosystems Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="text-gray-400 text-xs hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              className="text-gray-400 text-xs hover:text-gray-600 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}