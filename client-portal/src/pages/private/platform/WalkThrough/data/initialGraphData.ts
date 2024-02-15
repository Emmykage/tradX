export const initialData = generateRandomData(50, "2018-12-22", 32.51, 0.1);

function generateRandomData(
  count: number,
  startTime: string,
  startValue: number,
  volatility: number
): { time: string; value: number }[] {
  const data = [];
  let currentDate = new Date(startTime);
  let currentValue = startValue;

  for (let i = 0; i < count; i++) {
    currentDate.setDate(currentDate.getDate() + 1);

    const randomMovement = (Math.random() - 0.5) * volatility;
    currentValue += randomMovement;

    data.push({
      time: currentDate.toISOString().split("T")[0],
      value: Math.max(currentValue, 0), // Ensure the value is non-negative
    });
  }

  return data;
}
