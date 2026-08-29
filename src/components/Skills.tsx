import { skillCategories } from "../data/portfolioData";
import { SectionHeading } from "./About";
import SkillIcon, { skillColor } from "./SkillIcon";

const CATEGORY_ICONS: Record<string, string> = {
  "Full-Stack": "💻",
  AI: "🤖",
  Tools: "🛠️",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What I Work With" title="Skills" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl dark:bg-indigo-500/10">
                  {CATEGORY_ICONS[category.title] ?? "⭐"}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-base font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: skillColor(skill) }}
                    >
                      <SkillIcon skill={skill} />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
