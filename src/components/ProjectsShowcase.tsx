import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="work" className="py-24 sm:py-28 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-blue-600 font-medium">
              01 / Selected Work
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-slate-900 mt-1">
              Featured Products
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Designed, architected, and deployed to production.
          </p>
        </div>

        {/* Clean 2x2 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-3xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/5 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Card Top Bar */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono-code text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200/60">
                      {project.number}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {project.kind}
                    </span>
                  </div>

                  {/* Direct Live & Repo Buttons */}
                  <div className="flex items-center gap-1.5">
                    {project.apiRepo && (
                      <a
                        href={project.apiRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Backend API Repository"
                        className="px-2.5 py-1 rounded-full text-xs font-mono-code text-slate-600 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                      >
                        <GitBranch className="w-3 h-3" />
                        <span>Backend</span>
                      </a>
                    )}
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Frontend Client Repository"
                      className="px-2.5 py-1 rounded-full text-xs font-mono-code text-slate-600 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      <GitBranch className="w-3 h-3" />
                      <span>Frontend</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white group-hover:bg-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>

                {/* Concise One-Liner */}
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.oneLiner}
                </p>

                {/* Architectural Highlight Line */}
                <p className="mt-4 text-xs font-mono-code text-blue-700 bg-blue-50/80 border border-blue-100 rounded-xl px-3.5 py-2.5">
                  {project.highlight}
                </p>
              </div>

              {/* Clean Tech Pills */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-slate-200/90 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
