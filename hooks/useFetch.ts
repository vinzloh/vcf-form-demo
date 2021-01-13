import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'

const init = {
  method: 'POST',
  headers: {
    Authorization: process.env.NEXT_PUBLIC_API_KEY,
    passcode: process.env.NEXT_PUBLIC_PASSCODE,
  },
}

const fetcher = async (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json())

const useFetch = (url: string) =>
  useSWR([`${process.env.NEXT_PUBLIC_API_URL}${url}`, init], fetcher)

export default useFetch
