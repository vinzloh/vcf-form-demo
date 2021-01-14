import useFetch from 'hooks/use-fetch'

const useQualifications = () => useFetch('qualifications').data
export default useQualifications
