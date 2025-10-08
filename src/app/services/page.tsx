export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
      <p className="max-w-2xl text-black/80 dark:text-white/80">
        We help startups and teams design, build, and ship polished mobile and web apps.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">iOS App Development</h3>
          <p className="text-sm text-black/70 dark:text-white/70">Swift, SwiftUI, UIKit, clean architecture, testing, app store readiness.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">Frontend Engineering</h3>
          <p className="text-sm text-black/70 dark:text-white/70">React, Next.js, Vue, responsive UI, accessibility, performance.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">Product Design & UX</h3>
          <p className="text-sm text-black/70 dark:text-white/70">Flows, wireframes, interaction design, and design systems.</p>
        </div>
      </div>
    </section>
  );
}


