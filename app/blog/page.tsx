"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Footer } from "../components/footer";

// Define types for the blog data from the API
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

// Fallback data in case the API fails
const fallbackBlogs: Blog[] = [
  {
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
  },
  {
    id: "fallback-2",
    title: "Getting Started with Tensorify: Build Your First AI Workflow",
    slug: "getting-started-with-tensorify",
    type: "TUTORIAL",
    status: "PUBLISHED",
    createdAt: "2023-06-10T10:23:45.000Z",
    updatedAt: "2023-06-15T14:30:22.000Z",
    author: {
      name: "Faisal Ahmed Sifat",
      picture: "https://avatars.githubusercontent.com/u/28746490?v=4",
      profileLink: "https://github.com/faisalahmedsifat",
      designation: "Co-founder, Tensorify.io"
    },
    seo: {
      metaDescription: "Learn how to build your first AI workflow without writing a single line of code using Tensorify's intuitive node-based interface.",
      ogImage: ""
    },
    wordCount: 2250
  }
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        
        // Use our local API endpoint instead of directly calling the external API
        const response = await fetch('/api/blogs');
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch blogs');
        }
        
        const data: BlogData = await response.json();
        
        if (!data.data || !Array.isArray(data.data)) {
          throw new Error('Invalid data format received from API');
        }
        
        // Filter blogs authored by the user
        const myBlogs = data.data.filter(blog => 
          blog.author && blog.author.name === "Faisal Ahmed Sifat"
        );
        
        setBlogs(myBlogs);
        setError(null);
        setUsedFallback(false);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        // Use fallback data if API fails
        setBlogs(fallbackBlogs);
        setUsedFallback(true);
        setError(err instanceof Error ? err.message : 'Using demo content - API unavailable');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to format date in a readable format
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

  // Function to calculate reading time
  const calculateReadingTime = (wordCount: number) => {
    if (!wordCount || isNaN(wordCount)) return '? min read';
    const wordsPerMinute = 200;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 flex flex-col">
      <Navigation />
      <div className="px-4 sm:px-6 pt-16 sm:pt-20 mx-auto space-y-6 sm:space-y-8 max-w-7xl lg:px-8 md:pt-24 lg:pt-32 flex-grow">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-zinc-400">
            Thoughts, insights, and learning about AI, technology, and entrepreneurship.
          </p>
        </div>
        
        <div className="w-full h-px bg-zinc-800" />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-zinc-400">Loading posts...</div>
          </div>
        ) : usedFallback ? (
          <div>
            <div className="bg-amber-900/20 border border-amber-700/30 text-amber-200 px-4 py-3 rounded-md mb-6">
              <p>Could not connect to blog API. Showing sample content.</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 text-xs underline hover:text-amber-100"
              >
                Try Again
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Card key={blog.id}>
                  <Link 
                    href={`https://tensorify.io/blog/${blog.slug}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group h-full"
                  >
                    <article className="flex flex-col h-full p-3 sm:p-4 md:p-6">
                      <div className="flex justify-between mb-3">
                        <span className="px-2 py-1 text-[10px] sm:text-xs bg-indigo-900/60 text-indigo-300 rounded-full">
                          {blog.type || 'ARTICLE'}
                        </span>
                        <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-medium text-zinc-200 group-hover:text-white mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 mb-4 line-clamp-3 flex-grow">
                        {blog.seo?.metaDescription || 'No description available'}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-800 text-xs text-zinc-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{formatDate(blog.updatedAt)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{calculateReadingTime(blog.wordCount)}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-zinc-400">No blog posts found.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Card key={blog.id}>
                <Link 
                  href={`https://tensorify.io/blog/${blog.slug}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group h-full"
                >
                  <article className="flex flex-col h-full p-3 sm:p-4 md:p-6">
                    <div className="flex justify-between mb-3">
                      <span className="px-2 py-1 text-[10px] sm:text-xs bg-indigo-900/60 text-indigo-300 rounded-full">
                        {blog.type || 'ARTICLE'}
                      </span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-medium text-zinc-200 group-hover:text-white mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 mb-4 line-clamp-3 flex-grow">
                      {blog.seo?.metaDescription || 'No description available'}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-800 text-xs text-zinc-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{formatDate(blog.updatedAt)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{calculateReadingTime(blog.wordCount)}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-16 md:mt-24">
        <Footer />
      </div>
    </div>
  );
} 