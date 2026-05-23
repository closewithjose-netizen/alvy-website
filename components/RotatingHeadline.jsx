'use client';

import { useEffect, useState } from 'react';

/**
 * Rotating-word hero headline.
 *
 * Reads its word list from /api/headlines so the auto-update agent can refresh
 * the rotation without a redeploy. Falls back to a curated default list.
 */
const DEFAULT_WORDS = [
  'painter',
  "contractor you'll actually call back",
  'color consultant who knows your lighting',
  'cabinet refinisher',
  'crew that shows up on Monday',
  '"what color should I paint this?" person',
  "finish that doesn't peel in two years",
  'second opinion before you commit',
  "favorite painter you've ever had"
];

// Normalize curly quotes so the agent's dedupe in business-context.md
// can't accidentally re-add the same phrase with different punctuation.
function normalize(s) {
  return s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').toLowerCase().trim();
}

export default function RotatingHeadline() {
  const [words, setWords] = useState(DEFAULT_WORDS);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('in'); // 'in' | 'out'

  // Fetch the live word list (agent can update it via business-context.md)
  useEffect(() => {
    let cancelled = false;
    fetch('/api/headlines')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!cancelled && j?.words?.length) setWords(j.words);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Cycle through words
  useEffect(() => {
    const out = setTimeout(() => setPhase('out'), 2400);
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
      setPhase('in');
    }, 2900);
    return () => {
      clearTimeout(out);
      clearTimeout(next);
    };
  }, [index, words.length]);

  return (
    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.05]">
      The right place to find a{' '}
      <span className="relative inline-block align-baseline">
        <span
          key={index}
          className={`inline-block text-brand transition-all duration-500 will-change-transform ${
            phase === 'in'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2'
          }`}
        >
          {words[index]}
        </span>
        <span className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full shimmer-underline" />
      </span>
      .
    </h1>
  );
}
