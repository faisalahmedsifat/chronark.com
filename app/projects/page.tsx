import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";
import { projects } from "./projectsData";
import { Footer } from "../components/footer";

export default function ProjectsPage() {
  // Find featured projects
  const featured = projects.find(project => project.slug === "tensorify")!;
  const top2 = projects.find(project => project.slug === "segment3d")!;
  const top3 = projects.find(project => project.slug === "vocablet")!;
  
  // Group other projects by type
  const commercialProjects = projects.filter(p => 
    p.type === "commercial" && 
    p.published
  );
  
  const professionalProjects = projects.filter(p => 
    p.type === "professional" && 
    p.published
  );
  
  const researchProjects = projects.filter(p => 
    p.type === "research" && 
    p.published
  );
  
  const publications = projects.filter(p => 
    p.type === "publication" && 
    p.published
  );
  
  // Combine all non-featured projects for the grid display
  const otherProjects = [...commercialProjects, ...professionalProjects, ...researchProjects, ...publications]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />
      <div className="px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-32 mx-auto space-y-6 sm:space-y-8 md:space-y-16 max-w-7xl lg:px-8 flex-grow">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 sm:gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-3 sm:p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <div className="text-xs text-zinc-100">
                      {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <span className="text-xs text-zinc-400 mt-0.5 sm:mt-1">{featured.category}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(featured.views)}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                  {featured.technologies?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-800 text-zinc-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-8">
                  <p className="hidden text-sm sm:text-base text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-4 sm:gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>
        
        {/* Categories section */}
        <div className="space-y-6 sm:space-y-8">
          {commercialProjects.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">Commercial Products</h3>
              <div className="hidden w-full h-px my-2 sm:my-4 md:block bg-zinc-800" />
              <div className="grid grid-cols-1 gap-3 sm:gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                {commercialProjects.map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {professionalProjects.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">Professional Projects</h3>
              <div className="hidden w-full h-px my-2 sm:my-4 md:block bg-zinc-800" />
              <div className="grid grid-cols-1 gap-3 sm:gap-4 mx-auto lg:mx-0 md:grid-cols-2">
                {professionalProjects.map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ))}
              </div>
            </div>
          )}

          {publications.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">Publications</h3>
              <div className="hidden w-full h-px my-2 sm:my-4 md:block bg-zinc-800" />
              <div className="grid grid-cols-1 gap-3 sm:gap-4 mx-auto lg:mx-0 md:grid-cols-2">
                {publications.map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {researchProjects.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">Research Projects</h3>
              <div className="hidden w-full h-px my-2 sm:my-4 md:block bg-zinc-800" />
              <div className="grid grid-cols-1 gap-3 sm:gap-4 mx-auto lg:mx-0 md:grid-cols-2">
                {researchProjects.map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ))}
              </div>
            </div>
          )}
         
        </div>
      </div>
      
      <div className="mt-16 md:mt-24">
        <Footer />
      </div>
    </div>
  );
}
