import useFetch from 'hooks/use-fetch'

const useCurrencies = () => useFetch('currencies').data
export default useCurrencies
