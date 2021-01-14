import useFetch from 'hooks/use-fetch'

const useCountryList = () => useFetch('countries').data
export default useCountryList
