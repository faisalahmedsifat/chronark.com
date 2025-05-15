"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const footerNavItems = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: <Github className="h-4 w-4" />, href: "https://github.com/faisalahmedsifat", label: "GitHub" },
  { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/faisalahmedsifat", label: "LinkedIn" },
  { icon: <Mail className="h-4 w-4" />, href: "mailto:hello@theentrepreneuw.com", label: "Email" },
];

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back-to-top when scrolled down 300px
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800 bg-gradient-to-b from-zinc-900/0 to-zinc-900/50 mt-auto">
      <div className="container max-w-5xl mx-auto px-4 py-6 sm:py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              © {currentYear} Faisal Ahmed Sifat. All rights reserved.
            </p>
            <p className="text-[10px] text-zinc-500 mt-1">
              AI Entrepreneur & Technical Product Leader
            </p>
          </div>
          
          <nav className="flex items-center justify-center">
            <ul className="flex items-center gap-4 sm:gap-6">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-[10px] sm:text-xs text-zinc-500">
          <p>Built with Next.js, React, and TailwindCSS</p>
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300 transition-all duration-300 animate-fade-in z-50"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </footer>
  );
} 