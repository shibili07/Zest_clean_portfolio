import Link from "next/link";

const Icons = {
  Phone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Mail: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  Users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Youtube: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
  ),
  Twitter: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
  ShieldCheck: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  Truck: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4"/><path d="M14 7h4"/><path d="M2 11h20"/><path d="M2 15h20"/><path d="M3 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="M8 7V3h4"/><path d="M12 7V3h4"/></svg>
  ),
  CheckCircle: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  )
};

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Ultra Gloss Formula", href: "#" },
      { label: "Coming Soon: Glass Cleaner", href: "#", disabled: true },
      { label: "Coming Soon: Tire Shine", href: "#", disabled: true },
      { label: "Coming Soon: Interior Spray", href: "#", disabled: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "How to Use", href: "#" },
      { label: "Shipping Policy", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </span>
              ZestClean
            </Link>
            <p className="mt-6 text-base leading-relaxed">
              India&apos;s premium Ultra Gloss car shampoo — trusted by 50,000+ customers, detailers, and fleet managers across 100+ cities.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 transition hover:text-white">
                <Icons.Phone />
                <span className="text-sm font-medium">+91 98765 43210</span>
              </a>
              <a href="mailto:hello@zestclean.in" className="flex items-center gap-3 transition hover:text-white">
                <Icons.Mail />
                <span className="text-sm font-medium">hello@zestclean.in</span>
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              {[
                { icon: Icons.Instagram, label: "Instagram" },
                { icon: Icons.Users, label: "Community" },
                { icon: Icons.Youtube, label: "Youtube" },
                { icon: Icons.Twitter, label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 transition-all hover:bg-violet-600 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                  {group.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.disabled ? (
                        <span className="text-sm opacity-50">{link.label}</span>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm transition hover:text-white"
                        >
                          {group.title === "Products" && !link.label.includes("Soon") ? (
                            <span className="inline-flex items-center gap-2">
                              {link.label}
                              <span className="h-1 w-1 rounded-full bg-violet-500" />
                            </span>
                          ) : (
                            link.label
                          )}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Area */}
        <div className="mt-20 border-t border-neutral-900 pt-10">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <p className="text-sm">
              &copy; 2026 Zest Clean Industries Pvt. Ltd. All rights reserved.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                <Icons.ShieldCheck />
                Secure Payments
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                <Icons.Truck />
                Fast Delivery
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                <Icons.CheckCircle />
                ISO Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
