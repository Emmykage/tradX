import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { INews } from "@interfaces";
import getEnv from "utils/env";

type useNewsProps = {
  onSuccess?: (
    data: INews,
    variables: { token: string; articleId?: string },
    context: unknown
  ) => void;
  onError?: (
    error: unknown,
    variables: { token: string; articleId?: string },
    context: unknown
  ) => void;
};

export async function fetchNews(data: {
  token: string;
  articleId?: string;
}): Promise<INews> {
  const BASE_URL = getEnv("VITE_API_BASE_URL");
  try {

      const response = await fetch(`${BASE_URL}/news/${data.articleId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.token}`,
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

export const useNewsArticle = (
  props: useNewsProps
): UseMutationResult<
INews,
  unknown,
  { token: string; articleId?: string }
> => {
  const {
    onSuccess: onSuccessOverride,
    onError: onErrorOverride,
    ...rest
  } = props || ({} as useNewsProps);

  return useMutation<INews,unknown,{ token: string; articleId?: string }>({
    mutationFn: (data) => fetchNews(data),
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
    ...rest,
  });
};
