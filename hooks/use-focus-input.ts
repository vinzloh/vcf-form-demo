import { useEffect, useRef } from 'react'
import { isMobile } from 'helpers'

export default function useFocusInput() {
  const focusRef = useRef<any>()
  useEffect(() => {
    if (!isMobile()) focusRef.current?.focus()

    const element =
      focusRef.current?.select?.controlRef ||
      (focusRef.current?.style && focusRef.current)
    if (!element) return

    const stickyEl = document.querySelector('.sticky')
    const mobileScrollMarginTop = `calc(${stickyEl?.scrollHeight}px + 2rem)`
    element.style.scrollMarginTop = mobileScrollMarginTop

    // https://stackoverflow.com/a/51070207
    const isSmoothScrollSupported =
      'scrollBehavior' in document.documentElement.style

    if (isSmoothScrollSupported) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Safari <= 11, you rascal
      const heightInPx = parseFloat(mobileScrollMarginTop)
      const baseFontSize = 16
      const scrollOffset = heightInPx * baseFontSize

      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#Browser_compatibility
      element.scrollIntoView(true) // scroll to top of page first
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy#Browser_Compatibility
      window.scrollBy(0, -scrollOffset) // scroll down by mobile scroll margin top
    }
  }, [])
  return { focusRef }
}
