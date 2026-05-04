"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, Sparkles, Award, MapPin } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });
  
  const displayValue = useTransform(spring, (latest) => Math.floor(latest));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setCurrent(latest);
    });
  }, [displayValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {current}
      {suffix}
    </span>
  );
}

const trustStats = [
  {
    label: "Happy Customers",
    value: 50000,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Premium Products",
    value: 25,
    suffix: "+",
    icon: Sparkles,
  },
  {
    label: "Years Experience",
    value: 10,
    suffix: "+",
    icon: Award,
  },
  {
    label: "Cities Served",
    value: 100,
    suffix: "+",
    icon: MapPin,
  },
];

export function TrustBar() {
  return (
    <div className="relative z-20 -mt-12 sm:-mt-16 lg:-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-[2rem] sm:rounded-[2.5rem] border border-violet-100/50 bg-white/60 p-6 sm:p-8 lg:p-10 shadow-[0_32px_64px_-16px_rgba(139,92,246,0.12)] backdrop-blur-2xl"
      >
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 md:grid-cols-4 md:gap-x-0">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group flex flex-col items-center text-center px-2 sm:px-4 ${
                i % 2 === 0 ? "border-r border-violet-50/50 md:border-r" : "md:border-r"
              } ${
                i === trustStats.length - 1 ? "border-none" : ""
              } ${
                i === 1 ? "md:border-r border-none" : ""
              }`}
            >
              <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-50 to-white shadow-sm ring-1 ring-violet-100/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:ring-violet-200">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-violet-600 transition-colors duration-500 group-hover:text-violet-700" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <p className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-[2.75rem]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-400 sm:text-[10px] lg:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}


