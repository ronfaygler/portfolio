import { contactLinks, profile } from "../data/portfolioData";
import type { ContactLink } from "../data/types";
import { SectionHeading } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="bg-white pt-24 pb-36 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading eyebrow="Get In Touch" title="Let's Work Together" />

        <div className="flex flex-wrap items-center justify-center gap-4">
          {contactLinks.map((link) => (
            <ContactPill key={link.label} link={link} />
          ))}
        </div>

        <p className="mt-16 text-sm text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}

const BRAND_COLORS: Record<ContactLink["icon"], string> = {
  linkedin: "#0A66C2",
  github: "#181717",
  email: "#EA4335",
  whatsapp: "#25D366",
};

function ContactPill({ link }: { link: ContactLink }) {
  return (
    <a
      href={link.url}
      target={link.icon === "email" ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-full border border-slate-200 py-2.5 pl-2.5 pr-5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:text-slate-200"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: BRAND_COLORS[link.icon] }}
      >
        <ContactIcon icon={link.icon} />
      </span>
      {link.label}
    </a>
  );
}

function ContactIcon({ icon }: { icon: ContactLink["icon"] }) {
  switch (icon) {
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "email":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 22c-1.741 0-3.451-.469-4.939-1.357L3 22l1.395-4.048A9.933 9.933 0 012.05 12C2.05 6.51 6.56 2 12.05 2c5.49 0 10 4.51 10 10s-4.51 10-10 10z" />
        </svg>
      );
  }
}
