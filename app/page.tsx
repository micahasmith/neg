import Link from "next/link";

const featureBullets = [
  "This is a negativity-only site",
  "Bring your full inner hater",
  "Inspired by 50 Cent",
  "We use AI to ensure only negative communication occurs"
];

const statCards = [
  { label: "Negative traits logged", value: "184,210" },
  { label: "Walls roasted today", value: "8,420" },
  { label: "Public callouts", value: "56,900" }
];

const vibeCards = [
  {
    title: "Self-report first",
    body: "Start with your own worst traits. Honesty unlocks everyone else’s honesty."
  },
  {
    title: "Community pile-on",
    body: "Friends (and enemies) add their picks, with receipts and counts."
  },
  {
    title: "Wall of shame",
    body: "Post the mean thing you’ve been holding back. Replies welcome."
  }
];

export default function HomePage() {
  return (
    <section className="space-y-14">
      <div className="relative overflow-hidden rounded-[32px] bg-slate-900/70 p-10 shadow-2xl">
        <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-brand-500/40 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute right-16 bottom-10 h-40 w-40 rounded-full bg-orange-400/40 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              Negativity only
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Tell your friends just how shitty they are.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200">
              Someone needs to tell them and that person is you and that time is now. Bring your full inner hater.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950"
              >
                Sign up
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-slate-600/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-100"
              >
                Log in
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {statCards.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold text-brand-200">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-gradient-to-br from-brand-500 via-fuchsia-500 to-orange-400 p-6 text-slate-950">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Featured wall</p>
              <p className="mt-4 text-lg font-bold">“You ghost plans like it’s cardio.”</p>
              <p className="mt-2 text-sm font-medium">— Riley</p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">Live roast</p>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <p className="rounded-2xl bg-slate-900 px-4 py-3">“Stop overtalking everyone.” — Dani</p>
                <p className="rounded-2xl bg-slate-900 px-4 py-3">“Never tips.” — Ashton</p>
                <p className="rounded-2xl bg-slate-900 px-4 py-3">“Brings chaos to every plan.” — Jules</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {vibeCards.map((card) => (
          <div key={card.title} className="rounded-3xl bg-slate-900/70 p-6">
            <h2 className="text-lg font-semibold text-brand-200">{card.title}</h2>
            <p className="mt-3 text-sm text-slate-200">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold text-brand-200">How it works</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200">
            <li>1. Sign in with Google or Instagram.</li>
            <li>2. List your own worst traits.</li>
            <li>3. Let everyone else add theirs and roast you on your wall.</li>
          </ol>
          <div className="mt-6 rounded-2xl bg-slate-950/80 p-4 text-sm text-slate-300">
            <p className="font-semibold text-brand-200">AI moderation</p>
            <p className="mt-2">Positive or neutral posts get blocked. The vibe stays negative-only.</p>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold text-brand-200">Negativity checklist</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {featureBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="rounded-full bg-slate-950 px-3 py-1">No toxic positivity</span>
            <span className="rounded-full bg-slate-950 px-3 py-1">Receipts encouraged</span>
            <span className="rounded-full bg-slate-950 px-3 py-1">Walls never forget</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/70 to-brand-500/30 p-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-bold">Ready to get humbled?</h2>
            <p className="mt-3 text-sm text-slate-200">
              Tell your friends. Tell yourself. Bring the full inner hater and let the public decide.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link
              href="/signup"
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950"
            >
              Start roasting
            </Link>
            <Link
              href="/profile/me"
              className="rounded-full border border-slate-600/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-100"
            >
              See your profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
