import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  Download,
  Copy,
  Check,
  ArrowUpRight,
  Code2,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

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
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 bg-dot-grid border-b border-zinc-200/80 overflow-hidden"
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
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-primary-soft border border-brand-primary-border text-brand-primary-text text-xs font-semibold mb-4 sm:mb-5 shadow-2xs"
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

            {/* Action & Connect Cluster - Clean 2-Row Balanced Layout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-8 flex flex-col gap-3.5"
            >
              {/* Row 1: Primary Portfolio Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PROFILE.resumeUrl}
                  download="Muhammad_Nasif_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-primary text-brand-dark font-semibold text-sm shadow-2xs hover:bg-brand-primary-hover hover:scale-[1.02] border border-brand-primary-border transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-dark text-white text-sm font-semibold hover:bg-zinc-800 shadow-2xs transition-colors"
                >
                  <span>Selected Work</span>
                  <ArrowDownRight className="w-4 h-4 text-brand-primary" />
                </a>
              </div>

              {/* Row 2: Profiles & Direct Contact */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-brand-dark text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 shadow-2xs transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-brand-dark text-xs sm:text-sm font-semibold border border-zinc-200 hover:border-brand-primary hover:bg-brand-primary-soft shadow-2xs transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-brand-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs sm:text-sm font-medium hover:border-brand-primary hover:bg-brand-primary-soft hover:text-brand-dark shadow-2xs transition-all cursor-pointer"
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{PROFILE.email}</span>
                    </>
                  )}
                </button>
              </div>
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

                {/* Bottom Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono-code bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-primary/40 text-white">
                    <Code2 className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Engineering Systems</span>
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-8 sm:w-68 rounded-2xl rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden border-[3px] border-brand-dark shadow-[6px_6px_0px_0px_#facc15] bg-zinc-900 group/hackathon z-20">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src="/images/nasif-hackathon.jpg"
                    alt="Muhammad Nasif presenting at hackathon"
                    className="w-full h-full object-cover object-top group-hover/hackathon:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
