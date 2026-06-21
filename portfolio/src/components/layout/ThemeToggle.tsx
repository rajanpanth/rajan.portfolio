"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Monitor, Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-full border px-1 py-1"
        style={{ borderColor: 'var(--border)' }}>
        <div className="w-7 h-7" />
        <div className="w-7 h-7" />
        <div className="w-7 h-7" />
      </div>
    );
  }

  const buttons = [
    { value: "system", icon: Monitor, label: "System" },
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
  ];

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border px-1 py-1"
      style={{ borderColor: 'var(--border)' }}
    >
      {buttons.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className="relative rounded-full p-1.5 transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: theme === value ? 'var(--card-hover)' : 'transparent',
            color: theme === value ? 'var(--foreground)' : 'var(--muted)',
          }}
          aria-label={label}
          title={label}
        >
          <Icon size={16} strokeWidth={1.5} />
        </button>
      ))}
    </div>
  );
}
