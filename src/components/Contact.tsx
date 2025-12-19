"use client"; 

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28"
      aria-labelledby="contact-title"
    >
      <div className="rounded-3xl border border-blue-200/60 bg-white/70 p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2
              id="contact-title"
              className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
            >
              Contact Us
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Tell us what you’re building — we’ll reply with next steps.
            </p>

            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Email:</span> hello@leola-tech.com
              </div>
              <div>
                <span className="font-semibold text-slate-900">Location:</span> Remote / Hybrid
              </div>
            </div>
          </div>

          <form
            className="w-full max-w-xl"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Name
                <input
                  className="h-11 rounded-2xl border border-blue-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Email
                <input
                  className="h-11 rounded-2xl border border-blue-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-medium text-slate-800">
              Message
              <textarea
                className="min-h-28 resize-y rounded-2xl border border-blue-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                name="message"
                placeholder="What do you want to build?"
              />
            </label>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Send Message
              </button>
              <p className="text-xs text-slate-500">
                This is a frontend-only form (no backend yet).
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="mt-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Leola-tech. All rights reserved.
      </footer>
    </section>
  );
}
