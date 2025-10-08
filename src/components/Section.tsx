import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function Section({ title, description, children }: Props) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-medium tracking-tight">{title}</h2>
        {description ? (
          <p className="mt-1 text-black/80 dark:text-white/80 max-w-2xl">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}


