import useFetch from 'hooks/use-fetch'

const useJobFunctions = () => useFetch('job-functions').data
export default useJobFunctions
