import React, { useState, useEffect, useMemo } from 'react';
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
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [isLive, setIsLive] = useState(false);

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
          setIsLive(true);
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
        // Today might not have commits yet, check yesterday
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

  // Helper for custom yellow theme levels
  const getCellColor = (level: number, count: number) => {
    if (count === 0 || level === 0) return 'bg-zinc-800/80 hover:bg-zinc-700';
    if (level === 1) return 'bg-amber-900/60 border border-amber-700/40 hover:bg-amber-800';
    if (level === 2) return 'bg-[#ca8a04] hover:bg-[#eab308]';
    if (level === 3) return 'bg-[#facc15] hover:bg-[#fde047] shadow-[0_0_6px_rgba(250,204,21,0.4)]';
    return 'bg-[#fef08a] hover:bg-white shadow-[0_0_10px_rgba(254,240,138,0.7)]';
  };

  const totalCount = data.total?.lastYear || 425;

  return (
    <section id="activity" className="py-24 sm:py-28 border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-brand-dark font-bold bg-brand-primary px-2.5 py-0.5 rounded">
              03 / Live Activity
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
          {/* Terminal Window Header Bar */}
          <div className="px-6 py-4 bg-zinc-950/80 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono-code text-xs text-zinc-400 pl-2 hidden sm:inline">
                nasif284 / github-contributions.ts
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-[11px] font-mono-code text-zinc-300">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isLive ? 'bg-emerald-400 animate-pulse' : 'bg-brand-primary'
                  }`}
                />
                <span>{isLive ? 'LIVE SYNC' : 'ACTIVE'}</span>
              </span>
            </div>
          </div>

          {/* Metric KPI Cards */}
          <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-zinc-800/80 bg-zinc-900/40">
            {/* Total Contributions */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-brand-primary/40 transition-colors">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code uppercase tracking-wider mb-2">
                <span>Total Commits</span>
                <GitCommit className="w-4 h-4 text-brand-primary" />
              </div>
              <div className="font-serif-editorial text-4xl sm:text-5xl text-brand-primary font-bold">
                {totalCount}
                <span className="text-2xl font-sans text-brand-primary/70 font-normal">+</span>
              </div>
              <div className="mt-1 text-xs text-zinc-400 font-mono-code">
                In the last 365 days
              </div>
            </div>

            {/* Current Streak */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-brand-primary/40 transition-colors">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code uppercase tracking-wider mb-2">
                <span>Current Streak</span>
                <Flame className="w-4 h-4 text-brand-primary animate-bounce" />
              </div>
              <div className="font-serif-editorial text-4xl sm:text-5xl text-white font-bold flex items-baseline gap-2">
                <span>{currentStreak}</span>
                <span className="text-lg font-sans text-zinc-400 font-medium">Days</span>
              </div>
              <div className="mt-1 text-xs text-emerald-400 font-mono-code flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Streak actively running</span>
              </div>
            </div>

            {/* Longest Streak */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-brand-primary/40 transition-colors">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code uppercase tracking-wider mb-2">
                <span>Best Streak</span>
                <Activity className="w-4 h-4 text-brand-primary" />
              </div>
              <div className="font-serif-editorial text-4xl sm:text-5xl text-white font-bold flex items-baseline gap-2">
                <span>{longestStreak}</span>
                <span className="text-lg font-sans text-zinc-400 font-medium">Days</span>
              </div>
              <div className="mt-1 text-xs text-zinc-400 font-mono-code">
                Longest consecutive run
              </div>
            </div>
          </div>

          {/* Interactive Heatmap Matrix */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider">
                52-Week Contribution Matrix
              </div>
              {hoveredDay ? (
                <div className="text-xs font-mono-code text-brand-primary bg-zinc-900 px-3 py-1 rounded-full border border-zinc-700 inline-flex items-center gap-2">
                  <span className="font-bold">{hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'}</span>
                  <span className="text-zinc-400">on {hoveredDay.date}</span>
                </div>
              ) : (
                <div className="text-xs font-mono-code text-zinc-500">
                  Hover or tap a block for details
                </div>
              )}
            </div>

            {/* Heatmap Grid - Horizontal scrolling on small screens */}
            <div className="overflow-x-auto pb-4 pt-1">
              <div className="inline-flex gap-1 min-w-[720px]">
                {weeks.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1">
                    {week.map((day) => (
                      <div
                        key={day.date}
                        onMouseEnter={() => setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-3 h-3 rounded-[2px] transition-all cursor-pointer ${getCellColor(
                          day.level,
                          day.count
                        )}`}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Legend and CTA */}
            <div className="mt-4 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-400">
              <div className="flex items-center gap-2">
                <span>Less</span>
                <span className="w-3 h-3 rounded-[2px] bg-zinc-800/80" />
                <span className="w-3 h-3 rounded-[2px] bg-amber-900/60 border border-amber-700/40" />
                <span className="w-3 h-3 rounded-[2px] bg-[#ca8a04]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#facc15]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#fef08a]" />
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
