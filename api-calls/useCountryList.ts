import useFetch from 'hooks/useFetch'

const useCountryList = () =>
  useFetch('/v1/country/list').data?.map(({ _id, name }: any) => ({
    label: name,
    value: _id,
  }))
export default useCountryList
