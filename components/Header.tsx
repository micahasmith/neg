import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-tight text-brand-300">
          neg
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-300">
          <Link href="/profile/me" className="hover:text-white">
            My profile
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link href="/legal" className="hover:text-white">
            Legal
          </Link>
        </nav>
      </div>
    </header>
  );
}
