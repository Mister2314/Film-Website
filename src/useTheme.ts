import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function currentTheme(): Theme {
  const t = document.documentElement.dataset.theme
  return t === 'light' ? 'light' : 'dark'
}

/**
 * Theme state synced with the pre-paint bootstrap in index.html.
 * System default; the user's explicit choice persists.
 */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('leitmotif-theme', theme)
    } catch {
      /* private mode: fine, theme just won't persist */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle]
}
