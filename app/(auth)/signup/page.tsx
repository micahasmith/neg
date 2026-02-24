import Link from "next/link";
import { OAuthButton } from "../../../components/OAuthButton";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-lg space-y-8 rounded-3xl bg-slate-900/80 p-8">
      <div>
        <h1 className="text-3xl font-bold">Sign up</h1>
        <p className="mt-2 text-sm text-slate-300">
          Google or Instagram only. We need your receipts.
        </p>
      </div>
      <div className="space-y-4">
        <OAuthButton provider="Google" />
        <OAuthButton provider="Instagram" />
      </div>
      <p className="text-sm text-slate-400">
        Already have an account? <Link className="text-brand-300" href="/login">Log in</Link>
      </p>
    </div>
  );
}
