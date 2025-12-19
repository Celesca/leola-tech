const solutions = [
  {
    title: "AI Solutions",
    description:
      "We design and integrate practical AI features: assistants, automation, and smarter workflows.",
    bullets: ["AI copilots", "RAG + search", "Automation"],
  },
  {
    title: "Website Development",
    description:
      "Modern, fast websites with clean UX, responsive design, and production-ready performance.",
    bullets: ["Next.js", "Design systems", "SEO-ready"],
  },
  {
    title: "Hackathon Consulting",
    description:
      "From idea to demo: we help you craft the story, build the prototype, and ship confidently.",
    bullets: ["Rapid prototyping", "Pitch support", "Demo polish"],
  },
] as const;

export function Solutions() {
  return (
    <section id="solutions" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Our Solutions
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Choose a lane or combine them — we build end-to-end.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="group rounded-3xl border border-blue-200/60 bg-white/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-600/15 to-sky-500/15 ring-1 ring-blue-200/60" />
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">{s.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700"
                >
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />

            <p className="mt-4 text-sm font-medium text-slate-800">
              Built with a clean white + blue theme.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
