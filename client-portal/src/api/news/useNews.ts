import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { INews } from "@interfaces";
import getEnv from "utils/env";

type NewsQueryParams = {
  symbol?: string;
  start?: string;
  end?: string;
  sort?: "asc" | "desc";
  include_content?: string;
  exclude_contentless?: string;
  limit?: string;
};

type useNewsProps = {
  onSuccess?: (
    data: INews[],
    variables: { token: string; queryParams?: NewsQueryParams },
    context: unknown
  ) => void;
  onError?: (
    error: unknown,
    variables: { token: string; queryParams?: NewsQueryParams },
    context: unknown
  ) => void;
};

export async function fetchNews(data: {
  token: string;
  queryParams?: NewsQueryParams;
}): Promise<INews[]> {
  const BASE_URL = getEnv("VITE_API_BASE_URL");
  try {
    const queryParams = data.queryParams
      ? new URLSearchParams(
          Object.entries(data.queryParams).map(([key, value]) => [
            key,
            (typeof value as string) === "boolean" ? value.toString() : value,
          ])
        ).toString()
      : "";

    const response = await fetch(`${BASE_URL}/get-news/?${queryParams}`, {
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

export const useNews = (
  props: useNewsProps
): UseMutationResult<
  INews[],
  unknown,
  { token: string; queryParams?: NewsQueryParams }
> => {
  const {
    onSuccess: onSuccessOverride,
    onError: onErrorOverride,
    ...rest
  } = props || ({} as useNewsProps);

  return useMutation<
    INews[],
    unknown,
    { token: string; queryParams?: NewsQueryParams }
  >({
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
