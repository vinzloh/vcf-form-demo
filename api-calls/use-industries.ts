import useFetch from 'hooks/use-fetch'

const useIndustryList = () => useFetch('industries').data
export default useIndustryList
