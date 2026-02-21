"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const TABS = ["Trending", "Newest", "Top Rated"];

interface StackCard {
  title: string;
  badge: string;
  badgeColor: string;
  author: string;
  description: string;
  icons: string[];
  saves: string;
  setup: string;
}

const STACKS: StackCard[] = [
  {
    title: "Automated Blog Post",
    badge: "MARKETER",
    badgeColor: "bg-purple-500/20 text-purple-400",
    author: "by Alex J.",
    description:
      "Generate SEO-optimized articles, create images and publish to WordPress automatically.",
    icons: [],
    saves: "1.7K Saves",
    setup: "15 min setup",
  },
  {
    title: "Landing Page Speedrun",
    badge: "DEV",
    badgeColor: "bg-blue-500/20 text-blue-400",
    author: "by Sam K.",
    description:
      "From idea to deployed landing page in under 30 minutes using five core tools.",
    icons: [],
    saves: "815 Saves",
    setup: "10 min setup",
  },
  {
    title: "Social Media Auto-Pilot",
    badge: "HOT",
    badgeColor: "bg-orange-500/20 text-orange-400",
    author: "by Eva R.",
    description:
      "Create endless social variations from one core asset using AI image generation.",
    icons: [],
    saves: "2.1K Saves",
    setup: "5 min setup",
  },
  {
    title: "Podcast Production",
    badge: "CREATOR",
    badgeColor: "bg-green-500/20 text-green-400",
    author: "by Mike T.",
    description:
      "Record, clean audio, transcribe, and generate show notes in one seamless flow.",
    icons: [],
    saves: "2.4K Saves",
    setup: "11+ setup",
  },
  {
    title: "Code Documentation",
    badge: "NEW",
    badgeColor: "bg-cyan-500/20 text-cyan-400",
    author: "by Amy L.",
    description:
      "Automatically generate docs from your repo and keep them updated with every commit.",
    icons: [],
    saves: "1.1K Saves",
    setup: "8 min setup",
  },
  {
    title: "Cold Email Outreach",
    badge: "SALES",
    badgeColor: "bg-red-500/20 text-red-400",
    author: "by Tom S.",
    description:
      "Find leads, enrich data, and send personalized sequences at scale.",
    icons: [],
    saves: "3.2K Saves",
    setup: "40 min setup",
  },
];

const FeaturedStacks = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <div>
            <h2 className="text-2xl font-bold text-white">
              Featured Tool Stacks
            </h2>
            <p className="mt-1 text-sm text-muted">
              Community favorites curated for productivity
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 rounded-lg bg-surface p-1">
            {TABS.map((tab, i) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-surface-light text-white shadow-sm"
                    : "text-muted hover:text-white"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STACKS.map((stack, i) => (
            <motion.div
              key={stack.title}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card-glow group cursor-pointer rounded-xl border border-border bg-surface p-5 transition-all"
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                  {stack.title}
                </h3>
                <span
                  className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${stack.badgeColor}`}
                >
                  {stack.badge}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted">{stack.author}</p>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted/80">
                {stack.description}
              </p>

              {/* Icons */}
              <div className="mt-4 flex gap-1">
                {stack.icons.map((icon, j) => (
                  <span
                    key={j}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-light text-sm"
                  >
                    {icon}
                  </span>
                ))}
                <span className="flex h-8 items-center px-2 text-xs text-muted"></span>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <div className="flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  {stack.saves}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {stack.setup}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load more */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border border-border bg-surface px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-primary/50 hover:bg-surface-light inline-flex items-center gap-2"
          >
            Load more stacks{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedStacks;
