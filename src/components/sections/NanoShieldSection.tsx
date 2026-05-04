import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function NanoShieldSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-bold text-violet-400">
               New Formula 2024
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">NanoShield Pro</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Our latest breakthrough — nanotechnology-infused formula that bonds with paint at the molecular level. Hydrophobic coating, UV protection, and mirror-like shine in a single wash.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { icon: "/images/feat-fast-acting.png", label: "Fast-Acting", sub: "Speed Tech" },
                { icon: "/images/feat-uv-shield.png", label: "UV Shield", sub: "Paint Protection" },
                { icon: "/images/feat-easy-rinse.png", label: "Hydrophobic", sub: "Water Repelling" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:bg-white/10">
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src={item.icon} alt={item.label} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.label}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button size="lg" className="!bg-white !text-slate-950 hover:!bg-slate-100" href="#contact">
                Shop NanoShield Pro
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-violet-600/30 to-blue-600/30 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-2xl">
              <Image
                src="/images/nanoshield-pro.png"
                alt="NanoShield Pro Product Bottle"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 hidden rounded-2xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur-xl sm:block">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-400">Technology</p>
                <p className="mt-1 text-2xl font-bold text-white">Nano-Infused</p>
                <p className="text-sm text-slate-400">Molecular Bond Protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
