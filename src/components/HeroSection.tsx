const films = [
  {
    className: 'section1-div',
    img: './assets/img/p8-img-01.jpg',
    href: 'https://youtu.be/koxRDhAQOpw',
    num: '01',
    title: 'the wastelands.',
  },
  {
    className: 'section2-div',
    img: './assets/img/p8-img-02.jpg',
    href: 'https://www.youtube.com/watch?v=dNzH59-juFM',
    num: '02',
    title: 'address unknown.',
  },
  {
    className: 'section3-div',
    img: './assets/img/p8-img-03.jpg',
    href: 'https://www.youtube.com/watch?v=F7D-Y3T0XFA',
    num: '03',
    title: 'late night feelings.',
  },
  {
    className: 'section4-div',
    img: './assets/img/p8-img-04.jpg',
    href: 'https://vimeo.com/75125799',
    num: '04',
    title: 'address unknown.',
  },
  {
    className: 'section5-div',
    img: './assets/img/p8-img-05.jpg',
    href: 'https://vimeo.com/23594988',
    num: '05',
    title: 'address unknown.',
  },
]

const description =
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'

function FilmBox({ img, href, num, title }: { img: string; href: string; num: string; title: string }) {
  return (
    <div className="box">
      <a href={href}>
        <img style={{ objectFit: 'cover' }} src={img} width="700px" height="400px" alt="" />
        <svg
          className="svg1"
          style={{ color: 'white' }}
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M18.4 12.5L9 18.38L8 19V6l10.4 6.5m-1.9 0L9 7.8v9.4l7.5-4.7Z" />
        </svg>
        <svg
          className="svg2"
          style={{ color: 'white' }}
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M8 5.14v14l11-7l-11-7Z" />
        </svg>
      </a>
      <div className="right-box2">
        <div className="text-container">
          <span>{num}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="shadow__btn">read more</button>
        </div>
      </div>
    </div>
  )
}

/**
 * NOTE: the original hand-written HTML is malformed and the browser's error
 * correction nests section3-div inside section2-div, section4-div inside
 * section3-div and section5-div inside section4-div. This JSX replicates the
 * exact rendered DOM of the live site, not the (broken) source nesting.
 */
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div data-aos="fade-up" className={films[0].className}>
        <FilmBox {...films[0]} />
      </div>
      <div data-aos="fade-up" className={films[1].className}>
        <FilmBox {...films[1]} />
        <div data-aos="fade-up" className={films[2].className}>
          <FilmBox {...films[2]} />
          <div data-aos="fade-up" className={films[3].className}>
            <FilmBox {...films[3]} />
            <div data-aos="fade-up" className={films[4].className}>
              <FilmBox {...films[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
