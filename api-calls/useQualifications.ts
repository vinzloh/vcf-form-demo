import useFetch from 'hooks/useFetch'

const useQualifications = () => useFetch('qualifications').data
export default useQualifications
