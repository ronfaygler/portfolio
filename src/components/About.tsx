import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="About Me" title="Background" />
        <div className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
    </div>
  );
}
