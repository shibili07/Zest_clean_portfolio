import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Use on dark backgrounds (e.g. contact footer) */
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  const dark = theme === "dark";

  return (
    <Reveal className={`max-w-3xl ${alignClass}`}>
      <p
        className={
          dark
            ? "text-sm font-semibold uppercase tracking-[0.2em] text-violet-300"
            : "text-sm font-semibold uppercase tracking-[0.2em] text-violet-600"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-sans text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          dark ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
