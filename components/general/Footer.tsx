"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const allLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/work/residential", label: "Residential" },
  { href: "/work/sustainable", label: "Sustainable" },
  { href: "/work/hospitality", label: "Hospitality" },
  { href: "/work/interiors", label: "Interiors" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-black text-white mx-4 lg:mx-7 my-4 rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-10 py-10">

        {/* Single row: logo — links — social */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <Link href="/">
            <Image
              src={logo}
              width={40}
              height={40}
              alt="OHA Design Workshop"
              className="brightness-0 invert opacity-70"
            />
          </Link>

          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] tracking-wide transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-white/70"
                    : "text-white/30 hover:text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/25 hover:text-white/70 transition-colors duration-200">
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/25 hover:text-white/70 transition-colors duration-200">
              <FaLinkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom: copyright + address */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mt-10 pt-6 border-t border-white/[0.06]">
          <p className="text-[11px] font-mono text-white/20">
            © {new Date().getFullYear()} OHA Design Workshop
          </p>
          <p className="text-[11px] font-mono text-white/15">
            Level 10, 122 Arthur Street, North Sydney NSW 2060
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
