import { FiltersBadge } from "@/components/ui/FiltersBadge";

export function RevenueChart() {
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const rings = [
    { r: 78, color: "#22c55e", width: 10 },
    { r: 58, color: "#fb923c", width: 10 },
    { r: 38, color: "#3b82f6", width: 10 },
  ];

  return (
    <div className="w-full max-w-[320px] rounded-2xl bg-white p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]">
      <div className="mb-4 flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-neutral-900">
          Predictive AI Revenue
        </h3>
        <FiltersBadge className="shrink-0" />
      </div>

      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {rings.map(({ r, color, width }) => (
              <circle
                key={r}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={color}
                strokeWidth={width}
                strokeLinecap="round"
              />
            ))}
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-serif text-center">
            <span className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              $ 149k
            </span>
          </div>
        </div>

        <div className="mt-6 grid w-full grid-cols-3 gap-2 text-center text-xs sm:text-sm">
          <div>
            <div className="mb-1 flex items-center justify-center gap-1.5 text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              <span className="font-medium text-neutral-900">$30k</span>
            </div>
            <p className="text-neutral-500">Interactions</p>
          </div>
          <div>
            <div className="mb-1 flex items-center justify-center gap-1.5 text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-chart-orange" />
              <span className="font-medium text-neutral-900">$46k</span>
            </div>
            <p className="text-neutral-500">Proposal</p>
          </div>
          <div>
            <div className="mb-1 flex items-center justify-center gap-1.5 text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-chart-blue" />
              <span className="font-medium text-neutral-900">$60k</span>
            </div>
            <p className="text-neutral-500">Qualification</p>
          </div>
        </div>
      </div>
    </div>
  );
}
