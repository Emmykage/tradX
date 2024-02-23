import { useMutation } from "@tanstack/react-query";

export async function exampleFetcher(data: unknown): Promise<boolean> {
  try{
      const response = await fetch(`${process.env.VITE_API_BASE_URL}/end-point`, {
        headers: {
          "Content-Type": "application/json",
          method: "POST",
          body: JSON.stringify(data)
        }
      });
      const result = await response.json();

      if(!response.ok){
        throw new Error(`${result}`);
      }
      return result
    
  }catch(error){
    throw new Error(error as string)
}

}

type useExampleProps = {
  onSuccess?: (data: unknown, variables: unknown, context: unknown) => void;
  onError?: (
    error: unknown,
    variables: unknown,
    context: unknown
  ) => void;
  [index: string]: any;
};
export const useExample = (props: useExampleProps) => {
  const receivedProps = props || ({} as useExampleProps);

  const {
    onSuccess: onSuccessOverride,
    onError: onErrorOverride,
    ...rest
  } = receivedProps;

  return useMutation<any, unknown, any>({
    mutationFn: exampleFetcher,
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

export default useExample;
