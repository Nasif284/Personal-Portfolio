import React from 'react';
import { motion } from 'framer-motion';
import { CORE_STACK } from '../data/portfolioData';

export const SkillsAndArchitecture: React.FC = () => {
  return (
    <section id="stack" className="py-24 sm:py-28 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-blue-600 font-medium">
              02 / Technical Stack
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-slate-900 mt-1">
              Core Technologies
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Tools I use to design, build, and scale production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CORE_STACK.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 sm:p-7 rounded-3xl border border-slate-200 bg-slate-50/50"
            >
              <h3 className="text-sm font-mono-code uppercase tracking-wider text-blue-600 font-semibold mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-slate-200 text-slate-800 hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
