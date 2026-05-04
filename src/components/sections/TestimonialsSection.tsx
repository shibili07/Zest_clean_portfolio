import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const testimonialsRow1 = [
  {
    quote: "We switched our bay shampoo to Zest Clean last season. Gloss is noticeably deeper and customers comment on it.",
    name: "Arjun Mehta",
    role: "Studio Auto Spa, Mumbai",
    avatar: "/images/avatar-1.png",
  },
  {
    quote: "Finally a shampoo that doesn’t strip my coating. Foam is ridiculous in a good way — one cap in the foam cannon.",
    name: "Priya Nair",
    role: "Weekend enthusiast, Bengaluru",
    avatar: "/images/avatar-2.png",
  },
  {
    quote: "Bulk orders for our dealership fleet have been painless. Consistent dilution charts and same finish bay to bay.",
    name: "Vikram Singh",
    role: "Fleet operations, Pune",
    avatar: "/images/avatar-3.png",
  },
  {
    quote: "The slickness during the wash is unmatched. It feels like the mitt is gliding on air. Best shampoo in the market.",
    name: "Sanjay Rao",
    role: "Professional Detailer",
    avatar: "/images/avatar-1.png",
  },
];

const testimonialsRow2 = [
  {
    quote: "I've tried every brand out there, but Zest Clean's pH neutral formula is the only one I trust on my vintage collection.",
    name: "Kabir Khan",
    role: "Vintage Car Collector",
    avatar: "/images/avatar-3.png",
  },
  {
    quote: "The citrus scent is refreshing but not overpowering. It makes the whole washing experience so much more enjoyable.",
    name: "Anjali Gupta",
    role: "Car Enthusiast",
    avatar: "/images/avatar-2.png",
  },
  {
    quote: "Impressive water sheeting after the rinse. Drying the car has never been this fast. Highly recommended!",
    name: "Rahul Verma",
    role: "Daily Driver",
    avatar: "/images/avatar-1.png",
  },
  {
    quote: "Professional grade results at home. My car looks like it just came out of a detailing studio every single week.",
    name: "Meera Joshi",
    role: "Premium Member",
    avatar: "/images/avatar-2.png",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <Reveal>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 shadow-xl">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-xs font-medium text-white">
                Rated 4.8/5 by over 1 Lakh users
              </p>
            </div>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={2}>
          <h2 className="mt-8 text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Words of praise from others <br className="hidden sm:block" />
            about our presence.
          </h2>
        </Reveal>
      </div>

      {/* Marquee Rows */}
      <div className="mt-20 flex flex-col gap-8">
        {/* Row 1 - Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-6 px-4">
            {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right (Reversed) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-6 px-4">
            {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

function TestimonialCard({ quote, name, role, avatar }: TestimonialProps) {
  return (
    <Reveal animation="scale" className="w-[380px] flex-shrink-0">
      <div className="rounded-[2rem] bg-neutral-50 p-8 transition-colors hover:bg-neutral-100 h-full">
        {/* Quote Icon */}
        <div className="mb-6 text-violet-600">
          <svg width="24" height="18" viewBox="0 0 40 30" fill="currentColor">
            <path d="M0 15V0H15V15H7.5C7.5 19.1421 10.8579 22.5 15 22.5V30C6.71573 30 0 23.2843 0 15Z" />
            <path d="M25 15V0H40V15H32.5C32.5 19.1421 35.8579 22.5 40 22.5V30C31.7157 30 25 23.2843 25 15Z" />
          </svg>
        </div>

        <p className="text-base leading-relaxed text-neutral-700">
          {quote}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900">{name}</p>
            <p className="text-[11px] font-medium text-neutral-500">{role}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
