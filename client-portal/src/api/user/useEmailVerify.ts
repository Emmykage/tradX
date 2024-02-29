import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import getEnv from "utils/env";

type EmailVerificationVariables = {
  uidb64?: string;
  token?: string;
};

type useEmailVerifyProps = {
  onSuccess?: (
    data: { detail: string },
    variables: EmailVerificationVariables,
    context: unknown
  ) => void;
  onError?: (
    error: unknown,
    variables: EmailVerificationVariables,
    context: unknown
  ) => void;
  [index: string]: any;
};

export async function fetchEmailVerify(
  data: EmailVerificationVariables
): Promise<boolean> {
  const BASE_URL = getEnv("VITE_API_BASE_URL");
  try {
    const response = await fetch(
      `${BASE_URL}/user/verify_email/${data.uidb64}/${data.token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    if (!response.ok) {
      Object.keys(result).forEach((field) => {
        const errors = result[field];
        errors.forEach((errorMessage: string) => {
          toast.error(`${field}: ${errorMessage}`);
        });
      });
      throw new Error(`${result}`);
    }
    return result;
  } catch (error) {
    throw new Error(error as string);
  }
}

export const useEmailVerify = (props: useEmailVerifyProps) => {
  const receivedProps = props || ({} as useEmailVerifyProps);

  const {
    onSuccess: onSuccessOverride,
    onError: onErrorOverride,
    ...rest
  } = receivedProps;

  return useMutation<any, unknown, EmailVerificationVariables>({
    mutationFn: fetchEmailVerify,
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

export default useEmailVerify;
