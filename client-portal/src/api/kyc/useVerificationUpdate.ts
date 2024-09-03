import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import getEnv from "utils/env";

export async function fetchVerificationUpdate(data: any): Promise<boolean> {
  const BASE_URL = getEnv("VITE_API_BASE_URL");
  
  try {
    const response = await fetch(`${BASE_URL}/user/kyc/${data.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${data.token}`,

      },
      referrerPolicy: "no-referrer",
      body: data.formData,
    });
    const result = await response.json();
    console.log("verification response:", response, result )

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

type useVerificationProps = {
  onSuccess?: (data: unknown, variables: unknown, context: unknown) => void;
  onError?: (error: unknown, variables: unknown, context: unknown) => void;
  [index: string]: any;
};
export const useVerificationUpdate = (props: useVerificationProps) => {
  const receivedProps = props || ({} as useVerificationProps);

  const {
    onSuccess: onSuccessOverride,
    onError: onErrorOverride,
    ...rest
  } = receivedProps;

  return useMutation<any, unknown, any>({
    mutationFn: fetchVerificationUpdate,
    onSuccess: (data, variables, context) => {
      if (onSuccessOverride) {
        onSuccessOverride(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (onErrorOverride) {
        console.log(error, 'occured')
        onErrorOverride(error, variables, context);
      }
    },
    ...(rest || {}),
  });
};

export default useVerificationUpdate;
