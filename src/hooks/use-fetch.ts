import useSWR from 'swr';

const fetcher = async (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export const useFetch = <T>(url: string) => useSWR<T>(`/api/${url}`, fetcher);
