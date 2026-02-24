import Link from "next/link";

const featureBullets = [
  "This is a negativity-only site",
  "Bring your full inner hater",
  "Inspired by 50 Cent",
  "We use AI to ensure only negative communication occurs"
];

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="rounded-3xl bg-gradient-to-br from-brand-500 via-fuchsia-500 to-orange-400 p-10 text-slate-950 shadow-xl">
        <h1 className="text-4xl font-black md:text-5xl">Tell your friends just how shitty they are.</h1>
        <p className="mt-4 text-lg font-medium">
          Someone needs to tell them and that person is you and that time is now.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/signup"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-slate-950/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950"
          >
            Log in
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold text-brand-200">How it works</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200">
            <li>1. Sign in with Google or Instagram.</li>
            <li>2. List your own worst traits.</li>
            <li>3. Let everyone else add theirs and roast you on your wall.</li>
          </ol>
        </div>
        <div className="rounded-2xl bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold text-brand-200">Negativity checklist</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {featureBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
