import useFetch from 'hooks/useFetch'

const useJobFunctionList = () => useFetch('jobfunctions').data
export default useJobFunctionList
