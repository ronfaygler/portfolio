import { timeline } from "../data/portfolioData";
import { SectionHeading } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="My Journey" title="Experience & Education" />

        <ol className="relative border-s border-slate-200 dark:border-slate-800">
          {timeline.map((item) => (
            <li key={`${item.title}-${item.period}`} className="ms-8 pb-10 last:pb-0">
              <span
                className={`absolute -start-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-slate-50 dark:ring-slate-900 ${
                  item.type === "experience" ? "bg-indigo-600" : "bg-slate-400 dark:bg-slate-600"
                }`}
              />
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.organization}</p>
                <ul className="space-y-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
