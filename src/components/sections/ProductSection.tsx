"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const PRODUCT_IMAGES = [
  "/images/productImg1.png",
  "/images/productImg2.png",
];

const specs = [
  { label: "Volume", value: "200 ml" },
  { label: "Formula", value: "Ultra Gloss" },
  { label: "pH Level", value: "Neutral (7)" },
  { label: "Dilution", value: "1:500 ratio" },
  { label: "Surface", value: "All finishes" },
  { label: "Scent", value: "Fresh Citrus" },
];

const highlights = [
  {
    title: "pH Neutral",
    body: "Safe on all paint types, clear coats & ceramic coatings.",
    image: "/images/feat-ph-neutral.png",
  },
  {
    title: "Ultra Gloss",
    body: "Mirror-like showroom shine after every single wash.",
    image: "/images/feat-ultra-gloss.png",
  },
  {
    title: "Dense Foam",
    body: "Thick, clinging foam lifts and encapsulates dirt gently.",
    image: "/images/feat-dense-foam.png",
  },
  {
    title: "Eco-Safe",
    body: "Biodegradable formula — safe for driveways & waterways.",
    image: "/images/feat-eco-safe.png",
  },
  {
    title: "Wax Preserving",
    body: "Maintains existing wax and sealant protection layers.",
    image: "/images/feat-wax-preserving.png",
  },
  {
    title: "Easy Rinse",
    body: "Rinses off cleanly without streaks or residue left behind.",
    image: "/images/feat-easy-rinse.png",
  },
];

export function ProductSection() {
  const [activeImage, setActiveImage] = useState(PRODUCT_IMAGES[0]);

  return (
    <section
      id="products"
      className="relative scroll-mt-28 border-t border-violet-100/80 bg-gradient-to-b from-slate-50/90 via-white to-white py-20 sm:py-24 lg:scroll-mt-32 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_0%_20%,rgba(139,92,246,0.07),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Product"
          title="Meet Zest Clean"
          subtitle="One formula, perfected. The Zest Clean Ultra Gloss Car Shampoo is everything your car deserves — developed by automotive chemists, loved by detailers."
          align="center"
        />

        <div className="mt-14 flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Mobile Heading - Only visible on small screens */}
          <div className="lg:hidden">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600">
              Premium car shampoo
            </p>
            <div className="mt-2 flex flex-wrap items-baseline gap-2">
              <span className="font-sans text-4xl font-bold text-neutral-900 sm:text-5xl">
                Zest Clean
              </span>
            </div>
            <p className="mt-1 text-lg font-medium text-violet-700">
              Ultra Gloss Formula
            </p>

            <ul className="mt-3 flex flex-wrap gap-3 text-sm text-neutral-500">
              <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
                200 ml
              </li>
              <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
                Developed in India
              </li>
            </ul>
          </div>

          <Reveal animation="right" className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-200/50 to-fuchsia-100/40 blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_28px_64px_-28px_rgba(76,29,149,0.35)]">
              <div className="absolute left-4 top-4 z-10 rounded-full border border-violet-200/80 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-violet-800 shadow-sm backdrop-blur">
                Flagship Product
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={activeImage}
                  alt="Zest Clean Ultra Gloss Car Shampoo"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Image Thumbnails & Chips */}
            <div className="mt-6 flex flex-col gap-6">
              <div className="flex gap-4">
                {PRODUCT_IMAGES.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition-all ${
                      activeImage === img
                        ? "border-violet-600 ring-2 ring-violet-600/20"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Product view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { t: "pH 7", s: "Neutral" },
                  { t: "Ultra Gloss", s: "Formula" },
                  { t: "Eco-Safe", s: "Biodegradable" },
                ].map((chip) => (
                  <div
                    key={chip.t}
                    className="rounded-2xl border border-violet-100 bg-white px-3 py-3 text-center shadow-sm sm:px-4"
                  >
                    <p className="text-sm font-semibold text-neutral-900">
                      {chip.t}
                    </p>
                    <p className="text-xs text-neutral-500">{chip.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            {/* Desktop Heading - Only visible on large screens */}
            <div className="hidden lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600">
                Premium car shampoo
              </p>
              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="font-sans text-4xl font-bold text-neutral-900 sm:text-5xl">
                  Zest Clean
                </span>
              </div>
              <p className="mt-1 text-lg font-medium text-violet-700">
                Ultra Gloss Formula
              </p>

              <ul className="mt-3 flex flex-wrap gap-3 text-sm text-neutral-500">
                <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
                  200 ml
                </li>
                <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
                  Developed in India
                </li>
              </ul>
            </div>

            <p className="mt-6 leading-relaxed text-neutral-600">
              The ultimate car washing shampoo engineered for perfectionists.
              Our proprietary Ultra Gloss complex amplifies your paint&apos;s
              natural depth while a thick blanket of foam gently encapsulates
              every dust particle. Just one wash — and you&apos;ll see the
              difference.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {specs.map((row) => (
                <div
                  key={row.label}
                  className="rounded-xl border border-neutral-100 bg-white px-4 py-3 shadow-sm"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-neutral-900">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-amber-500">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-lg">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-sm text-neutral-600">
                <span className="font-semibold text-neutral-900">4.9</span> /
                5 from 8,420+ reviews
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-end gap-6 border-t border-neutral-200/80 pt-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  Starting at
                </p>
                <p className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-sans text-4xl font-extrabold tracking-tight text-neutral-900">
                    ₹299
                  </span>
                  <span className="text-sm font-medium text-neutral-500">
                    / 200 ml bottle
                  </span>
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 sm:justify-end">
                <Button size="lg" className="min-w-[140px] px-8" href="#contact">
                  Order Now
                </Button>
                <a
                  href="mailto:bulk@zestclean.in?subject=Bulk%20quote%20%E2%80%94%20Zest%20Clean"
                  className="inline-flex min-w-[140px] items-center justify-center rounded-full border-2 border-neutral-900 bg-transparent px-8 py-4 text-base font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                >
                  Bulk Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-violet-100/80 pt-16 text-center">
          <h3 className="font-serif text-2xl font-semibold text-neutral-900 sm:text-3xl">
            What Makes It Different
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            Every bottle is tuned for real driveways and real showrooms — not
            just lab charts.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} animation="up" delay={(i % 3) * 0.1}>
                <li
                  className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-violet-100/80 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-violet-50/30 opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-2xl bg-violet-50">
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <h4 className="relative text-xl font-bold text-neutral-900">
                    {h.title}
                  </h4>
                  <p className="relative mt-3 text-sm leading-relaxed text-neutral-600">
                    {h.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
