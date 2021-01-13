import useFetch from 'hooks/useFetch'

const useCurrencies = () => useFetch('currencies').data
export default useCurrencies
