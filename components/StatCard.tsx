type StatCardProps = {
  trait: string;
  count: number;
  people: string[];
};

export function StatCard({ trait, count, people }: StatCardProps) {
  return (
    <div className="rounded-3xl bg-slate-900/70 p-6">
      <p className="text-sm text-slate-400">Most said</p>
      <h3 className="mt-2 text-xl font-semibold">{trait}</h3>
      <p className="mt-2 text-sm text-slate-300">{count} times</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        {people.map((person) => (
          <span key={person} className="rounded-full bg-slate-800 px-2 py-1">
            {person}
          </span>
        ))}
      </div>
    </div>
  );
}
