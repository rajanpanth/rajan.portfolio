"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Monitor, Sun, Moon } from "lucide-react";

const buttons = [
  { value: "system", icon: Monitor, label: "System" },
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="flex flex-shrink-0 items-center gap-1 rounded-full border px-1 py-1"
        style={{ borderColor: 'var(--border)' }}>
        <div className="w-7 h-7" />
        <div className="hidden sm:block w-7 h-7" />
        <div className="hidden sm:block w-7 h-7" />
      </div>
    );
  }

  const currentIndex = Math.max(
    buttons.findIndex((button) => button.value === theme),
    0
  );
  const current = buttons[currentIndex];
  const next = buttons[(currentIndex + 1) % buttons.length];
  const CurrentIcon = current.icon;

  return (
    <>
      {/* Phones: one button that cycles through the themes */}
      <div
        className="flex sm:hidden flex-shrink-0 items-center rounded-full border px-1 py-1"
        style={{ borderColor: 'var(--border)' }}
      >
        <button
          onClick={() => setTheme(next.value)}
          className="rounded-full p-1.5 transition-all duration-200 cursor-pointer"
          style={{ color: 'var(--foreground)' }}
          aria-label={`Theme: ${current.label}. Switch to ${next.label}`}
          title={`Theme: ${current.label}`}
        >
          <CurrentIcon size={16} strokeWidth={1.5} />
        </button>
      </div>

      <div
        className="hidden sm:flex flex-shrink-0 items-center gap-0.5 rounded-full border px-1 py-1"
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
    </>
  );
}
