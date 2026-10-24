const navItems = [
  { label: 'home', href: '#top' },
  { label: 'films', href: '#films' },
  { label: 'about', href: '#production' },
  { label: 'newsletter', href: '#newsletter' },
]

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
        </div>
      </div>
    </header>
  )
}
