import type { Priority } from "../types/planning";

export function normalizePriorityWeights(values: Priority[]): Priority[] {
  if (values.length === 0) return values;

  const total = values.reduce(
    (sum, priority) => sum + Math.max(0, priority.weight),
    0,
  );

  if (total <= 0) {
    const base = Math.floor(100 / values.length);
    let remainder = 100 - base * values.length;

    return values.map((priority) => {
      const extra = remainder > 0 ? 1 : 0;
      if (remainder > 0) remainder--;

      return { ...priority, weight: base + extra };
    });
  }

  const exact = values.map((priority) => ({
    priority,
    value: (Math.max(0, priority.weight) / total) * 100,
  }));

  const result = exact.map(({ priority, value }) => ({
    ...priority,
    weight: Math.floor(value),
  }));

  let remaining =
    100 - result.reduce((sum, priority) => sum + priority.weight, 0);

  const fractions = exact
    .map(({ value }, index) => ({
      index,
      fraction: value - Math.floor(value),
    }))
    .sort((a, b) => b.fraction - a.fraction);

  for (let i = 0; i < remaining; i++) {
    result[fractions[i % fractions.length].index].weight++;
  }

  return result;
}
