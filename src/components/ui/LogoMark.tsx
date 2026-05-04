export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="3" y="3" width="11" height="11" rx="2.5" fill="currentColor" />
      <rect x="18" y="3" width="11" height="11" rx="2.5" fill="currentColor" />
      <rect x="3" y="18" width="11" height="11" rx="2.5" fill="currentColor" />
      <rect x="18" y="18" width="11" height="11" rx="2.5" fill="currentColor" />
    </svg>
  );
}
