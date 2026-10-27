import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION, PROFILE } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 border-b border-zinc-200/80"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Short Engineering Philosophy */}
          <div className="lg:col-span-6">
            <span className="font-mono-code text-xs uppercase tracking-widest text-brand-dark font-bold bg-brand-primary px-2.5 py-0.5 rounded">
              03 / About
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-brand-dark mt-2">
              From architecture to stage demos.
            </h2>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed">
              I enjoy taking ideas from zero to deployed software—structuring
              backends with{' '}
              <strong className="text-brand-dark font-medium">
                Clean / Hexagonal Architecture
              </strong>
              , building real-time experiences with{' '}
              <strong className="text-brand-dark font-medium">
                WebRTC &amp; Socket.io
              </strong>
              , and shipping containerized products on{' '}
              <strong className="text-brand-dark font-medium">AWS</strong>.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono-code text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-brand-primary" />
              <span>Based in {PROFILE.location}, India</span>
            </div>

            {/* Clean Stage Photo Card */}
            <div className="mt-7 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <img
                src="/images/nasif-hackathon.jpg"
                alt="Presenting at KPH Hackathon '26"
                className="w-full h-56 object-cover object-top"
              />
              <div className="px-4 py-3 flex items-center justify-between text-xs text-zinc-600 bg-white border-t border-zinc-100">
                <span className="font-medium text-brand-dark">
                  KPH Hackathon ’26 — Build · Launch · Scale
                </span>
                <span className="font-mono-code font-semibold text-brand-primary-text bg-brand-primary-soft px-2 py-0.5 rounded border border-brand-primary-border">
                  Live Product Demo
                </span>
              </div>
            </div>
          </div>

          {/* Right: Education Cards */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-400 block mb-2">
              Education
            </span>
            {EDUCATION.map((item) => (
              <div
                key={item.degree}
                className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/60 hover:border-brand-primary/60 transition-colors flex items-start justify-between gap-4"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono-code text-brand-primary-text bg-brand-primary-soft px-2.5 py-0.5 rounded-full border border-brand-primary-border font-semibold mb-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-dark" />
                    <span>{item.school}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-brand-dark">
                    {item.degree}
                  </h3>
                </div>
                <span className="font-mono-code text-xs text-zinc-500 shrink-0">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-5 relative z-10">
            <img
              src="/images/nasif-avatar.jpg"
              alt={PROFILE.name}
              className="hidden sm:block w-16 h-16 rounded-2xl object-cover object-top bg-brand-primary border-2 border-brand-primary shrink-0 mt-1"
            />
            <div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-brand-primary font-bold">
                05 / What’s Next
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl mt-2 leading-tight">
                Let’s build something{' '}
                <span className="italic text-brand-primary">great together.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-md">
                Open to Full-Stack and Backend Engineering opportunities.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 relative z-10">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-primary text-brand-dark text-sm font-bold hover:bg-brand-primary-hover hover:scale-[1.02] transition-all cursor-pointer shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-brand-dark" />
                  <span>Copied {PROFILE.email}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-brand-dark" />
                  <span>{PROFILE.email}</span>
                </>
              )}
            </button>

            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors text-center"
            >
              <span>{PROFILE.phone}</span>
            </a>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}
          </div>
          <div className="flex items-center gap-6 font-medium text-zinc-600">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-brand-dark transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-brand-dark transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-brand-dark transition-colors"
            >
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export const EducationAndContact: React.FC = () => {
  return (
    <>
      <AboutSection />
      <ContactSection />
    </>
  );
};
