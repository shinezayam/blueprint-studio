type Item = {
  title: string;
  subtitle?: string;
  details?: string;
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s border-black/10 dark:border-white/20 pl-6 space-y-6">
      {items.map((i) => (
        <li key={i.title} className="space-y-1">
          <span className="absolute -left-[7px] mt-[4px] h-3 w-3 rounded-full bg-black/60 dark:bg-white/60" />
          <div className="font-medium">{i.title}</div>
          {i.subtitle ? (
            <div className="text-sm text-black/70 dark:text-white/70">{i.subtitle}</div>
          ) : null}
          {i.details ? (
            <div className="text-sm text-black/70 dark:text-white/70">{i.details}</div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}


