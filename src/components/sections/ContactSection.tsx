"use client";

import { Button } from "@/components/ui/Button";

const Icons = {
  MapPin: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Phone: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Mail: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Clock: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  Youtube: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
  ),
  MessageCircle: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
  ),
  ChevronDown: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  )
};

const contactDetails = [
  {
    icon: Icons.MapPin,
    title: "Address",
    content: "Zest Clean Industries, Plot 42, Industrial Area Phase-II, Gurugram, Haryana — 122001",
    link: "https://maps.google.com"
  },
  {
    icon: Icons.Phone,
    title: "Phone",
    content: "+91 98765 43210",
    link: "tel:+919876543210"
  },
  {
    icon: Icons.Mail,
    title: "Email",
    content: "hello@zestclean.in",
    link: "mailto:hello@zestclean.in"
  },
  {
    icon: Icons.Clock,
    title: "Business Hours",
    content: "Mon – Sat: 9:00 AM – 6:00 PM",
    subContent: "Sunday: Closed"
  }
];

const socialLinks = [
  { icon: Icons.Instagram, label: "Instagram", href: "#" },
  { icon: Icons.Globe, label: "Website", href: "#" },
  { icon: Icons.Youtube, label: "Youtube", href: "#" },
  { icon: Icons.MessageCircle, label: "Chat", href: "#" }
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 bg-white py-24 sm:py-32 lg:scroll-mt-32"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-violet-50/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/2 -translate-x-1/4 rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          
          {/* Left: Contact Info */}
          <div className="transition-all duration-700 ease-out opacity-100 translate-x-0">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">Contact Us</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Let&apos;s Talk Gloss
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-lg">
              Questions about Zest Clean? Bulk orders? Dealership enquiry? Our team is ready to help you get started today.
            </p>

            <div className="mt-12 space-y-8">
              {contactDetails.map((item) => (
                <div key={item.title} className="flex gap-5 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 border border-violet-100 transition-colors group-hover:bg-violet-600 group-hover:text-white">
                    <item.icon />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="mt-1 block text-sm text-neutral-600 transition hover:text-violet-600"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-neutral-600">{item.content}</p>
                    )}
                    {item.subContent && (
                      <p className="mt-0.5 text-xs text-neutral-400 font-medium">{item.subContent}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900">Follow Us</h4>
              <div className="mt-4 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 transition-all hover:bg-violet-600 hover:text-white hover:shadow-lg hover:shadow-violet-200"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative transition-all duration-700 delay-200 ease-out opacity-100 translate-y-0">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-violet-100/50 to-blue-100/50 blur-2xl opacity-50" />
            <form
              className="relative rounded-3xl border border-neutral-100 bg-white p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] sm:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="full-name" className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    className="mt-2 block w-full rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3.5 text-sm text-neutral-900 outline-none ring-violet-500/20 transition-all focus:border-violet-500/50 focus:ring-4"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3.5 text-sm text-neutral-900 outline-none ring-violet-500/20 transition-all focus:border-violet-500/50 focus:ring-4"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-2 block w-full rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3.5 text-sm text-neutral-900 outline-none ring-violet-500/20 transition-all focus:border-violet-500/50 focus:ring-4"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Subject
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="subject"
                      className="block w-full appearance-none rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3.5 text-sm text-neutral-900 outline-none ring-violet-500/20 transition-all focus:border-violet-500/50 focus:ring-4"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Enquiry</option>
                      <option value="bulk">Bulk / Wholesale</option>
                      <option value="dealership">Dealership Enquiry</option>
                      <option value="support">Product Support</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-400">
                      <Icons.ChevronDown />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-2 block w-full rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3.5 text-sm text-neutral-900 outline-none ring-violet-500/20 transition-all focus:border-violet-500/50 focus:ring-4"
                    placeholder="Tell us how we can help us..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="w-full !bg-neutral-900 !text-white hover:!bg-neutral-800">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
