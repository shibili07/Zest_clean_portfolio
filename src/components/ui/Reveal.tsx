"use client";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  animation?: "up" | "right" | "scale";
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  animation = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClass = {
    up: "reveal-up",
    right: "reveal-right",
    scale: "reveal-scale",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : "reveal-hidden"} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
