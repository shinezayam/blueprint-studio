type Props = {
  label: string;
  value: string;
  hint?: string;
};

export default function StatCard({ label, value, hint }: Props) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/20 p-5 hover-card">
      <div className="text-sm text-black/60 dark:text-white/60">{label}</div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      {hint ? (
        <div className="text-xs text-black/60 dark:text-white/60 mt-1">{hint}</div>
      ) : null}
    </div>
  );
}


