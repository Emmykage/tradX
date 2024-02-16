function generateRandomDataWithWhitespace(
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
    let generatedValue;

    if (i < 10) {
      generatedValue = 30 + Math.random() * 20;
    } else if (i < 20) {
      generatedValue = 10 + Math.random() * 20;
    } else if (i < 30) {
      generatedValue = 30 + Math.random() * 20;
    } else if (i < 40) {
      generatedValue = 40 + Math.random() * 20;
    } else if (i < 50) {
      generatedValue = 30 + Math.random() * 20;
    } else if (i < 60) {
      generatedValue = 20 + Math.random() * 20;
    } else if (i < 70) {
      generatedValue = 10 + Math.random() * 20;
    } else if (i < 80) {
      generatedValue = -30 + Math.random() * 20;
    } else if (i < 90) {
      generatedValue = -50 + Math.random() * 20;
    } else if (i < 100) {
      generatedValue = -30 + Math.random() * 20;
    } else if (i < 110) {
      generatedValue = 0 + Math.random() * 20;
    } else if (i < 130) {
      generatedValue = 20.567;
    } else {
      generatedValue = undefined;
    }

    data.push({
      time: currentTimestamp,
      value: generatedValue,
    });

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
