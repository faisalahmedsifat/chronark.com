import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { projects } from "./projects/projectsData";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" }
];

export default function Home() {
  // Get featured projects
  const featuredProjects = projects
    .filter(project => project.featured && project.published)
    .slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-6 sm:my-8 md:my-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 sm:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3 sm:py-3.5 px-0.5 z-10 text-3xl sm:text-4xl md:text-6xl lg:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text ">
        Faisal Ahmed Sifat
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 sm:my-10 md:my-12 text-center animate-fade-in max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-4">
        <h2 className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-6">
          Founder & CEO {" @"}
          <Link
            target="_blank"
            href="https://alphawolfventures.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            AlphaWolf Ventures
          </Link>{" "}
          | AI Entrepreneur & Technical Product Leader
        </h2>
        
        <p className="text-xs sm:text-sm text-zinc-400 mb-6 sm:mb-8">
          Pioneering the future of AI development with {" "}
          <Link
            target="_blank"
            href="https://tensorify.io"
            className="underline duration-500 hover:text-zinc-300"
          >
            Tensorify.io
          </Link>
          {" "} — a no-code platform that transforms how teams build, deploy, and scale AI systems. 
          Empowering developers and businesses to leverage cutting-edge machine learning without the complexity.
        </p>
        
        {/* Featured Projects Section */}
        <div className="mt-8 md:mt-12">
          <h3 className="text-zinc-300 text-base sm:text-lg mb-3 sm:mb-4 font-medium">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {featuredProjects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className="group p-3 sm:p-4 border border-zinc-800 rounded-lg hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <h4 className="text-zinc-200 text-sm sm:text-base font-medium mb-1 sm:mb-2 group-hover:text-white">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-400 flex-grow mb-1 sm:mb-2">
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...` 
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 sm:py-1 bg-zinc-800 text-zinc-400 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 sm:py-1 bg-zinc-800 text-zinc-400 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 sm:mt-6">
            <Link href="/projects" className="text-xs sm:text-sm text-zinc-400 hover:text-zinc-300 underline">
              View all projects →
            </Link>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-10 md:mt-16 border-t border-zinc-800 pt-6 md:pt-8">
          <h3 className="text-zinc-300 text-base sm:text-lg mb-3 sm:mb-4 font-medium">Core Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["AI/ML", "Product Leadership", "System Architecture","React/Next.js", "Python", "PyTorch", "Node.js", "Full-Stack Development", "Mobile Application Development"].map((skill) => (
              <span key={skill} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-zinc-800/70 text-zinc-300 text-[10px] sm:text-xs rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
