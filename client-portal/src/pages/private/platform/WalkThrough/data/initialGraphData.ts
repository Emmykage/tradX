export const initialData = generateRandomData(
  120,
  "2024-02-01T17:52:00.000Z",
  1.164,
  0.01
);

function generateRandomData(
  count: number,
  startTime: string,
  startValue: number,
  volatility: number
): { time: number; value: number }[] {
  const data = [];
  let currentTimestamp = new Date(startTime).getTime() / 1000; // Convert to seconds
  let currentValue = startValue;

  for (let i = 0; i < count; i++) {
    const randomMovement = (Math.random() - 0.5) * volatility;
    currentValue += randomMovement;

    data.push({
      time: currentTimestamp,
      value: Math.max(currentValue, 0), // Ensure the value is non-negative
    });

    currentTimestamp += 60; // Add 60 seconds for each data point
  }

  return data;
}
