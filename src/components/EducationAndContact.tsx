import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION, PROFILE } from '../data/portfolioData';

export const EducationAndContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Concise About, Moments & Education Section */}
      <section
        id="about"
        className="py-24 sm:py-28 border-b border-slate-200/80"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Short Engineering Philosophy */}
            <div className="lg:col-span-6">
              <span className="font-mono-code text-xs uppercase tracking-widest text-blue-600 font-medium">
                03 / About
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl text-slate-900 mt-1">
                From architecture to stage demos.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                I enjoy taking ideas from zero to deployed software—structuring
                backends with{' '}
                <strong className="text-slate-900 font-medium">
                  Clean / Hexagonal Architecture
                </strong>
                , building real-time experiences with{' '}
                <strong className="text-slate-900 font-medium">
                  WebRTC &amp; Socket.io
                </strong>
                , and shipping containerized products on{' '}
                <strong className="text-slate-900 font-medium">AWS</strong>.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono-code text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Based in {PROFILE.location}, India</span>
              </div>

              {/* Clean Stage Photo Card */}
              <div className="mt-7 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <img
                  src="/images/nasif-hackathon.jpg"
                  alt="Presenting at KPH Hackathon '26"
                  className="w-full h-56 object-cover object-top"
                />
                <div className="px-4 py-3 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium text-slate-900">
                    KPH Hackathon ’26 — Build · Launch · Scale
                  </span>
                  <span className="font-mono-code text-blue-600">
                    Live Product Demo
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Education Cards */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono-code text-xs uppercase tracking-widest text-slate-400 block mb-2">
                Education
              </span>
              {EDUCATION.map((item) => (
                <div
                  key={item.degree}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono-code text-blue-600 font-medium mb-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{item.school}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {item.degree}
                    </h3>
                  </div>
                  <span className="font-mono-code text-xs text-slate-500 shrink-0">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catchy Contact Section */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <img
                src="/images/nasif-avatar.jpg"
                alt={PROFILE.name}
                className="hidden sm:block w-16 h-16 rounded-2xl object-cover object-top bg-blue-50 border-2 border-blue-400/40 shrink-0 mt-1"
              />
              <div>
                <span className="font-mono-code text-xs uppercase tracking-widest text-blue-400">
                  04 / What’s Next
                </span>
                <h2 className="font-serif-editorial text-4xl sm:text-6xl mt-2 leading-tight">
                  Let’s build something{' '}
                  <span className="italic text-blue-400">great together.</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-md">
                  Open to Full-Stack and Backend Engineering opportunities.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied {PROFILE.email}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <span>{PROFILE.phone}</span>
              </a>
            </div>
          </div>

          {/* Minimal Footer */}
          <footer className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} {PROFILE.name}
            </div>
            <div className="flex items-center gap-6 font-medium text-slate-600">
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
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                <span>Resume PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};
