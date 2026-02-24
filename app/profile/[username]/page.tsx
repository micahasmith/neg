import { Wall } from "../../../components/Wall";
import { PublicTraitList } from "../../../components/PublicTraitList";

type PublicProfileProps = {
  params: { username: string };
};

const mockPublicTraits = [
  { trait: "Talks over people", count: 22, people: ["Avery", "Jamie", "Dakota"] },
  { trait: "Ghosts plans", count: 11, people: ["River", "Elliot"] }
];

export default function PublicProfilePage({ params }: PublicProfileProps) {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-slate-900/70 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400" />
          <div>
            <h1 className="text-2xl font-bold">{params.username}</h1>
            <p className="text-sm text-slate-300">City, State, Country</p>
          </div>
        </div>
      </div>

      <PublicTraitList traits={mockPublicTraits} />

      <Wall username={params.username} />
    </div>
  );
}
