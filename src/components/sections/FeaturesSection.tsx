import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const whyItems = [
  {
    title: "Lab-Tested Formula",
    description:
      "Every product is rigorously tested in our certified laboratory to ensure it meets automotive-grade standards.",
    image: "/images/feat-lab-tested.png",
  },
  {
    title: "100% Biodegradable",
    description:
      "Our eco-conscious formulas break down naturally, protecting ecosystems without sacrificing cleaning power.",
    image: "/images/feat-eco-safe.png",
  },
  {
    title: "Paint Safe pH Balance",
    description:
      "Precisely balanced pH levels ensure safe use on all paint types and delicate surfaces — no damage, ever.",
    image: "/images/feat-ph-neutral.png",
  },
  {
    title: "Fast-Acting Technology",
    description:
      "Encapsulation technology lifts and traps dirt particles on contact, cutting your wash time in half.",
    image: "/images/feat-fast-acting.png",
  },
  {
    title: "Long-Lasting Protection",
    description:
      "Polymer shield ingredients provide residual protection on paint and glass between washes.",
    image: "/images/feat-long-lasting.png",
  },
  {
    title: "Professional Grade",
    description:
      "The same formulas trusted by professional detailers and car wash studios across 100+ cities.",
    image: "/images/feat-professional.png",
  },
];

export function FeaturesSection() {
  // Duplicate items for seamless marquee
  const marqueeItems = [...whyItems, ...whyItems];

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-violet-100/80 bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Zest Clean"
          title="Built for Perfectionists"
          subtitle="We obsess over every detail so you don't have to. Here's what makes Zest Clean the choice of car enthusiasts and professionals alike."
          align="center"
        />
      </div>

      <div className="mt-16 flex overflow-hidden">
        <div className="animate-marquee flex gap-6 px-4">
          {marqueeItems.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="w-[320px] flex-shrink-0 group relative overflow-hidden rounded-3xl border border-violet-100/80 bg-white p-8 transition-all duration-300 hover:border-violet-200 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.1)]"
            >
              <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-2xl bg-violet-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Side Fades for Marquee */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}
