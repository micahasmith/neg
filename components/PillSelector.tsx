"use client";

import { useState } from "react";

type PillSelectorProps = {
  initialItems: string[];
};

export function PillSelector({ initialItems }: PillSelectorProps) {
  const [items, setItems] = useState(initialItems);
  const [input, setInput] = useState("");

  const addItem = () => {
    const value = input.trim();
    if (!value) return;
    setItems((prev) => Array.from(new Set([...prev, value])));
    setInput("");
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-brand-600/30 px-3 py-1 text-xs text-brand-100">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add a custom negative trait"
          className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm"
        />
        <button
          type="button"
          onClick={addItem}
          className="rounded-2xl bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          Add
        </button>
      </div>
    </div>
  );
}
