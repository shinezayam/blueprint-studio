type Props = {
  label: string;
  value: string;
  hint?: string;
};

export default function StatCard({ label, value, hint }: Props) {
  return (
    <div className="rounded-xl border border-foreground/20 p-5 hover-card">
      <div className="text-sm text-foreground/60">{label}</div>
      <div className="text-2xl font-semibold tracking-tight text-foreground">{value}</div>
      {hint ? (
        <div className="text-xs text-foreground/60 mt-1">{hint}</div>
      ) : null}
    </div>
  );
}


