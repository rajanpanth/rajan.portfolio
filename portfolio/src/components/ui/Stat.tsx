interface StatProps {
  label: string;
  value: string;
}

export default function Stat({ label, value }: StatProps) {
  return (
    <div className="text-center">
      <p
        className="text-xl sm:text-2xl font-bold text-white"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        {value}
      </p>
      <p
        className="text-xs text-slate-500 mt-0.5"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}
