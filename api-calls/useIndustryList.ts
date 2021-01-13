import useFetch from 'hooks/useFetch'

const useIndustryList = () => useFetch('industries').data
export default useIndustryList
