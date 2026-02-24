import Link from "next/link";
import { PillSelector } from "../../../components/PillSelector";
import { StatCard } from "../../../components/StatCard";

const defaultTraits = [
  "Too loud",
  "Chronically late",
  "Bad listener",
  "Messy",
  "Drama magnet",
  "Flaky"
];

const mockStats = [
  { trait: "Interrupts people", count: 18, people: ["Sam", "Jules", "Riley"] },
  { trait: "Never tips", count: 7, people: ["Kai", "Morgan"] }
];

export default function MeProfilePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-slate-900/70 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-400 to-orange-400" />
          <div>
            <h1 className="text-2xl font-bold">Your profile</h1>
            <p className="text-sm text-slate-300">City, State, Country</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/80 p-4">
            <p className="text-sm text-slate-400">Today&apos;s shitty status</p>
            <p className="mt-2 text-lg font-semibold">&quot;Ghosted my group chat again.&quot;</p>
          </div>
          <div className="rounded-2xl bg-slate-950/80 p-4">
            <p className="text-sm text-slate-400">Public profile</p>
            <Link className="mt-2 inline-block text-brand-300" href="/profile/you">View your public page</Link>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-slate-900/70 p-6">
        <h2 className="text-xl font-semibold">Your self-declared worst traits</h2>
        <p className="mt-2 text-sm text-slate-300">
          Pick from the pills or type your own. Honesty hurts.
        </p>
        <PillSelector initialItems={defaultTraits} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mockStats.map((stat) => (
          <StatCard key={stat.trait} {...stat} />
        ))}
      </div>
    </div>
  );
}
