type Props = {
  label: string;
  value: string;
  hint?: string;
};

export default function StatCard({ label, value, hint }: Props) {
  return (
    <div className="card card-hover p-5">
      <div className="text-xs uppercase tracking-wider text-foreground/50 font-medium">{label}</div>
      <div className="text-3xl font-semibold tracking-tight text-foreground mt-1.5">{value}</div>
      {hint ? (
        <div className="text-xs text-foreground/55 mt-1.5">{hint}</div>
      ) : null}
    </div>
  );
}


