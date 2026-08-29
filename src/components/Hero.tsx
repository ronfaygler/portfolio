import { useState } from "react";
import profilePhoto from "../assets/profile.jpg";
import { profile } from "../data/portfolioData";

export default function Hero() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-700/20"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Hi, I'm
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          {profile.name}
        </h1>

        <button
          type="button"
          onClick={() => setIsPhotoOpen(true)}
          className="mt-8 cursor-zoom-in transition-transform hover:scale-105"
          aria-label="Enlarge profile photo"
        >
          <img
            src={profilePhoto}
            alt={profile.name}
            className="aspect-[2/3] h-64 rounded-2xl object-cover shadow-lg ring-4 ring-white dark:ring-slate-800 sm:h-80"
          />
        </button>

        <h2 className="mt-8 text-xl font-medium text-slate-600 sm:text-2xl dark:text-slate-300">
          {profile.role}
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {isPhotoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setIsPhotoOpen(false)}
        >
          <img
            src={profilePhoto}
            alt={profile.name}
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
          />
          <button
            type="button"
            onClick={() => setIsPhotoOpen(false)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
