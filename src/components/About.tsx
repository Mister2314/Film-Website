/**
 * About the studio — a real #production section (the nav previously pointed
 * "about" at the footer). Kept editorial: two columns, mono metadata, no cards.
 */
export default function About() {
  return (
    <section className="about" id="production" data-aos="fade-up" aria-labelledby="about-heading">
      <div className="about-inner">
        <div className="about-col">
          <h2 id="about-heading">a small room, a big screen.</h2>
        </div>
        <div className="about-col">
          <p>
            Leitmotif is a two-person trailer house. We cut shorts, festival versions and director
            edits — usually for films nobody has advertised yet. Every piece here was assembled in
            the same room: one grading console, one wall of drives, and a wall clock that has never
            once told us the right time.
          </p>
          <p>
            We release each cut the week it is finished. No teaser-of-a-teaser, no embargo theatre —
            the trailer goes up, the letter goes out, and we go back to the timeline.
          </p>
          <dl className="about-facts">
            <div>
              <dt>founded</dt>
              <dd>2019</dd>
            </div>
            <div>
              <dt>cuts released</dt>
              <dd>23</dd>
            </div>
            <div>
              <dt>based in</dt>
              <dd>baku, after dark</dd>
            </div>
          </dl>
          <a className="about-contact" href="mailto:screenings@leitmotif.example">
            screenings@leitmotif.example <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
