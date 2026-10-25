import { useEffect, useMemo, useRef, useState } from 'react'

interface Film {
  img: string
  href: string
  num: string
  title: string
  blurb: string
  meta: string
  year: string
  kind: 'trailer' | 'festival cut' | 'director’s cut'
  runtime: string
  longDesc: string
}

const films: Film[] = [
  {
    img: './assets/img/p8-img-01.jpg',
    href: 'https://youtu.be/koxRDhAQOpw',
    num: '01',
    title: 'the wastelands.',
    blurb:
      'A slow burn across scorched ground — our first trailer cut, built almost entirely from wind, dust and one held breath.',
    meta: '2024 · trailer · youtube',
    year: '2024',
    kind: 'trailer',
    runtime: '2 min 04 s',
    longDesc:
      'Cut from eleven days of location footage with no dialogue. The edit leans on ambient wind recordings and a single sustained cello note; the only cut on the beat lands at 1:38.',
  },
  {
    img: './assets/img/p8-img-02.jpg',
    href: 'https://www.youtube.com/watch?v=dNzH59-juFM',
    num: '02',
    title: 'address unknown.',
    blurb:
      'A letter that never finds its reader. Cut to a ticking score, the edit withholds until the final frame.',
    meta: '2024 · trailer · youtube',
    year: '2024',
    kind: 'trailer',
    runtime: '1 min 47 s',
    longDesc:
      'A correspondence thriller told entirely through inserts: envelopes, typewriter keys, a hallway light. The ticking score was recorded on a 1962 mechanical metronome.',
  },
  {
    img: './assets/img/p8-img-03.jpg',
    href: 'https://www.youtube.com/watch?v=F7D-Y3T0XFA',
    num: '03',
    title: 'late night feelings.',
    blurb:
      'Neon, rain and a voice on the phone. A mood piece that treats the city itself as the main character.',
    meta: '2025 · trailer · youtube',
    year: '2025',
    kind: 'trailer',
    runtime: '2 min 21 s',
    longDesc:
      'Shot over four rainy nights in the old town. The phone-call audio is real — one actor, one payphone, one take. The grade pushes sodium-vapor orange against wet asphalt blue.',
  },
  {
    img: './assets/img/p8-img-04.jpg',
    href: 'https://vimeo.com/75125799',
    num: '04',
    title: 'address unknown.',
    blurb:
      'The Vimeo festival cut — a tighter, darker re-edit with a new sound bed and an alternate ending.',
    meta: '2023 · festival cut · vimeo',
    year: '2023',
    kind: 'festival cut',
    runtime: '1 min 32 s',
    longDesc:
      'Recut for the short-doc bracket: the last 12 seconds replace the reveal with an unresolved wide shot. Premiered in the midnight block and kept the alternate ending by jury request.',
  },
  {
    img: './assets/img/p8-img-05.jpg',
    href: 'https://vimeo.com/23594988',
    num: '05',
    title: 'address unknown.',
    blurb:
      'The director’s own archive version — where the project began, preserved exactly as first screened.',
    meta: '2023 · director’s cut · vimeo',
    year: '2023',
    kind: 'director’s cut',
    runtime: '3 min 10 s',
    longDesc:
      'The version that started everything: a rough assembly screened once for six friends in a borrowed edit suite. Presented here untouched — soft focus, sound hiss and all.',
  },
]

const filters = [
  { id: 'all', label: 'all cuts' },
  { id: 'trailer', label: 'trailers' },
  { id: 'festival cut', label: 'festival cuts' },
  { id: 'director’s cut', label: 'director’s cuts' },
] as const

type FilterId = (typeof filters)[number]['id']

function FilmBox({ film, onDetails }: { film: Film; onDetails: (f: Film) => void }) {
  return (
    <article className={`box box-${film.num}`}>
      <a
        className="film-link"
        href={film.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Trailer ${film.num}: ${film.title} — watch on ${
          film.href.includes('vimeo') ? 'Vimeo' : 'YouTube'
        } (opens in a new tab)`}
      >
        <div className="film-frame">
          <img
            src={film.img}
            width="700"
            height="400"
            loading="lazy"
            decoding="async"
            alt={`Still frame from the trailer ${film.title}`}
          />
          <span className="letterbox letterbox-top" aria-hidden="true" />
          <span className="letterbox letterbox-bottom" aria-hidden="true" />
          <svg className="play-ring" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8 5.14v14l11-7l-11-7Z" />
          </svg>
        </div>
        <span className="watch-hint" aria-hidden="true">watch trailer →</span>
      </a>
      <div className="right-box2">
        <div className="text-container">
          <span className="film-num" aria-hidden="true">{film.num}</span>
          <h3>{film.title}</h3>
          <p className="film-meta">{film.meta}</p>
          <p>{film.blurb}</p>
          <button type="button" className="details-link" onClick={() => onDetails(film)}>
            details <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  )
}

function FilmDetailsDialog({ film, onClose }: { film: Film; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const prev = document.activeElement as HTMLElement | null
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>('a, button')
        const list = Array.from(focusables).filter((el) => !el.hasAttribute('disabled'))
        if (list.length === 0) return
        const first = list[0]
        const last = list[list.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [onClose])

  return (
    <div className="details-overlay" onClick={onClose}>
      <div
        className="details-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="details-title"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="details-close" onClick={onClose} aria-label="Close details">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="details-media">
          <img src={film.img} width="700" height="400" alt={`Still frame from ${film.title}`} />
        </div>
        <div className="details-body">
          <span className="film-num details-num" aria-hidden="true">{film.num}</span>
          <h3 id="details-title">{film.title}</h3>
          <p className="film-meta">{film.meta}</p>
          <p className="details-runtime">runtime {film.runtime}</p>
          <p className="details-desc">{film.longDesc}</p>
          <a className="details-watch" href={film.href} target="_blank" rel="noreferrer">
            watch on {film.href.includes('vimeo') ? 'Vimeo' : 'YouTube'} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * Flat sibling sections — the old malformed nesting (each box wrapped in the
 * previous box's div) is gone; every film box is now a direct child.
 * Added: client-side filter over the local catalogue (no API, no keys),
 * with a real empty state.
 */
export default function HeroSection() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const [selected, setSelected] = useState<Film | null>(null)

  const visible = useMemo(
    () => (activeFilter === 'all' ? films : films.filter((f) => f.kind === activeFilter)),
    [activeFilter],
  )

  return (
    <section className="hero-section" id="films" aria-label="Film trailers">
      <h2 className="visually-hidden">Selected trailers</h2>

      <div className="film-filter" data-aos="fade-in" role="group" aria-label="Filter the film index">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-chip${activeFilter === f.id ? ' is-active' : ''}`}
            aria-pressed={activeFilter === f.id}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
        <span className="filter-count" aria-live="polite">
          {visible.length} of {films.length}
        </span>
      </div>

      {visible.length === 0 ? (
        <div className="film-empty">
          <p className="film-empty-title">nothing in the vault under that shelf.</p>
          <p className="film-empty-sub">Try another cut — or take the whole reel.</p>
          <button type="button" className="filter-chip" onClick={() => setActiveFilter('all')}>
            show all cuts
          </button>
        </div>
      ) : (
        visible.map((film, i) => (
          <div
            key={film.num}
            data-aos="fade-up"
            data-aos-delay={i % 2 === 0 ? 0 : 120}
            className={`film-slot slot-${i + 1}`}
          >
            <FilmBox film={film} onDetails={setSelected} />
          </div>
        ))
      )}

      {selected && <FilmDetailsDialog film={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
