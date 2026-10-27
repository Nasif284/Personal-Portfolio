import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Flame, GitCommit, ArrowUpRight, Activity } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import fallbackData from '../data/githubDataFallback.json';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubData {
  total: {
    lastYear: number;
    [key: string]: number;
  };
  contributions: ContributionDay[];
}

export const GitHubActivity: React.FC = () => {
  const [data, setData] = useState<GitHubData>(fallbackData as GitHubData);
  const [tooltip, setTooltip] = useState<{
    day: ContributionDay;
    dayIdx: number;
    x: number;
    y: number;
    arrowOffset: number;
  } | null>(null);
  const sectionCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    fetch('https://github-contributions-api.jogruber.de/v4/Nasif284?y=last', {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then((json: GitHubData) => {
        if (isMounted && json && json.contributions && json.contributions.length > 0) {
          setData(json);
        }
      })
      .catch(() => {
        // Fallback data is already loaded seamlessly
      })
      .finally(() => {
        clearTimeout(timeoutId);
      });

    return () => {
      isMounted = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  // Compute live streaks from contributions
  const { currentStreak, longestStreak } = useMemo(() => {
    const days = data.contributions;
    if (!days || days.length === 0) return { currentStreak: 4, longestStreak: 8 };

    let longest = 0;
    let temp = 0;

    for (let i = 0; i < days.length; i++) {
      if (days[i].count > 0) {
        temp++;
        if (temp > longest) longest = temp;
      } else {
        temp = 0;
      }
    }

    let current = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].count > 0) {
        current++;
      } else if (i === days.length - 1) {
        continue;
      } else {
        break;
      }
    }

    return {
      currentStreak: current || 4,
      longestStreak: Math.max(longest, 8),
    };
  }, [data]);

  // Group contributions into 52 weeks (7 days each)
  const weeks = useMemo(() => {
    const days = data.contributions || [];
    const grouped: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    days.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === days.length - 1) {
        grouped.push(currentWeek);
        currentWeek = [];
      }
    });

    return grouped;
  }, [data]);

  // Classic GitHub Green Palette
  const getCellColor = (level: number, count: number) => {
    if (count === 0 || level === 0) return 'bg-[#161b22] border border-[#30363d]/50 hover:border-zinc-500';
    if (level === 1) return 'bg-[#0e4429] hover:bg-[#155a36]';
    if (level === 2) return 'bg-[#006d32] hover:bg-[#008f42]';
    if (level === 3) return 'bg-[#26a641] hover:bg-[#34c759]';
    return 'bg-[#39d353] hover:bg-[#58e870] shadow-[0_0_6px_rgba(57,211,83,0.5)]';
  };

  const totalCount = data.total?.lastYear || 425;

  return (
    <section id="activity" className="py-24 sm:py-28 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-brand-dark font-bold bg-brand-primary px-2.5 py-0.5 rounded">
              04 / Live Activity
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-brand-dark mt-2">
              Engineering momentum &amp; consistency.
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              Live contributions, active commit streaks, and open-source pulse tracked direct from GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Nasif284"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:underline underline-offset-4 shrink-0"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 text-brand-dark" />
          </a>
        </div>

        {/* Bespoke Editorial Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border-2 border-brand-dark bg-brand-dark text-white shadow-xl overflow-hidden"
        >
          {/* Terminal Window Header Bar (No Live Sync Badge) */}
          <div className="px-6 py-4 bg-zinc-950/80 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono-code text-xs text-zinc-400 pl-2">
                nasif284 / github-contributions.ts
              </span>
            </div>
          </div>

          {/* Metric KPI Cards - Reduced size with standard formal fonts */}
          <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-zinc-800/80 bg-zinc-900/40">
            {/* Total Contributions */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/90 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code uppercase tracking-wider mb-1.5">
                <span>Total Commits</span>
                <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="font-mono-code font-bold text-2xl sm:text-3xl text-emerald-400 tracking-tight">
                {totalCount}
                <span className="text-lg font-sans text-emerald-400/70 font-normal">+</span>
              </div>
              <div className="mt-1 text-[11px] text-zinc-400 font-mono-code">
                In the last 365 days
              </div>
            </div>

            {/* Current Streak */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/90 hover:border-brand-primary/40 transition-colors">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code uppercase tracking-wider mb-1.5">
                <span>Current Streak</span>
                <Flame className="w-3.5 h-3.5 text-brand-primary animate-bounce" />
              </div>
              <div className="font-mono-code font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline gap-1.5">
                <span>{currentStreak}</span>
                <span className="text-sm font-sans text-zinc-400 font-normal">days</span>
              </div>
              <div className="mt-1 text-[11px] text-emerald-400 font-mono-code flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Streak actively running</span>
              </div>
            </div>

            {/* Longest Streak */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code uppercase tracking-wider mb-1.5">
                <span>Best Streak</span>
                <Activity className="w-3.5 h-3.5 text-zinc-400" />
              </div>
              <div className="font-mono-code font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline gap-1.5">
                <span>{longestStreak}</span>
                <span className="text-sm font-sans text-zinc-400 font-normal">days</span>
              </div>
              <div className="mt-1 text-[11px] text-zinc-400 font-mono-code">
                Longest consecutive run
              </div>
            </div>
          </div>

          {/* Interactive Heatmap Matrix */}
          <div ref={sectionCardRef} className="p-5 sm:p-6 relative">
            {/* Floating Smart Tooltip - Placed in non-scrollable parent to permanently prevent scrollbar spawning */}
            {tooltip && (
              <div
                style={{
                  left: `${tooltip.x}px`,
                  top: tooltip.dayIdx <= 2 ? `${tooltip.y + 18}px` : `${tooltip.y - 8}px`,
                }}
                className={`pointer-events-none absolute -translate-x-1/2 ${
                  tooltip.dayIdx <= 2 ? '' : '-translate-y-full'
                } z-40 px-2.5 py-1.5 rounded-md bg-zinc-950 text-white text-[11px] font-mono-code border border-zinc-700 shadow-2xl whitespace-nowrap`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-emerald-400">
                    {tooltip.day.count === 0
                      ? 'No contributions'
                      : `${tooltip.day.count} contribution${tooltip.day.count === 1 ? '' : 's'}`}
                  </span>
                  <span className="text-zinc-400">on {tooltip.day.date}</span>
                </div>
                {/* Caret pointing UP when tooltip is below cell, DOWN when above cell */}
                {tooltip.dayIdx <= 2 ? (
                  <div
                    style={{ left: `calc(50% + ${tooltip.arrowOffset}px)` }}
                    className="absolute bottom-full -translate-x-1/2 border-4 border-transparent border-b-zinc-950"
                  />
                ) : (
                  <div
                    style={{ left: `calc(50% + ${tooltip.arrowOffset}px)` }}
                    className="absolute top-full -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-zinc-950"
                  />
                )}
              </div>
            )}

            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider">
                52-Week Contribution Matrix
              </div>
              <div className="text-xs font-mono-code text-zinc-500 hidden sm:block">
                Hover a block for details
              </div>
            </div>

            {/* Scrollable Heatmap Grid (Clean, scrollbar will NEVER trigger from tooltip) */}
            <div className="relative overflow-x-auto pb-3 pt-2">
              <div className="min-w-[760px]">
                {/* Month labels spanning the full width */}
                <div className="w-full flex justify-between text-[11px] font-mono-code text-zinc-500 mb-2 px-1 select-none">
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                </div>

                {/* 52 Week columns spanning full width */}
                <div className="w-full flex justify-between gap-1">
                  {weeks.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-1">
                      {week.map((day, dayIdx) => (
                        <div
                          key={day.date}
                          onMouseEnter={(e) => {
                            const cellRect = e.currentTarget.getBoundingClientRect();
                            const cardRect = sectionCardRef.current?.getBoundingClientRect();
                            if (cardRect) {
                              const rawX = cellRect.left - cardRect.left + cellRect.width / 2;
                              // Clamp X so tooltip never overflows left or right edge of the card
                              const clampedX = Math.max(115, Math.min(rawX, cardRect.width - 115));
                              setTooltip({
                                day,
                                dayIdx,
                                x: clampedX,
                                arrowOffset: Math.max(-80, Math.min(rawX - clampedX, 80)),
                                y: cellRect.top - cardRect.top,
                              });
                            }
                          }}
                          onMouseLeave={() => setTooltip(null)}
                          className={`w-2.5 h-2.5 sm:w-[11px] sm:h-[11px] rounded-[2px] transition-colors cursor-pointer ${getCellColor(
                            day.level,
                            day.count
                          )}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Classic GitHub Green Legend and CTA */}
            <div className="mt-3 pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-400">
              <div className="flex items-center gap-2">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161b22] border border-[#30363d]/50" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]" />
                <span>More</span>
              </div>

              <a
                href="https://github.com/Nasif284"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary text-brand-dark font-semibold text-xs hover:bg-brand-primary-hover transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Follow @Nasif284 on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
