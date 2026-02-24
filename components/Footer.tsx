import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-200">neg</p>
          <p>Negativity only. All vibes verified.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/legal" className="hover:text-white">Legal</Link>
        </div>
        <div className="rounded-2xl bg-slate-900/70 px-4 py-3 text-xs text-slate-300">
          Footer ad slot
        </div>
      </div>
    </footer>
  );
}
