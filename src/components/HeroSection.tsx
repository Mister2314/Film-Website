interface Film {
  img: string
  href: string
  num: string
  title: string
  blurb: string
  meta: string
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
  },
  {
    img: './assets/img/p8-img-02.jpg',
    href: 'https://www.youtube.com/watch?v=dNzH59-juFM',
    num: '02',
    title: 'address unknown.',
    blurb:
      'A letter that never finds its reader. Cut to a ticking score, the edit withholds until the final frame.',
    meta: '2024 · trailer · youtube',
  },
  {
    img: './assets/img/p8-img-03.jpg',
    href: 'https://www.youtube.com/watch?v=F7D-Y3T0XFA',
    num: '03',
    title: 'late night feelings.',
    blurb:
      'Neon, rain and a voice on the phone. A mood piece that treats the city itself as the main character.',
    meta: '2025 · trailer · youtube',
  },
  {
    img: './assets/img/p8-img-04.jpg',
    href: 'https://vimeo.com/75125799',
    num: '04',
    title: 'address unknown.',
    blurb:
      'The Vimeo festival cut — a tighter, darker re-edit with a new sound bed and an alternate ending.',
    meta: '2023 · festival cut · vimeo',
  },
  {
    img: './assets/img/p8-img-05.jpg',
    href: 'https://vimeo.com/23594988',
    num: '05',
    title: 'address unknown.',
    blurb:
      'The director’s own archive version — where the project began, preserved exactly as first screened.',
    meta: '2023 · director’s cut · vimeo',
  },
]

function FilmBox({ film }: { film: Film }) {
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
        </div>
      </div>
    </article>
  )
}

/**
 * Flat sibling sections — the old malformed nesting (each box wrapped in the
 * previous box's div) is gone; every film box is now a direct child.
 */
export default function HeroSection() {
  return (
    <section className="hero-section" id="films" aria-label="Film trailers">
      <h2 className="visually-hidden">Selected trailers</h2>
      {films.map((film, i) => (
        <div
          key={film.num}
          data-aos="fade-up"
          data-aos-delay={i % 2 === 0 ? 0 : 120}
          className={`film-slot slot-${i + 1}`}
        >
          <FilmBox film={film} />
        </div>
      ))}
    </section>
  )
}
