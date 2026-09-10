"use client";

import React, { useState } from "react";
import { Google_Sans_Flex } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { UsersRound, Menu, X } from "lucide-react";
import { GradientButton } from "./ui/Button";


const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  weight: "variable",
});

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${googleSansFlex.className} fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none`}>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto relative w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-full px-4 py-2.5 sm:px-6 sm:py-3 border border-white/60 shadow-[0_12px_32px_-8px_rgba(0,102,255,0.12)] flex items-center justify-between"
      >
        {/* Logo Icon */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0066ff] to-[#3fa0f7] flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
            <UsersRound className="w-5 h-5 stroke-[2.2]" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <GradientButton className="!px-5 !py-2 !text-xs sm:!text-sm">
            Book a Tutor
          </GradientButton>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 inset-x-4 bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-slate-100 md:hidden flex flex-col gap-4 text-center z-50"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}