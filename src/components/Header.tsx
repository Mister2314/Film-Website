import { useTheme } from '../useTheme'

const navItems = [
  { label: 'home', href: '#top' },
  { label: 'films', href: '#films' },
  { label: 'about', href: '#production' },
  { label: 'newsletter', href: '#newsletter' },
]

function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <svg className="theme-toggle-icon theme-toggle-icon-sun" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8"
        />
      </svg>
      <svg className="theme-toggle-icon theme-toggle-icon-moon" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M20.4 14.2A8.5 8.5 0 0 1 9.8 3.6a8.5 8.5 0 1 0 10.6 10.6Z"
        />
      </svg>
    </button>
  )
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <nav aria-label="primary">
          <ul className="header-ul">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="right-box">
          <a className="icon-link" href="#films" aria-label="Open the film index">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 1664 1664"
            >
              <path
                fill="currentColor"
                d="M1152 704q0-185-131.5-316.5T704 256T387.5 387.5T256 704t131.5 316.5T704 1152t316.5-131.5T1152 704zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124q-143 0-273.5-55.5t-225-150t-150-225T0 704t55.5-273.5t150-225t225-150T704 0t273.5 55.5t225 150t150 225T1408 704q0 220-124 399l343 343q37 37 37 90z"
              />
            </svg>
          </a>
          <a className="icon-link" href="#films" aria-label="Browse all trailers">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 512 512"
            >
              <path fill="currentColor" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
