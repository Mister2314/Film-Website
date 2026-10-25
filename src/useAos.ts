import { useEffect } from 'react'

/**
 * Minimal AOS replication, upgraded:
 * - once: true (a reveal happens one time — repeat-in/repeat-out read as flicker)
 * - ease + duration come from the shared motion tokens (expo-out arrival)
 * - prefers-reduced-motion: content is simply shown, no observer choreography
 */
export function useAos(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-aos]'))
    if (els.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    els.forEach((el) => {
      el.classList.add('aos-init')
      const delay = el.getAttribute('data-aos-delay')
      if (delay && !reduced) el.style.transitionDelay = `${delay}ms`
      if (reduced) el.classList.add('aos-animate')
    })

    if (reduced) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
            io.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -90px 0px', threshold: 0.05 },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
