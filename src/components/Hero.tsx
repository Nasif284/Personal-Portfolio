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
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 bg-dot-grid border-b border-zinc-200/80 overflow-hidden"
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
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-primary-soft border border-brand-primary-border text-brand-primary-text text-xs font-semibold mb-7 shadow-2xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-primary ring-2 ring-brand-primary/40 animate-pulse" />
              <span>Available for Software Engineering Roles · MCA @ IIT Patna</span>
            </motion.div>

            {/* Catchy Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="font-serif-editorial text-5xl sm:text-6xl lg:text-[72px] leading-[1.03] tracking-tight text-brand-dark"
            >
              Building{' '}
              <span className="italic underline decoration-brand-primary decoration-4 underline-offset-4">
                real-time, scalable
              </span>{' '}
              web products from idea to cloud.
            </motion.h1>

            {/* Concise Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl"
            >
              I’m{' '}
              <strong className="text-brand-dark font-semibold">
                Muhammad Nasif
              </strong>
              , a full-stack &amp; backend engineer crafting clean architectures
              with{' '}
              <span className="text-brand-dark font-medium">
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-primary text-brand-dark font-semibold text-sm shadow-sm hover:bg-brand-primary-hover hover:scale-[1.02] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-dark text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
              >
                <span>Selected Work</span>
                <ArrowDownRight className="w-4 h-4 text-brand-primary" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white border border-zinc-300 text-zinc-800 text-sm font-medium hover:border-brand-primary hover:bg-brand-primary-soft transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
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
              className="mt-6 flex items-center gap-5 text-sm font-medium text-zinc-500"
            >
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-brand-dark transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-brand-dark transition-colors"
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
            <div className="relative group mx-auto max-w-sm lg:max-w-none">
              {/* Creative Yellow Graphic Offset Plate */}
              <div
                className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-[2.25rem] rounded-tr-[5.5rem] rounded-bl-[3.75rem] bg-brand-primary border-2 border-brand-dark transition-transform duration-300 group-hover:translate-x-4.5 group-hover:translate-y-4.5"
                aria-hidden="true"
              />

              {/* Floating Decorative Sparkle Pin */}
              <div
                className="absolute -top-3.5 -left-3.5 w-8 h-8 rounded-full bg-brand-primary border-2 border-brand-dark flex items-center justify-center text-brand-dark text-xs font-bold shadow-sm z-20 select-none"
                title="Full-Stack & Systems"
              >
                ✦
              </div>

              {/* Primary Tall Portrait Card: Deep in Code */}
              <div className="relative rounded-[2.25rem] rounded-tr-[5.5rem] rounded-bl-[3.75rem] overflow-hidden border-[3px] border-brand-dark shadow-xl bg-zinc-900 aspect-[4/5]">
                <img
                  src="/images/nasif-coding.jpg"
                  alt="Muhammad Nasif coding"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top-Right Pill in the curve sweep */}
                <div className="absolute top-4 right-5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary text-brand-dark text-[11px] font-mono-code font-bold border border-brand-dark shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-dark animate-pulse" />
                    <span>IIT Patna · MCA</span>
                  </span>
                </div>

                {/* Bottom Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono-code bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-primary/40 text-white">
                    <Code2 className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Engineering Systems</span>
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Card: Pitching at KPH Hackathon '26 */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-8 sm:w-68 rounded-2xl rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden border-[3px] border-brand-dark shadow-[6px_6px_0px_0px_#facc15] bg-brand-dark group/hackathon z-20">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src="/images/nasif-hackathon.jpg"
                    alt="Muhammad Nasif presenting at KPH Hackathon '26"
                    className="w-full h-full object-cover object-top group-hover/hackathon:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 text-white text-[11px] font-mono-code">
                    <Mic className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span className="truncate font-semibold">Pitching @ KPH Hackathon ’26</span>
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
