import useFetch from 'hooks/useFetch'

const useJobFunctionList = () =>
  useFetch('/v1/jobfunction/list').data?.map(({ _id, name }: any) => ({
    label: name,
    value: _id,
  }))
export default useJobFunctionList
