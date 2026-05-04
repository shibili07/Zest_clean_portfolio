import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ABOUT_IMG = "/images/about_v2.png";

const pillars = [

  {
    title: "Science-Backed",
    description: "Formulas developed by automotive chemists for maximum clean.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H15M10 9H14M10 14H14M12 3V21M12 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12M12 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Eco-Responsible",
    description: "Biodegradable ingredients — safe for your car and the planet.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V12M12 12L15 9M12 12L9 9M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Certified Quality",
    description: "ISO-certified manufacturing with strict quality control.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Customer-First",
    description: "Dedicated support team ready to help you find the right product.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 17.0217 15.8284 16.2716C15.0783 15.5214 14.1609 15.1 13.1 15.1H10.9C9.83913 15.1 8.92174 15.5214 8.17157 16.2716C7.4214 17.0217 7 17.9391 7 19V21M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content Left */}
          <Reveal animation="right" className="relative">
            <SectionHeading
              eyebrow="Our Story"
              title="The Pursuit of the Perfect Gloss"
              subtitle="Zest Clean was born in 2014 from a simple frustration: car care products that promised a lot but delivered little. We set out to change that."
            />

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>
                After three years of intensive lab testing and real-world detailing trials, our 
                <span className="font-semibold text-violet-700"> Ultra Gloss Formula</span> was perfected. 
                What started as a passion project in a small garage is now a brand trusted by thousands.
              </p>
              <p>
                Today, Zest Clean is more than just a shampoo; it&apos;s a commitment to automotive excellence. 
                We combine cutting-edge chemistry with a deep love for cars to bring you products 
                that make every wash feel like a showroom reveal.
              </p>
            </div>

            {/* Founders' Note */}
            <div className="mt-12 overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50/50 to-white p-8 shadow-[0_20px_50px_-20px_rgba(139,92,246,0.15)] backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-violet-300">“</div>
                <div>
                  <p className="font-sans text-xl font-bold tracking-tight leading-snug text-neutral-800">
                    &ldquo;We built Zest Clean for the enthusiasts who find peace in the process of 
                    detailing, and pride in the final reflection.&rdquo;
                  </p>
                  <p className="mt-6 text-sm font-bold tracking-widest uppercase text-violet-600">
                    — The Zest Clean Founders
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Visuals Right */}
          <Reveal animation="scale" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.3)]">
              <Image
                src={ABOUT_IMG}
                alt="Premium Car Detailing"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
          </Reveal>

        </div>

        {/* Pillars / Values */}
        <div className="mt-32">
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Why Detailers Choose Us</h3>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-violet-600" />
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} animation="up" delay={i * 0.1}>
                <div
                  className="group relative overflow-hidden rounded-3xl border border-neutral-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_30px_60px_-20px_rgba(139,92,246,0.15)] h-full"
                >
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white">
                      {pillar.icon}
                    </div>
                    <h4 className="mb-3 text-lg font-bold text-neutral-900">{pillar.title}</h4>
                    <p className="text-sm leading-relaxed text-neutral-600">{pillar.description}</p>
                  </div>
                  {/* Hover Background Pattern */}
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-violet-50/50 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

