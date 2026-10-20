import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="work" className="py-24 sm:py-28 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-brand-dark font-bold bg-brand-primary px-2.5 py-0.5 rounded">
              01 / Selected Work
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-brand-dark mt-2">
              Featured Products
            </h2>
          </div>
          <p className="text-sm text-zinc-500">
            Designed, architected, and deployed to production.
          </p>
        </div>

        {/* Clean 2x2 Project Grid with Browser Mockup Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-3xl border border-zinc-200 bg-white hover:border-brand-primary hover:shadow-xl hover:shadow-brand-primary/10 overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Browser-style Preview Header */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-brand-primary-soft/60 via-zinc-50/40 to-white border-b border-zinc-100">
                <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-sm ring-1 ring-zinc-900/5">
                  {/* Browser Chrome Bar */}
                  <div className="px-3.5 py-2.5 bg-zinc-50/80 border-b border-zinc-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-zinc-500 bg-white px-3 py-1 rounded-full border border-zinc-200/70 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="truncate max-w-[140px] sm:max-w-[210px] font-medium text-zinc-700">
                        {project.liveUrl.replace('https://', '')}
                      </span>
                    </div>
                    <span className="w-6" />
                  </div>

                  {/* Screenshot Image Frame */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/9] overflow-hidden bg-zinc-50 group/img cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} live application preview`}
                      className="w-full h-full object-cover object-top group-hover/img:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brand-primary/0 group-hover/img:bg-brand-primary/15 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-brand-dark text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-xs inline-flex items-center gap-1.5">
                        <span>Visit Live App</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-brand-primary" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card Info Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Top Badges & Actions */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-primary text-brand-dark border border-brand-primary-border">
                      {project.number}
                    </span>
                    <span className="text-xs font-medium text-zinc-500">
                      {project.kind}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-1.5">
                    {project.apiRepo && (
                      <a
                        href={project.apiRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Backend API Repository"
                        className="px-2.5 py-1 rounded-full text-xs font-mono-code text-zinc-700 bg-zinc-50 border border-zinc-200 hover:border-brand-dark hover:text-brand-dark transition-colors inline-flex items-center gap-1"
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
                      className="px-2.5 py-1 rounded-full text-xs font-mono-code text-zinc-700 bg-zinc-50 border border-zinc-200 hover:border-brand-dark hover:text-brand-dark transition-colors inline-flex items-center gap-1"
                    >
                      <GitBranch className="w-3 h-3" />
                      <span>Frontend</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-dark text-white hover:bg-brand-primary hover:text-brand-dark transition-all inline-flex items-center gap-1"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-brand-dark group-hover:text-black transition-colors">
                  {project.name}
                </h3>

                {/* Concise One-Liner */}
                <p className="mt-2.5 text-sm sm:text-base text-zinc-600 leading-relaxed flex-1">
                  {project.oneLiner}
                </p>

                {/* Architectural Highlight */}
                <div className="mt-5 min-h-[52px] flex items-center font-mono-code text-xs text-brand-primary-text bg-brand-primary-soft border border-brand-primary-border rounded-xl px-3.5 py-2.5">
                  <p className="leading-snug">{project.highlight}</p>
                </div>
              </div>

              {/* Clean Tech Stack Pills */}
              <div className="px-6 sm:px-7 pb-6 pt-0 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-50 border border-zinc-200/80 text-zinc-700"
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
