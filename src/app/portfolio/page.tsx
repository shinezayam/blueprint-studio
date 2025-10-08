export const metadata = { title: "Portfolio" };

type Project = {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "iOS Productivity App",
    summary: "SwiftUI app with offline-first sync, improved onboarding, and 40% performance gain.",
    tags: ["iOS", "SwiftUI", "Performance"],
  },
  {
    title: "React SaaS Dashboard",
    summary: "Next.js dashboard with charts, auth, and accessibility-first components.",
    tags: ["React", "Next.js", "A11y"],
  },
  {
    title: "Vue Marketing Site",
    summary: "SEO-optimized site with 95+ Lighthouse scores and CMS integration.",
    tags: ["Vue", "SEO", "CMS"],
  },
];

export default function PortfolioPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Selected Work</h1>
      <p className="max-w-2xl text-black/80 dark:text-white/80">
        A few projects representing our focus on clarity, performance, and measurable outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article key={p.title} className="rounded-xl border border-black/10 dark:border-white/20 p-5 space-y-2">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{p.summary}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/20">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


