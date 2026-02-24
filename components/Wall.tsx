type WallProps = {
  username: string;
};

const mockWall = [
  {
    author: "Jules",
    text: "You duck accountability like it's your cardio.",
    replies: ["Facts.", "You sound hurt."]
  },
  {
    author: "Taylor",
    text: "Stop canceling plans last minute.",
    replies: ["They always do."]
  }
];

export function Wall({ username }: WallProps) {
  return (
    <div className="rounded-3xl bg-slate-900/70 p-6">
      <h2 className="text-xl font-semibold">{username}&apos;s wall</h2>
      <p className="mt-2 text-sm text-slate-300">Post a negative comment. Replies welcome.</p>
      <div className="mt-6 space-y-4">
        {mockWall.map((entry) => (
          <div key={entry.text} className="rounded-2xl bg-slate-950/80 p-4">
            <p className="text-sm font-semibold text-brand-200">{entry.author}</p>
            <p className="mt-2">{entry.text}</p>
            <div className="mt-3 space-y-2 text-xs text-slate-400">
              {entry.replies.map((reply) => (
                <p key={reply} className="rounded-2xl bg-slate-900 px-3 py-2">
                  {reply}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
