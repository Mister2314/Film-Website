import { useEffect } from 'react'

/**
 * Minimal AOS 2.3.1 replication (defaults: duration 400ms, easing 'ease',
 * offset 120px, once: false) for [data-aos="fade-up"] elements.
 */
export function useAos(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-aos]'))
    if (els.length === 0) return

    els.forEach((el) => {
      el.classList.add('aos-init')
      const delay = el.getAttribute('data-aos-delay')
      if (delay) el.style.transitionDelay = `${delay}ms`
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
          } else {
            entry.target.classList.remove('aos-animate')
          }
        })
      },
      { root: null, rootMargin: '0px 0px -120px 0px', threshold: 0 },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
