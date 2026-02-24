"use client";

import { signIn } from "next-auth/react";

type OAuthButtonProps = {
  provider: "Google" | "Instagram";
};

export function OAuthButton({ provider }: OAuthButtonProps) {
  return (
    <button
      type="button"
      onClick={() => signIn(provider.toLowerCase())}
      className="flex w-full items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-semibold"
    >
      Continue with {provider}
      <span className="text-xs text-slate-500">OAuth</span>
    </button>
  );
}
