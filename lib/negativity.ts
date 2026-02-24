import Filter from "bad-words";
import Sentiment from "sentiment";

const sentiment = new Sentiment();
const profanityFilter = new Filter();

export type NegativityResult = {
  ok: boolean;
  score: number;
  reason?: "too-positive" | "contains-positive";
};

export function validateNegative(text: string): NegativityResult {
  const score = sentiment.analyze(text).score;
  const containsProfanity = profanityFilter.isProfane(text);

  if (score >= 0 && !containsProfanity) {
    return { ok: false, score, reason: "too-positive" };
  }

  return { ok: true, score };
}
