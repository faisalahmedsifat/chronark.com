"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";
import { projects } from "./projects/projectsData";
import { Calendar, Clock } from "lucide-react";
import { Footer } from "./components/footer";

// Define Blog interfaces from blog page
interface Blog {
  id: string;
  title: string;
  slug: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    picture: string;
    profileLink: string;
    designation: string;
  };
  seo: {
    metaDescription: string;
    ogImage: string;
  };
  wordCount: number;
}

interface BlogData {
  status: string;
  data: Blog[];
}

// Fallback blog for display if API fails
const fallbackBlog: Blog = {
  id: "fallback-1",
  title: "AI Explained: A Beginner's Guide to How Artificial Intelligence Really Works",
  slug: "how-does-ai-work",
  type: "ARTICLE",
  status: "PUBLISHED",
  createdAt: "2023-05-04T17:53:37.832Z",
  updatedAt: "2023-05-13T02:51:11.756Z",
  author: {
    name: "Faisal Ahmed Sifat",
    picture: "https://avatars.githubusercontent.com/u/28746490?v=4",
    profileLink: "https://github.com/faisalahmedsifat",
    designation: "Co-founder, Tensorify.io"
  },
  seo: {
    metaDescription: "Discover how AI actually works in this beginner-friendly guide. Learn about machine learning, deep learning, and real-world AI applications without the technical jargon.",
    ogImage: ""
  },
  wordCount: 3098
};

// Navigation items for the home page
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

export default function Home() {
  // Get featured projects
  const featuredProjects = projects
    .filter(project => project.featured && project.published)
    .slice(0, 3);
    
  // State for blogs
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        
        const response = await fetch('/api/blogs');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const data: BlogData = await response.json();
        
        if (!data.data || !Array.isArray(data.data)) {
          throw new Error('Invalid data format received from API');
        }
        
        // Filter blogs authored by the user and take the most recent 2
        const myBlogs = data.data
          .filter(blog => blog.author && blog.author.name === "Faisal Ahmed Sifat")
          .slice(0, 2);
        
        setRecentBlogs(myBlogs);
        setError(null);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        // Use fallback data if API fails
        setRecentBlogs([fallbackBlog]);
        setError(err instanceof Error ? err.message : 'Using demo content - API unavailable');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format date helper function
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return 'Invalid date';
    }
  };

  // Calculate reading time helper function
  const calculateReadingTime = (wordCount: number) => {
    if (!wordCount || isNaN(wordCount)) return '? min read';
    const wordsPerMinute = 200;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      
      {/* Custom navigation for home page with animation sequence */}
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
      
      <h1 className="py-3 sm:py-3.5 px-0.5 z-10 text-3xl sm:text-4xl md:text-6xl lg:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
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
        
        {/* Featured Blog Posts Section */}
        <div className="mt-10 md:mt-16 border-t border-zinc-800 pt-6 md:pt-8">
          <h3 className="text-zinc-300 text-base sm:text-lg mb-3 sm:mb-4 font-medium">Recent Writing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {isLoading ? (
              <div className="p-3 sm:p-4 border border-zinc-800 rounded-lg col-span-2 text-center">
                <p className="text-xs text-zinc-400">Loading recent articles...</p>
              </div>
            ) : recentBlogs.length === 0 ? (
              <div className="p-3 sm:p-4 border border-zinc-800 rounded-lg col-span-2 text-center">
                <p className="text-xs text-zinc-400">No recent articles found.</p>
              </div>
            ) : (
              recentBlogs.map((blog) => (
                <Link 
                  key={blog.id}
                  href={`https://tensorify.io/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 border border-zinc-800 rounded-lg hover:bg-zinc-800/50 transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] px-2 py-0.5 bg-indigo-900/60 text-indigo-300 rounded-full">
                        {blog.type || 'ARTICLE'}
                      </span>
                    </div>
                    <h4 className="text-zinc-200 text-sm sm:text-base font-medium mb-1 sm:mb-2 group-hover:text-white line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-xs text-zinc-400 flex-grow mb-1 sm:mb-2 line-clamp-2">
                      {blog.seo?.metaDescription || 'No description available'}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-zinc-800 text-xs text-zinc-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{formatDate(blog.updatedAt)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{calculateReadingTime(blog.wordCount)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div className="mt-4 sm:mt-6">
            <Link href="/blog" className="text-xs sm:text-sm text-zinc-400 hover:text-zinc-300 underline">
              Read all articles →
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
      
      <div className="w-full mt-16 md:mt-24 animate-fade-in">
        <Footer />
      </div>
    </div>
  );
}
