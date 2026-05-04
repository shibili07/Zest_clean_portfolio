import { FiltersBadge } from "@/components/ui/FiltersBadge";

function ToggleOn() {
  return (
    <span
      className="relative inline-flex h-6 w-11 shrink-0 cursor-default rounded-full bg-accent-green transition-colors"
      role="presentation"
    >
      <span className="pointer-events-none absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-white shadow-sm" />
    </span>
  );
}

function PaperPlaneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={`text-neutral-700 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function WorkflowCards() {
  return (
    <div className="flex w-full max-w-[260px] flex-col gap-3">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-neutral-900">
            <svg
              viewBox="0 0 32 32"
              className="h-5 w-5"
              fill="none"
              aria-hidden
            >
              <rect
                x="4"
                y="4"
                width="9"
                height="9"
                rx="2"
                fill="currentColor"
              />
              <rect
                x="19"
                y="4"
                width="9"
                height="9"
                rx="2"
                fill="currentColor"
              />
              <rect
                x="4"
                y="19"
                width="9"
                height="9"
                rx="2"
                fill="currentColor"
              />
              <rect
                x="19"
                y="19"
                width="9"
                height="9"
                rx="2"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="min-w-0 text-sm font-medium text-neutral-800">
            New lead in Xelofia
          </p>
        </div>
        <ToggleOn />
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]">
        <div
          className="h-9 w-9 shrink-0 rounded-full bg-neutral-300 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80)",
          }}
        />
        <p className="text-sm font-medium text-neutral-800">
          The score is greater than 50
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]">
        <div className="flex min-w-0 items-center gap-3">
          <PaperPlaneIcon />
          <p className="text-sm font-medium text-neutral-800">
            Notify sales team
          </p>
        </div>
        <FiltersBadge />
      </div>
    </div>
  );
}
