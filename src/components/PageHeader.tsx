type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    /* Negative top margin pulls the glow area up behind the transparent navbar
       (nav 64px + main's top padding 40px); padding restores content position. */
    <header className="relative overflow-hidden -mt-[104px] pt-[104px] -mx-4 px-4 sm:-mx-6 sm:px-6">
      <div className="hero-glow" aria-hidden />
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
