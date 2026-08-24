"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../../public/logo.png";

const allLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-black text-white mx-4 lg:mx-7 my-4 rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-8">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <Link href="/" className="inline-flex items-center text-white">
              <Image src={logo} width={54} height={54} alt="OHA Design Workshop" className="opacity-90" />
            </Link>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
              {allLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-150 ${
                    pathname === link.href ? "text-white/80" : "hover:text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/10 pt-4 text-[11px] tracking-[0.12em] uppercase text-white/35">
            <p>© {new Date().getFullYear()} OHA</p>
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/OHArchitects/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white/80 transition-colors duration-200">
                <FaFacebookF className="w-4 h-4" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white/80 transition-colors duration-200">
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white/80 transition-colors duration-200">
                <FaLinkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
