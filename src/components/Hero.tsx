import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-[-10%] h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Modern solutions, built fast
            </div>

            <h1
              id="hero-title"
              className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl"
            >
              Build with confidence. Ship with Leola-tech.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-slate-600">
              We help teams turn ideas into production-ready products — from AI-powered
              experiences to modern websites and hackathon consulting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#solutions"
                className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Explore Solutions
              </Link>
              <Link
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-full border border-blue-200 bg-white/70 px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Our Projects
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm">
                <dt className="text-xs font-semibold text-slate-500">Focus</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">White + Blue UI</dd>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm">
                <dt className="text-xs font-semibold text-slate-500">Speed</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">Weeks → Days</dd>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm">
                <dt className="text-xs font-semibold text-slate-500">Quality</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">Production-ready</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-blue-200/60 bg-white/70 p-6 shadow-lg">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-sky-400/10" />

              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">Leola-tech Studio</div>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="h-3 w-2/3 rounded bg-slate-200" />
                <div className="h-3 w-full rounded bg-slate-200" />
                <div className="h-3 w-5/6 rounded bg-slate-200" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="text-xs font-semibold text-blue-700">AI</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">Product copilots</div>
                  <div className="mt-2 h-2 w-4/5 rounded bg-slate-200" />
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="text-xs font-semibold text-blue-700">Web</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">Modern landing pages</div>
                  <div className="mt-2 h-2 w-3/5 rounded bg-slate-200" />
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-[1px]">
                <div className="rounded-2xl bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-500">Next milestone</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">Launch & iterate</div>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-blue-600/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 animate-float rounded-3xl bg-blue-600/10 motion-reduce:hidden" />
            <div className="pointer-events-none absolute -bottom-8 left-10 h-28 w-28 animate-float-delayed rounded-full bg-sky-500/10 motion-reduce:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
