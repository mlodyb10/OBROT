import { Reveal } from './Reveal'
import { Media } from './Media'

export function About() {
  return (
    <section className="section section--light" id="o-nas">
      <div className="container about__grid">
        <Reveal className="about__text">
          <span className="eyebrow">O nas</span>
          <h2 className="section-title">Tu, gdzie kiedyś były książki</h2>
          <p className="about__lead">
            OBRÓT powstał w 2025 roku w miejscu dawnej księgarni Biksa — na rogu Kościuszki i placu
            Miarki, w samym sercu Katowic.
          </p>
          <p className="about__body">
            Zamieniliśmy regały z książkami na ekspres, młynek i ladę pełną świeżych wypieków. Nazwa
            nie jest przypadkowa: OBRÓT to obrót młynka i portafiltra, obrót spraw i obrót filiżanek
            na stolikach. Sprawy nabrały obrotu — i dobrze.
          </p>
          <p className="about__body">
            Serwujemy kawę specialty od zaprzyjaźnionych palarni, matchę ubijaną chasenem i wypieki,
            które znikają szybciej, niż zdążymy je wystawić. Wpadnij na chwilę albo na dłużej.
          </p>

          <div className="about__stats">
            <div>
              <div className="about__stat-num">2025</div>
              <div className="about__stat-label">rok otwarcia</div>
            </div>
            <div>
              <div className="about__stat-num">100%</div>
              <div className="about__stat-label">kawa specialty</div>
            </div>
            <div>
              <div className="about__stat-num">plac Miarki 1</div>
              <div className="about__stat-label">centrum Katowic</div>
            </div>
          </div>
        </Reveal>

        <Reveal className="about__media" delay={0.1}>
          <Media src="/img/interior.jpg" alt="Wnętrze OBRÓT — dawna księgarnia Biksa" label="Wnętrze" />
        </Reveal>
      </div>
    </section>
  )
}
