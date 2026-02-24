import Link from "next/link";
import { OAuthButton } from "../../../components/OAuthButton";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-lg space-y-8 rounded-3xl bg-slate-900/80 p-8">
      <div>
        <h1 className="text-3xl font-bold">Log in</h1>
        <p className="mt-2 text-sm text-slate-300">
          Negativity only. Bring proof you&apos;re a real hater.
        </p>
      </div>
      <div className="space-y-4">
        <OAuthButton provider="Google" />
        <OAuthButton provider="Instagram" />
      </div>
      <p className="text-sm text-slate-400">
        Don&apos;t have an account? <Link className="text-brand-300" href="/signup">Sign up</Link>
      </p>
    </div>
  );
}
