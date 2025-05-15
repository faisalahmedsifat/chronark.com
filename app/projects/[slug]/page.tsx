import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "../../components/nav";
import { projects } from "../projectsData";
import { Card } from "../../components/card";
import { Eye, ArrowLeft, Calendar, Tag } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find related projects (same type, excluding current)
  const relatedProjects = projects
    .filter(p => p.type === project.type && p.slug !== project.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation />
      <div className="px-4 sm:px-6 pt-16 sm:pt-20 mx-auto space-y-6 sm:space-y-8 max-w-7xl lg:px-8 md:space-y-12 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link 
              href="/projects"
              className="group flex items-center hover:text-zinc-200 text-zinc-400 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Back to projects
            </Link>
          </div>
          
          <div className="mt-4 sm:mt-6 flex items-center justify-between">
            <div className="flex space-x-2 sm:space-x-4 text-xs text-zinc-400">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {project.date ? (
                  <time dateTime={new Date(project.date).toISOString()}>
                    {Intl.DateTimeFormat(undefined, {
                      dateStyle: "medium",
                    }).format(new Date(project.date))}
                  </time>
                ) : null}
              </div>
              
              <div className="flex items-center">
                <Tag className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {project.category}
              </div>
            </div>
            
            <div className="flex items-center text-xs text-zinc-400">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {Intl.NumberFormat("en-US", {
                notation: "compact",
              }).format(project.views)} views
            </div>
          </div>
          
          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            {project.title}
          </h1>
          
          <div className="mt-3 sm:mt-6 flex flex-wrap gap-1 sm:gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-800 text-zinc-300 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-3 sm:mt-4 flex items-center space-x-2">
            <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full ${
              project.status === "Active" || project.status === "Deployed" ? "bg-green-900/60 text-green-400" :
              project.status === "Under Construction" || project.status === "In Development" ? "bg-yellow-900/60 text-yellow-400" :
              project.status === "Published" ? "bg-blue-900/60 text-blue-400" :
              "bg-zinc-800 text-zinc-400"
            }`}>
              {project.status}
            </span>
          </div>
        </div>
        
        <div className="w-full h-px bg-zinc-800" />
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mx-auto lg:grid-cols-3">
          <div className="col-span-2 space-y-6 sm:space-y-8">
            {/* Project description */}
            <div className="prose prose-invert max-w-none">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-zinc-300">
                  {project.longDescription || project.description}
                </p>
                
                {project.problem && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">Problem</h3>
                    <p className="text-sm sm:text-base text-zinc-300">{project.problem}</p>
                  </div>
                )}
                
                {project.solution && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">Solution</h3>
                    <p className="text-sm sm:text-base text-zinc-300">{project.solution}</p>
                  </div>
                )}
                
                {project.results && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">Results</h3>
                    <p className="text-sm sm:text-base text-zinc-300">{project.results}</p>
                  </div>
                )}
                
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">Key Features</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-zinc-300">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.keyResponsibilities && project.keyResponsibilities.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">Key Responsibilities</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-zinc-300">
                      {project.keyResponsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.keyBenefits && project.keyBenefits.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">Key Benefits</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-zinc-300">
                      {project.keyBenefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.keyChallenges && project.keyChallenges.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">Key Challenges</h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-zinc-300">
                      {project.keyChallenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.type === "publication" && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">Publication Details</h3>
                    <div className="text-sm sm:text-base text-zinc-300">
                      <p>Published: {project.publishedDate}</p>
                      <p>Journal: {project.journal}</p>
                      {project.doi && (
                        <p>DOI: <Link href={project.doi} className="text-blue-400 hover:text-blue-300 underline" target="_blank">{project.doi}</Link></p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Project links and information */}
            <Card>
              <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                <h3 className="font-semibold text-zinc-100 text-sm sm:text-base">Project Links</h3>
                <div className="space-y-2">
                  {project.website && (
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 sm:p-3 bg-zinc-800 rounded-lg text-zinc-200 hover:bg-zinc-700 transition-colors text-xs sm:text-sm"
                    >
                      <span>Visit Website</span>
                      <span>&rarr;</span>
                    </a>
                  )}
                  
                  {project.googleplay && (
                    <a 
                      href={project.googleplay} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 sm:p-3 bg-zinc-800 rounded-lg text-zinc-200 hover:bg-zinc-700 transition-colors text-xs sm:text-sm"
                    >
                      <span>Google Play Store</span>
                      <span>&rarr;</span>
                    </a>
                  )}
                  
                  {project.modelAvailable && (
                    <a 
                      href={project.modelAvailable} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 sm:p-3 bg-zinc-800 rounded-lg text-zinc-200 hover:bg-zinc-700 transition-colors text-xs sm:text-sm"
                    >
                      <span>Model Repository</span>
                      <span>&rarr;</span>
                    </a>
                  )}
                  
                  {project.doi && (
                    <a 
                      href={project.doi} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 sm:p-3 bg-zinc-800 rounded-lg text-zinc-200 hover:bg-zinc-700 transition-colors text-xs sm:text-sm"
                    >
                      <span>Read Publication</span>
                      <span>&rarr;</span>
                    </a>
                  )}
                  
                  {!project.website && !project.googleplay && !project.modelAvailable && !project.doi && (
                    <p className="text-zinc-500 text-xs sm:text-sm">No links available for this project.</p>
                  )}
                </div>
              </div>
            </Card>
            
            {/* Related projects */}
            {relatedProjects.length > 0 && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-semibold text-zinc-100 text-sm sm:text-base">Related Projects</h3>
                <div className="space-y-3 sm:space-y-4">
                  {relatedProjects.map((relatedProject) => (
                    <Link href={`/projects/${relatedProject.slug}`} key={relatedProject.slug}>
                      <div className="py-1 sm:py-2">
                        <Card>
                          <div className="p-3 sm:p-4 space-y-1 sm:space-y-2">
                            <h4 className="font-medium text-zinc-100 text-sm sm:text-base">{relatedProject.title}</h4>
                            <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2">{relatedProject.description}</p>
                          </div>
                        </Card>
                      </div>
                      
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 