import { useMutation } from "@tanstack/react-query";
import getEnv from "utils/env";
import IPaymentType from "@interfaces/IPaymentType";

type PaymentTypeResponse = {
  
  results: IPaymentType[];
};

type usePaymentTypesProps = {
  onSuccess?: (
    data: PaymentTypeResponse,
    variables: unknown,
    context: unknown
  ) => void;
  onError?: (error: unknown, variables: unknown, context: unknown) => void;
  [index: string]: any;
};

export async function fetchTradeList(token: string) {
    console.log(token);
  const BASE_URL = getEnv("VITE_API_BASE_URL");
  try {
    const response = await fetch(`${BASE_URL}/payment/methods/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`${result}`);
    }
    return result;
  } catch (error) {
    throw new Error(error as string);
  }
}

export const useQRCodeList = (props: usePaymentTypesProps) => {
  const receivedProps = props || ({} as usePaymentTypesProps);

  const {
    onSuccess: onSuccessOverride,
    onError: onErrorOverride,
    ...rest
  } = receivedProps;

  return useMutation<any, unknown, any>({
    mutationFn: (token: string) => fetchTradeList(token),
    onSuccess: (data, variables, context) => {
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

export default useQRCodeList;
