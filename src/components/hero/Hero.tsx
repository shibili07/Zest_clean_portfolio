import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const PRODUCT = "/images/mainBanner.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[min(100vh,920px)] overflow-hidden bg-gradient-to-b from-violet-50/20 via-white to-white pb-12 sm:pb-16"
    >
      {/* Flowing depth field — soft 3D-style orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute -left-[15%] top-[-10%] h-[min(85vw,520px)] w-[min(85vw,520px)] rounded-full bg-gradient-to-br from-violet-400/45 via-fuchsia-300/35 to-transparent blur-3xl" />
        <div className="hero-orb hero-orb--delayed absolute -right-[20%] top-[20%] h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-gradient-to-bl from-indigo-400/40 via-violet-200/30 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,transparent,rgba(255,255,255,0.12)_45%,transparent_70%)]" />
        {/* Feather into About — soft white shade, no hard edge */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(48vh,400px)] bg-gradient-to-t from-white from-0% via-white/92 via-30% to-transparent to-100%"
          aria-hidden
        />
      </div>


      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pt-8 sm:px-6 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pt-14">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="mb-4 inline-flex items-center rounded-full border border-violet-200/80 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 shadow-[0_2px_16px_-4px_rgba(91,33,182,0.35)] backdrop-blur-md sm:text-sm">
              Premium car care
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="font-sans text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[3.75rem]">
              <span className="hero-headline-shine">
                Wash Smarter, Shine Brighter
              </span>
              <span className="mt-1 block text-neutral-900 lg:mt-2">
                Every Time.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg lg:mx-0">
              Ultra-gloss formula lifts grime, beads water, and protects your
              finish—so every wash feels like a detailer visit.
            </p>
          </Reveal>
          <Reveal delay={0.6} className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button
              size="lg"
              href="#products"
              className="border-b-4 border-neutral-950 bg-neutral-900 px-10 shadow-[0_10px_40px_-10px_rgba(91,33,182,0.75),0_6px_0_rgb(24,24,27),inset_0_1px_0_rgba(255,255,255,0.15)] transition hover:bg-neutral-800 hover:shadow-[0_14px_44px_-10px_rgba(91,33,182,0.55),0_6px_0_rgb(24,24,27)] active:translate-y-1 active:border-b-0 active:shadow-[0_6px_24px_-8px_rgba(91,33,182,0.5)]"
            >
              Shop Zest Clean
            </Button>
            <a
              href="#about"
              className="rounded-full border border-neutral-200/90 bg-white/70 px-6 py-3.5 text-sm font-semibold text-neutral-800 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] backdrop-blur-md transition hover:border-violet-200 hover:bg-white"
            >
              See how it works
            </a>
          </Reveal>
        </div>

        {/* 3D floating product stage */}
        <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div
            className="relative px-4 sm:px-0"
            style={{ perspective: "1200px" }}
          >
            <div className="hero-3d-card relative mx-auto w-[min(100%,480px)] lg:w-full">
              {/* Back glow planes */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/25 via-fuchsia-400/20 to-indigo-500/15 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -inset-2 rounded-[1.75rem] border border-white/50 bg-gradient-to-br from-white/50 to-violet-100/30 shadow-[0_32px_64px_-20px_rgba(76,29,149,0.45)]"
                style={{ transform: "translateZ(-40px)" }}
                aria-hidden
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/30 shadow-[0_28px_60px_-16px_rgba(49,46,129,0.5),inset_0_0_0_1px_rgba(255,255,255,0.65),0_0_80px_-20px_rgba(167,139,250,0.6)] backdrop-blur-[2px]">
                <div className="relative aspect-[5/4] w-full sm:max-h-[min(56vh,520px)]">
                  <Image
                    src={PRODUCT}
                    alt="Zest Clean premium car shampoo bottle with splash"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) min(100vw, 480px), 560px"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-tr from-white/20 via-transparent to-violet-200/15" />
              </div>

              {/* Floating glass chips — extra depth */}
              <div
                className="absolute -left-2 top-[18%] z-[2] hidden rounded-2xl border border-white/60 bg-white/55 px-4 py-2.5 shadow-[0_12px_32px_-8px_rgba(91,33,182,0.35)] backdrop-blur-md sm:block sm:-left-4 lg:left-[-8%]"
                style={{ transform: "translateZ(60px)" }}
              >
                <p className="text-xs font-bold text-violet-900">Ultra gloss</p>
                <p className="text-[10px] text-violet-600/90">pH-balanced</p>
              </div>
              <div
                className="absolute -right-2 bottom-[22%] z-[2] hidden rounded-2xl border border-white/60 bg-white/55 px-4 py-2.5 shadow-[0_12px_32px_-8px_rgba(91,33,182,0.35)] backdrop-blur-md sm:block sm:-right-4 lg:right-[-6%]"
                style={{ transform: "translateZ(80px)" }}
              >
                <p className="text-xs font-bold text-violet-900">
                  Shield coat
                </p>
                <p className="text-[10px] text-violet-600/90">200 ml</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
