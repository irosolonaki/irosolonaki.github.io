import type { ReactNode } from "react";

export function SvgIcon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </SvgIcon>
  );
}

export function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </SvgIcon>
  );
}

export function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <path d="M12 21s6-4.35 6-11a6 6 0 1 0-12 0c0 6.65 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </SvgIcon>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </SvgIcon>
  );
}

export function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <path d="M7 9.5V18" />
      <path d="M7 6.5v.01" />
      <path d="M12 18v-5.5a2.5 2.5 0 1 1 5 0V18" />
      <path d="M12 9.5V18" />
    </SvgIcon>
  );
}

export function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <path d="M9 6l6 6-6 6" />
    </SvgIcon>
  );
}

export function LockIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7.5a4 4 0 1 1 8 0V10" />
    </SvgIcon>
  );
}

export function SunIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5" />
      <path d="M12 19.5V22" />
      <path d="m4.93 4.93 1.77 1.77" />
      <path d="m17.3 17.3 1.77 1.77" />
      <path d="M2 12h2.5" />
      <path d="M19.5 12H22" />
      <path d="m4.93 19.07 1.77-1.77" />
      <path d="m17.3 6.7 1.77-1.77" />
    </SvgIcon>
  );
}

export function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <path d="M21 12.8A8.8 8.8 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z" />
    </SvgIcon>
  );
}

export function GamepadIcon({ className = "" }: { className?: string }) {
  return (
    <SvgIcon className={className}>
      <path d="M7 11V9a5 5 0 0 1 10 0v2" />
      <path d="M8 12h2v2H8z" />
      <path d="M13 12h2v2h-2z" />
      <path d="M8 8h8" />
      <path d="M4 12h3" />
      <path d="M17 12h3" />
      <path d="M9 16h6" />
      <path d="M12 16v3" />
    </SvgIcon>
  );
}
