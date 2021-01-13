export const assignSharedDOMRefs = (...refs: Array<any>) => (e: any) => {
  refs.filter((d) => d).forEach((r) => (r.current = e))
  return refs[0]
}

export const isMobile = () => window.innerWidth <= 500
