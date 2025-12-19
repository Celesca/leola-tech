export function Team() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby="team-title"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2
            id="team-title"
            className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
          >
            Our Team
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">
            A small, focused team with a builder mindset.
          </p>

          <div className="mt-8 rounded-3xl border border-blue-200/60 bg-white/70 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-sm">
                <span className="text-sm font-semibold">LT</span>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-950">Leola Tech Lead</div>
                <div className="text-sm text-slate-600">Founder • Engineer</div>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
              <p>
                History: started as a hackathon team focused on shipping fast and learning
                by building. Today, we apply that same energy to client work — mixing clean
                UI, solid engineering, and practical AI.
              </p>
              <p>
                We care about clarity, speed, and delivering real outcomes.
              </p>
            </div>
          </div>
        </div>

        <div id="projects" className="rounded-3xl border border-blue-200/60 bg-white/70 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Our Projects</h3>
          <p className="mt-2 text-sm text-slate-600">
            A showcase section you can expand with real case studies.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <div className="text-xs font-semibold text-blue-700">Project</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">Leola-tech Website</div>
              <div className="mt-2 text-sm text-slate-600">
                A modern white + blue landing page with a crisp grid background.
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <div className="text-xs font-semibold text-blue-700">Project</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">AI Assist Experiments</div>
              <div className="mt-2 text-sm text-slate-600">
                Prototypes for copilots, automation flows, and smarter search.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
