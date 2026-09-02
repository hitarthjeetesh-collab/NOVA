import type { MapPoint, Point2D } from "../types/planning";

export function subtract(a: Point2D, b: Point2D): Point2D {
  return { x: a.x - b.x, y: a.y - b.y };
}

export function add(a: Point2D, b: Point2D): Point2D {
  return { x: a.x + b.x, y: a.y + b.y };
}

export function multiply(point: Point2D, scalar: number): Point2D {
  return { x: point.x * scalar, y: point.y * scalar };
}

export function cross(a: Point2D, b: Point2D): number {
  return a.x * b.y - a.y * b.x;
}

export function dot(a: Point2D, b: Point2D): number {
  return a.x * b.x + a.y * b.y;
}

export function distance(a: Point2D, b: Point2D): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function isInsidePolygon(point: Point2D, points: MapPoint[]): boolean {
  if (points.length < 3) return false;

  let sign = 0;

  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const edge = subtract(b, a);
    const toPoint = subtract(point, a);
    const value = cross(edge, toPoint);

    if (Math.abs(value) < 0.000001) continue;

    const currentSign = Math.sign(value);

    if (sign === 0) {
      sign = currentSign;
    } else if (currentSign !== sign) {
      return false;
    }
  }

  return true;
}

export function closestPointOnSegment(
  point: Point2D,
  a: Point2D,
  b: Point2D,
): Point2D {
  const segment = subtract(b, a);
  const lengthSquared = dot(segment, segment);

  if (lengthSquared <= 0.000001) {
    return { x: a.x, y: a.y };
  }

  const fromA = subtract(point, a);
  let t = dot(fromA, segment) / lengthSquared;
  t = Math.max(0, Math.min(1, t));

  return add(a, multiply(segment, t));
}

export function clampToPolygon(
  point: Point2D,
  points: MapPoint[],
  center: number,
): Point2D {
  if (points.length < 3) {
    return { x: center, y: center };
  }

  if (isInsidePolygon(point, points)) {
    return { x: point.x, y: point.y };
  }

  let closest: Point2D = { x: points[0].x, y: points[0].y };
  let closestDistance = Infinity;

  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];

    const candidate = closestPointOnSegment(point, a, b);
    const candidateDistance = distance(point, candidate);

    if (candidateDistance < closestDistance) {
      closestDistance = candidateDistance;
      closest = candidate;
    }
  }

  return closest;
}

export function calculateWeights(
  point: Point2D,
  points: MapPoint[],
): number[] {
  const count = points.length;

  if (count === 0) return [];
  if (count === 1) return [100];

  if (count === 2) {
    const a = points[0];
    const b = points[1];
    const segment = subtract(b, a);
    const lengthSquared = dot(segment, segment);

    if (lengthSquared <= 0.000001) return [50, 50];

    let t = dot(subtract(point, a), segment) / lengthSquared;
    t = Math.max(0, Math.min(1, t));

    return [(1 - t) * 100, t * 100];
  }

  for (let i = 0; i < count; i++) {
    if (distance(point, points[i]) < 0.0001) {
      return points.map((_, index) => (index === i ? 100 : 0));
    }
  }

  const vectors = points.map((vertex) => subtract(vertex, point));
  const lengths = vectors.map((vector) => Math.hypot(vector.x, vector.y));
  const rawWeights = new Array<number>(count).fill(0);

  for (let i = 0; i < count; i++) {
    const previousIndex = (i - 1 + count) % count;
    const nextIndex = (i + 1) % count;

    const current = vectors[i];
    const previous = vectors[previousIndex];
    const next = vectors[nextIndex];
    const currentLength = lengths[i];

    if (currentLength < 0.000001) {
      return points.map((_, index) => (index === i ? 100 : 0));
    }

    const previousLength = lengths[previousIndex];
    const nextLength = lengths[nextIndex];

    let previousCos =
      dot(previous, current) / (previousLength * currentLength);
    let nextCos =
      dot(current, next) / (currentLength * nextLength);

    previousCos = Math.max(-1, Math.min(1, previousCos));
    nextCos = Math.max(-1, Math.min(1, nextCos));

    const previousAngle = Math.acos(previousCos);
    const nextAngle = Math.acos(nextCos);

    const previousHalfTangent = Math.tan(previousAngle / 2);
    const nextHalfTangent = Math.tan(nextAngle / 2);

    rawWeights[i] =
      (previousHalfTangent + nextHalfTangent) / currentLength;
  }

  const total = rawWeights.reduce((sum, value) => sum + value, 0);

  if (!Number.isFinite(total) || total <= 0) {
    return new Array(count).fill(100 / count);
  }

  return rawWeights.map((weight) => (weight / total) * 100);
}

export function getWeightedCenter(
  priorities: { weight: number }[],
  points: MapPoint[],
  center: number,
): Point2D {
  if (points.length === 0) return { x: center, y: center };

  const totalWeight = priorities.reduce(
    (sum, priority) => sum + priority.weight,
    0,
  );

  if (totalWeight <= 0) return { x: center, y: center };

  return priorities.reduce(
    (result, priority, index) => {
      const vertex = points[index];
      const normalized = priority.weight / totalWeight;

      return {
        x: result.x + vertex.x * normalized,
        y: result.y + vertex.y * normalized,
      };
    },
    { x: 0, y: 0 },
  );
}
