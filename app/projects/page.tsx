import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

// Static demo project data
const demoProjects = [
  {
    slug: "vocablet",
    title: "Vocablet.io | An AI Powered Vocabulary Learning App",
    description: "A project that brings static keys management to the cloud.",
    date: "2023-08-15",
    published: true,
    views: 1200,
    website: "https://vocablet.io",
  },
  {
    slug: "tensorify",
    title: "Tensorify.io | Prepare, Annotate, Elevate Your AI Workloads",
    description: "An exploration-based game set in a sci-fi universe.",
    date: "2023-06-10",
    published: true,
    views: 980,
    website: "https://vocablet.io",
  },
  {
    slug: "segment3d",
    title: "3D Point Cloud Annotation Software",
    description: "A weather tracking application with real-time data.",
    date: "2023-07-22",
    published: true,
    views: 1500,
  },
  {
    slug: "axpense",
    title: "AXpense | Expense Tracking App",
    description: "A placeholder project with exciting new features.",
    date: "2023-01-15",
    published: true,
    views: 750,
    googleplay:
      "https://play.google.com/store/apps/details?id=com.alphawolfventures.axpense&hl=en",
  },
  {
    slug: "dental-loop-chatbot",
    title: "Dental Loop Chatbot | An Expert System for Dentistry.",
    description: "A cool feature for your existing project.",
    date: "2022-12-05",
    published: true,
    views: 670,
  },
  {
    slug: "jaw-3d-segmentation",
    title: "3D Jaw Segmentation (Domain Adaptation)",
    description: "A cool feature for your existing project.",
    date: "2022-12-05",
    published: true,
    views: 670,
  },
  {
    slug: "jaw-3d-segmentation",
    title: "3D Jaw Segmentation (Domain Adaptation)",
    description: "A cool feature for your existing project.",
    date: "2022-12-05",
    published: true,
    views: 670,
  },
  {
    slug: "3d-tooth-classification",
    title:
      "An Application of 3D Vision Transformers and Explainable AI in Prosthetic Dentistry",
    description: "A cool feature for your existing project.",
    date: "2022-12-05",
    published: true,
    views: 670,
  },
  {
    slug: "bangla-finetuned-model",
    title: "Fine-tuned Bangla LLM",
    description: "A cool feature for your existing project.",
    date: "2022-12-05",
    published: true,
    views: 670,
  },
];

export default function ProjectsPage() {
  const featured = demoProjects.find((project) => project.slug === "tensorify")!;
  const top2 = demoProjects.find((project) => project.slug === "segment3d")!;
  const top3 = demoProjects.find((project) => project.slug === "vocablet")!;
  const sorted = demoProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
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
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      featured.views ?? 0
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={project.views} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
