import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
};

export default function Section({ title, description, eyebrow, children }: Props) {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-foreground">{title}</h2>
        {description ? (
          <p className="text-foreground/60 max-w-2xl leading-relaxed text-base sm:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
