import useFetch from 'hooks/useFetch'

const useIndustryList = () =>
  useFetch('/v1/industry/list').data?.map(({ _id, name }: any) => ({
    label: name,
    value: _id,
  }))
export default useIndustryList
