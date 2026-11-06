import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Album from './pages/Album'

function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/album', label: 'Album' },
    { to: '/diario', label: 'Diario' },
    { to: '/mappa', label: 'Mappa' },
    { to: '/ricordi', label: 'Ricordi' },
    { to: '/dediche', label: 'Dediche' }
  ]

  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Un'estate, mille ricordi ♡
      </NavLink>

      <nav>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <span className="eyebrow">ITALIA ♡ ESPAÑA · ERASMUS DIARY</span>

        <h1>
          Un'estate,<br />
          <em>mille ricordi.</em>
        </h1>

        <p>
          Una italiana, una nuova avventura e un mondo tutto da scoprire.
          Una pequeña historia de viajes, amistades y momentos
          que resteranno per sempre nel cuore.
        </p>

        <NavLink to="/album" className="main-button">
          Scopri i miei ricordi →
        </NavLink>

        <div className="handwriting">
          La vita è bella, soprattutto insieme ✿
        </div>
      </div>

      <div className="hero-photo">
        <img
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900"
          alt="Un ricordo della Spagna"
        />
        <span>Mi nuova casa ☀</span>
      </div>
    </main>
  )
}

function Section({ title, subtitle }) {
  return (
    <main className="section-page">
      <span className="eyebrow">UN'ESTATE, MILLE RICORDI</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="flower">✿ ♡ ✿</div>
      <NavLink to="/" className="main-button">
        Torna alla home
      </NavLink>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter basename="/erasmus-album">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/diario" element={
          <Section title="Il mio diario" subtitle="Piccole storie, grandi emozioni." />
        } />
        <Route path="/mappa" element={
          <Section title="La mia Spagna" subtitle="Ogni città, una nuova avventura." />
        } />
        <Route path="/ricordi" element={
          <Section title="Ricordi nel tempo" subtitle="Dal primo giorno all'ultimo abbraccio." />
        } />
        <Route path="/dediche" element={
          <Section title="Le mie dediche" subtitle="Parole da custodire per sempre." />
        } />
        <Route path="*" element={
          <Section title="Pagina non trovata" subtitle="Questo ricordo non esiste ancora." />
        } />
      </Routes>

      <footer>
        <span>♡</span>
        <p>Fatto con amore, dalla Spagna all'Italia.</p>
        <small>Un'estate, mille ricordi · 2026</small>
      </footer>
    </BrowserRouter>
  )
}

export default App
