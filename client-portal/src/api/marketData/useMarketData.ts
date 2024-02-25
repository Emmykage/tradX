import { useMutation } from "@tanstack/react-query";
import getEnv from "utils/env";

export async function marketDataFetcher(token: string) {
  try {
    const API_BASE_URL = getEnv("VITE_API_BASE_URL");

    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0" );

    // Construct the formatted date string
    const formattedDate = `${year}-${month}-01`;

    const response = await fetch(
      `${API_BASE_URL}/market-data/alpaca/?start=${formattedDate}&symbol_or_symbols=BTC%2FUSD&timeframe=minute`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log({ response });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`${result}`);
    }
    return result;
  } catch (error) {
    throw new Error(error as string);
  }
}

type useMarketDataProps = {
  onSuccess?: (data: unknown, variables: unknown, context: unknown) => void;
  onError?: (error: unknown, variables: unknown, context: unknown) => void;
  [index: string]: any;
};
export const useMarketData = (props: useMarketDataProps) => {
  const receivedProps = props || ({} as useMarketDataProps);

  const {
    onSuccess: onSuccessOverride,
    onError: onErrorOverride,
    ...rest
  } = receivedProps;

  return useMutation({
    mutationFn: marketDataFetcher,
    onSuccess: (data, variables, context) => {
      /* Add On success actions here if needed */
      if (onSuccessOverride) {
        onSuccessOverride(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (onErrorOverride) {
        onErrorOverride(error, variables, context);
      }
    },
    ...(rest || {}),
  });
};

export default useMarketData;
