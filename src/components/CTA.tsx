"use client";

import { useState, type FormEvent } from "react";

const audienceOptions = ["~1K", "1K–10K", "10K–100K", "100K+"];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="apply" className="border-t border-border/40 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[580px] px-6">
        <div className="text-center">
          <h2 className="text-[28px] font-bold tracking-tight text-foreground md:text-[40px]">
            It starts with a
            <br />
            <span className="text-accent">30-minute conversation.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-muted md:text-[17px]">
            We&apos;re in pilot phase, looking for founding creators to build with.
            Join the interview and we&apos;ll craft a tailored proposal for your IP.
          </p>
        </div>

        {submitted ? (
          <div className="mt-12 rounded-2xl border border-green/30 bg-green/5 p-8 text-center md:p-10">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green/10">
              <svg className="h-6 w-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-foreground">Application submitted!</h3>
            <p className="mt-2 text-[15px] text-muted">
              We&apos;ll reach out within 3 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-muted">
                  Name / Alias <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-[14px] text-foreground transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:outline-none"
                  placeholder="Your creator name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-muted">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-[14px] text-foreground transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="ip" className="mb-1.5 block text-[13px] font-medium text-muted">
                Describe your IP in one line <span className="text-accent">*</span>
              </label>
              <input
                id="ip"
                name="ip"
                type="text"
                required
                className="h-11 w-full rounded-xl border border-border bg-background px-4 text-[14px] text-foreground transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:outline-none"
                placeholder="e.g. A fantasy webtoon about a cursed knight"
              />
            </div>

            <div>
              <label htmlFor="link" className="mb-1.5 block text-[13px] font-medium text-muted">
                Link to your IP (SNS, portfolio, etc.)
              </label>
              <input
                id="link"
                name="link"
                type="url"
                className="h-11 w-full rounded-xl border border-border bg-background px-4 text-[14px] text-foreground transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:outline-none"
                placeholder="https://"
              />
            </div>

            <div>
              <label htmlFor="audience" className="mb-1.5 block text-[13px] font-medium text-muted">
                Approximate fandom size
              </label>
              <select
                id="audience"
                name="audience"
                className="h-11 w-full appearance-none rounded-xl border border-border bg-background px-4 text-[14px] text-foreground transition-colors focus:border-accent/50 focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select range
                </option>
                {audienceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-muted">
                Anything else?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-[14px] text-foreground transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:outline-none"
                placeholder="Questions, ideas, or just say hi"
              />
            </div>

            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-full bg-accent text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Apply for Interview
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
