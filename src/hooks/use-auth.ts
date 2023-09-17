import useSWR from 'swr';

const fetcher = async (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());
const useFetch = (url: string) => useSWR([url], fetcher);
export const useAuth = () => useFetch('/api/auth');
