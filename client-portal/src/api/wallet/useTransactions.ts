import { useMutation } from "@tanstack/react-query";
import { ITransaction } from "@interfaces";
import getEnv from "utils/env";

type TransactionResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ITransaction[];
};

type UseTransactionsProps = {
  onSuccess?: (
    data: TransactionResult,
    variables: unknown,
    context: unknown
  ) => void;
  onError?: (error: unknown, variables: unknown, context: unknown) => void;
  [index: string]: any;
};

export async function fetchTransactions(token: string): Promise<TransactionResult> {
  const BASE_URL = getEnv("VITE_API_BASE_URL");
  try {
    const response = await fetch(`${BASE_URL}/wallet/transactions/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`${result}`);
    }
    return result;
  } catch (error) {
    throw new Error(error as string);
  }
}

export const useTransactions = (props: UseTransactionsProps) => {
  const receivedProps = props || ({} as UseTransactionsProps);

  const {
    onSuccess: onSuccessOverride,
    onError: onErrorOverride,
    ...rest
  } = receivedProps;

  return useMutation<TransactionResult, unknown, any>({
    mutationFn: (token: string) => fetchTransactions(token),
    onSuccess: (data: TransactionResult, variables, context) => {
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

export default useTransactions;
