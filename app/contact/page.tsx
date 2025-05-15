"use client";
import { Github, Mail, Twitter, Linkedin, Send, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/faisalahmedsifat",
    label: "Connect Professionally",
    handle: "faisalahmedsifat",
    color: "text-blue-400",
    hoverColor: "group-hover:text-blue-300",
    description: "Let's connect professionally and explore potential collaborations."
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/faisalahmedsifat",
    label: "View Code & Projects",
    handle: "faisalahmedsifat",
    color: "text-purple-400",
    hoverColor: "group-hover:text-purple-300",
    description: "Check out my open-source contributions and personal projects."
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:hello@theentrepreneuw.com",
    label: "Email",
    handle: "hello@theentrepreneuw.com",
    color: "text-green-400",
    hoverColor: "group-hover:text-green-300",
    description: "Reach out directly for business inquiries or collaborations."
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-4 sm:px-6 pt-16 sm:pt-20 mx-auto space-y-6 max-w-5xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Get in Touch
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            I'm always open to discussing new projects, partnerships, or opportunities to collaborate on innovative AI solutions.
          </p>
        </div>
        
        <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {socials.map((social, i) => (
            <Card key={i}>
              <Link
                href={social.href}
                target="_blank"
                className="p-4 sm:p-6 md:p-8 relative flex flex-col items-center gap-3 sm:gap-4 duration-700 group h-full"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className={`relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-sm duration-1000 border rounded-full ${social.color} group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange`}>
                  {social.icon}
                </span>
                
                <div className="z-10 flex flex-col items-center text-center">
                  <span className="text-base sm:text-lg md:text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                    {social.handle}
                  </span>
                  <span className="mt-1 sm:mt-2 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {social.label}
                  </span>
                  <p className="mt-2 sm:mt-3 text-xs text-zinc-400 group-hover:text-zinc-300 max-w-xs">
                    {social.description}
                  </p>
                </div>
                
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" />
                </div>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 border-t border-zinc-800 pt-8 sm:pt-12 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-medium text-zinc-200 mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-sm text-zinc-400 mb-6">
              Whether you're looking to develop an AI-powered solution, need technical consultation, or want to explore a partnership opportunity, I'd love to hear from you.
            </p>
            <Link 
              href="mailto:hello@theentrepreneuw.com" 
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-lg transition-colors duration-300 text-sm sm:text-base"
            >
              <Send className="w-4 h-4" />
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
