export function generateRandomDataWithWhitespace(
  count: number,
  startTime: string,
  startValue: number,
  volatility: number,
  whitespaceProbability: number
): { time: number | string; value?: number }[] {
  const data = [];
  let currentTimestamp = new Date(startTime).getTime() / 1000; // Convert to seconds
  let currentValue = startValue;

  for (let i = 0; i < count; i++) {
    const isWhitespace =
      i >= count - 30 || Math.random() < whitespaceProbability;

    if (isWhitespace) {
      data.push({
        time: currentTimestamp,
      });
    } else {
      const randomMovement = (Math.random() - 0.5) * volatility;
      currentValue += randomMovement;

      data.push({
        time: currentTimestamp,
        value: Math.max(currentValue, 0),
      });
    }

    currentTimestamp += 60;
  }

  return data;
}

export const initialData = generateRandomDataWithWhitespace(
  200,
  "2024-02-01T17:52:00.000Z",
  1.164,
  0.01,
  0.5
);
