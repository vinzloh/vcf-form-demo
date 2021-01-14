let cache: any = {}
export default function useInMemoryCache(key?: string) {
  const data: any = cache[key as keyof {}] || cache
  console.log(
    `[useInMemoryCache] ${key || 'global'}:`,
    JSON.stringify(data, null, 2)
  )
  return {
    data,
    clear: () => {
      cache = {}
      console.log(`clear useInMemoryCache`)
    },
    update: (data: any) => {
      cache[key as keyof {}] = data
      console.log(`[useInMemoryCache] update ${key}:`, data)
    },
  }
}
