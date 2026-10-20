import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  Download,
  Copy,
  Check,
  ArrowUpRight,
  Mic,
  Code2,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="top"
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 bg-dot-grid border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Available for Software Engineering Roles · MCA @ IIT Patna</span>
            </motion.div>

            {/* Catchy Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="font-serif-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[1.03] tracking-tight text-slate-900"
            >
              Building{' '}
              <span className="italic text-blue-600">real-time, scalable</span>{' '}
              web products from idea to cloud.
            </motion.h1>

            {/* Concise Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              I’m{' '}
              <strong className="text-slate-900 font-semibold">
                Muhammad Nasif
              </strong>
              , a full-stack &amp; backend engineer crafting clean architectures
              with{' '}
              <span className="text-slate-900 font-medium">
                Node.js, TypeScript, React, Next.js, and AWS
              </span>
              .
            </motion.p>

            {/* Primary CTA Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={PROFILE.resumeUrl}
                download="Muhammad_Nasif_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                <span>Selected Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Social Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-6 flex items-center gap-5 text-sm font-medium text-slate-500"
            >
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Creative Editorial Photo Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Primary Tall Portrait Card: Deep in Code */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 aspect-[4/5]">
                <img
                  src="/images/nasif-coding.jpg"
                  alt="Muhammad Nasif coding"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono-code bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Engineering Systems</span>
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Card: Pitching at KPH Hackathon '26 */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-8 sm:w-64 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src="/images/nasif-hackathon.jpg"
                    alt="Muhammad Nasif presenting at KPH Hackathon '26"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 text-white text-[11px] font-mono-code">
                    <Mic className="w-3 h-3 text-blue-400 shrink-0" />
                    <span className="truncate">Pitching @ KPH Hackathon ’26</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
