"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "../../public/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Portfolio", href: "/portfolio" },
];

const workItems = [
  { label: "Residential Design", href: "/work/residential" },
  { label: "Sustainable Design", href: "/work/sustainable" },
  { label: "Hospitality Architecture", href: "/work/hospitality" },
  { label: "Interior Design", href: "/work/interiors" },
  { label: "Commercial Design", href: "/work/commercial" },
  { label: "Education Design", href: "/work/education" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const linkColor = (href: string) =>
    pathname === href
      ? "text-gray-900"
      : "text-gray-500 hover:text-gray-900";

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between px-5 md:px-8 py-4 bg-white border-b border-gray-100">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} width={58} height={58} alt="OHA Design Workshop" />
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-9">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`text-[13px] tracking-[0.06em] font-light transition-colors duration-200 ${linkColor(item.href)}`}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* Services dropdown */}
        <li
          className="relative"
          onMouseEnter={() => {
            if (closeTimeout) clearTimeout(closeTimeout);
            setIsWorkOpen(true);
          }}
          onMouseLeave={() => {
            const t = setTimeout(() => setIsWorkOpen(false), 150);
            setCloseTimeout(t);
          }}
        >
          <button
            className={`flex items-center gap-1 text-[13px] tracking-[0.06em] font-light transition-colors duration-200 ${
              pathname.startsWith("/work") ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Services
            <ChevronDown
              size={13}
              strokeWidth={1.5}
              className={`transition-transform duration-200 ${isWorkOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown — flat, no rounded corners */}
          {isWorkOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 py-1 shadow-sm">
              {workItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-5 py-3 text-[13px] transition-colors duration-150 ${
                    pathname === item.href
                      ? "text-gray-900 bg-gray-50"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </li>
      </ul>

      {/* Desktop CTA */}
      <Link
        href="/contact"
        className="hidden lg:flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-[11px] font-mono tracking-[0.2em] uppercase text-white transition-colors duration-200 hover:bg-gray-800"
      >
        Enquire
        <ArrowUpRight size={12} strokeWidth={1.5} />
      </Link>

      {/* Mobile hamburger */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <button className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200">
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[85vw] max-w-sm p-0 border-l border-gray-100">
          <div className="flex flex-col h-full">
            {/* Mobile header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-400">
                Menu
              </span>
            </div>

            {/* Mobile links */}
            <ul className={`flex flex-col px-7 py-4 flex-1 transition-all duration-200 ${mobileServicesOpen ? "gap-0.5" : "gap-1"}`}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block transition-all duration-200 ${
                      mobileServicesOpen ? "py-1.5 text-lg" : "py-3 text-[22px]"
                    } font-light tracking-tight ${
                      pathname === item.href ? "text-gray-900" : "text-gray-400 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="mt-1">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className={`flex w-full items-center justify-between text-left font-light tracking-tight text-gray-400 transition-all duration-200 hover:text-gray-900 ${
                    mobileServicesOpen ? "py-1.5 text-lg" : "py-3 text-[22px]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    } text-gray-400`}
                  />
                </button>

                {mobileServicesOpen && (
                  <ul className="mt-1 space-y-0.5 overflow-hidden transition-all duration-200">
                    {workItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-1.5 text-[15px] font-light leading-snug transition-colors duration-150 ${
                            pathname === item.href ? "text-gray-900" : "text-gray-400 hover:text-gray-900"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="px-7 py-6 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-[11px] font-mono tracking-[0.2em] uppercase text-white transition-colors duration-200 hover:bg-gray-800"
              >
                Start a Project
                <ArrowUpRight size={12} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
