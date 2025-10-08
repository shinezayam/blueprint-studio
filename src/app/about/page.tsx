import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import Timeline from "@/components/Timeline";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">About Blueprint Studio</h1>
        <p className="max-w-2xl text-black/80 dark:text-white/80">
          We are Chinguun and Shinezaya — a husband-and-wife team building thoughtful iOS and web
          products. Our daughter, Uulen, inspires our craft and our purpose: to deliver work that
          improves people’s lives and gives our family freedom.
        </p>
      </header>

      <Section title="At a glance" description="Where we are and where we’re headed.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Age" value="25" hint="Starting line" />
          <StatCard label="Current Net Worth" value="$53,820" hint="Goal: $1M by 35" />
          <StatCard label="Primary Focus" value="iOS + Frontend" hint="Swift, React, Vue" />
          <StatCard label="Savings Rate" value="30%" hint="Growing to 50%+" />
        </div>
      </Section>

      <Section title="What we do" description="Craft, performance, and outcomes.">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
            <h3 className="font-medium mb-1">iOS Development</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Swift, SwiftUI, UIKit — clean architecture, testing, performance.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
            <h3 className="font-medium mb-1">Web Frontend</h3>
            <p className="text-sm text-black/70 dark:text-white/70">React, Next.js, Vue — accessible, responsive, delightful.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
            <h3 className="font-medium mb-1">Product & UX</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Flows, interaction design, systems, and measurable impact.</p>
          </div>
        </div>
      </Section>

      <Section title="Milestones" description="Key targets on our 10-year journey.">
        <Timeline
          items={[
            { title: "Age 27", subtitle: "$100K net worth", details: "Land remote iOS role" },
            { title: "Age 30", subtitle: "$275K net worth", details: "Senior on track" },
            { title: "Age 32", subtitle: "$500K net worth", details: "Halfway to goal" },
            { title: "Age 35", subtitle: "$1M+ net worth", details: "Goal achieved" },
          ]}
        />
      </Section>

      <Section title="Principles" description="How we operate and make decisions.">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-black/80 dark:text-white/80">
          <li className="rounded-xl border border-black/10 dark:border-white/20 p-5">Pay yourself first — invest 30-50% monthly</li>
          <li className="rounded-xl border border-black/10 dark:border-white/20 p-5">Time in market &gt; timing the market</li>
          <li className="rounded-xl border border-black/10 dark:border-white/20 p-5">Increase income aggressively (remote iOS)</li>
          <li className="rounded-xl border border-black/10 dark:border-white/20 p-5">Live below your means; avoid lifestyle creep</li>
        </ul>
      </Section>

      <Section title="What’s next" description="Let’s build something great together.">
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5 flex items-center justify-between gap-3">
          <div className="text-sm text-black/80 dark:text-white/80">Have a project in mind? We’d love to help.</div>
          <a href="/contact" className="inline-flex rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 dark:bg-white dark:text-black">Get in touch</a>
        </div>
      </Section>
    </div>
  );
}


