import Link from "next/link";
import { Eye } from "lucide-react";
import { Project } from "./projectsData";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-3 sm:p-4 md:p-6">
        <div className="flex justify-between gap-2 items-center">
          <div className="flex flex-col">
            <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
              {project.date ? (
                <time dateTime={new Date(project.date).toISOString()}>
                  {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                    new Date(project.date)
                  )}
                </time>
              ) : (
                <span>SOON</span>
              )}
            </span>
            <span className="text-xs text-zinc-400 mt-0.5 sm:mt-1">{project.category}</span>
          </div>
          <span className="text-zinc-500 text-xs flex items-center gap-1">
            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(project.views)}
          </span>
        </div>
        <h2 className="z-20 text-lg sm:text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display mt-1.5 sm:mt-2">
          {project.title}
        </h2>
        <p className="z-20 mt-2 sm:mt-4 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
          {project.technologies?.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-800 text-zinc-300 rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-800 text-zinc-300 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </article>
    </Link>
  );
};
