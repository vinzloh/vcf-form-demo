// TODO: api integration
// import useFetch from './useFetch'
// TODO: temp
import useSWR from 'swr'

// TODO: temp
const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  return fetch(input, init).then((res) => res.json())
}

// TODO: temp
function useFetch(url: string) {
  return useSWR([url], fetcher)
}

const useAuth = () => useFetch('/api/auth')
export default useAuth
