type PublicTrait = {
  trait: string;
  count: number;
  people: string[];
};

type PublicTraitListProps = {
  traits: PublicTrait[];
};

export function PublicTraitList({ traits }: PublicTraitListProps) {
  return (
    <div className="rounded-3xl bg-slate-900/70 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Community-reported negatives</h2>
        <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950">
          Add your list
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {traits.map((trait) => (
          <div key={trait.trait} className="rounded-2xl bg-slate-950/80 p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{trait.trait}</p>
              <span className="text-sm text-slate-400">{trait.count} votes</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
              {trait.people.map((person) => (
                <span key={person} className="rounded-full bg-slate-800 px-2 py-1">
                  {person}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
