export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="max-w-2xl text-black/80 dark:text-white/80">
        Tell us about your project. We typically reply within 1 business day.
      </p>
      <form className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="w-full rounded-md border border-black/10 dark:border-white/20 bg-transparent px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full rounded-md border border-black/10 dark:border-white/20 bg-transparent px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea className="w-full rounded-md border border-black/10 dark:border-white/20 bg-transparent px-3 py-2 min-h-[120px]" placeholder="What can we help with?" />
        </div>
        <button className="inline-flex rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 dark:bg-white dark:text-black" type="button">
          Send
        </button>
      </form>
    </section>
  );
}


