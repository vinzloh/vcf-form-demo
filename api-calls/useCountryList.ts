import useFetch from 'hooks/useFetch'

const useCountryList = () => useFetch('countries').data
export default useCountryList
