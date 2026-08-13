type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="relative">
      {/* Full-bleed glow band: spans the whole viewport width and reaches up
          behind the transparent navbar (nav 64px + main top padding 40px),
          so the gradient runs seamlessly from the top of the page. */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-screen -top-[104px] h-[calc(100%+220px)] overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div className="hero-glow" />
      </div>
      <div className="relative max-w-3xl space-y-5 py-4 fade-in-up">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[0.98] text-gradient">
          {title}
        </h1>
        {description ? (
          <p className="text-foreground/60 leading-relaxed text-lg sm:text-xl">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
