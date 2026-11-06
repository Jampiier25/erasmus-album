
import { useState } from 'react'
import photoFiles from '../photo-list.json'

const memories = [
  {
    title: 'Un sorriso da ricordare ♡',
    caption: 'Una sonrisa que guardaré siempre',
    note: 'Ci sono sorrisi che rendono speciali anche i giorni più semplici.',
    translation: 'Hay sonrisas que hacen especiales hasta los días más sencillos.'
  },
  {
    title: 'La magia dei piccoli momenti',
    caption: 'La magia de los pequeños momentos',
    note: 'Sono proprio questi momenti a rendere la vita meravigliosa.',
    translation: 'Son precisamente estos momentos los que hacen maravillosa la vida.'
  },
  {
    title: 'Un’estate piena di emozioni ☀',
    caption: 'Un verano lleno de emociones',
    note: 'Un’estate che porterò sempre nel cuore.',
    translation: 'Un verano que llevaré siempre en el corazón.'
  },
  {
    title: 'Persone che diventano casa',
    caption: 'Personas que se convierten en hogar',
    note: 'A volte casa non è un posto, ma sono le persone.',
    translation: 'A veces el hogar no es un lugar, sino las personas.'
  },
  {
    title: 'La felicità è nelle piccole cose',
    caption: 'La felicidad está en las pequeñas cosas',
    note: 'Un caffè, una risata, una passeggiata senza meta.',
    translation: 'Un café, una risa, un paseo sin rumbo.'
  },
  {
    title: 'Momenti che vorrei rivivere',
    caption: 'Momentos que volvería a vivir',
    note: 'Se potessi tornare indietro, sceglierei ancora questi momenti.',
    translation: 'Si pudiera volver atrás, elegiría otra vez estos momentos.'
  },
  {
    title: 'Una storia tutta da raccontare',
    caption: 'Una historia que merece ser contada',
    note: 'Ogni giorno un capitolo, ogni ricordo una pagina.',
    translation: 'Cada día un capítulo, cada recuerdo una página.'
  },
  {
    title: 'Il mio piccolo mondo spagnolo',
    caption: 'Mi pequeño mundo español',
    note: 'Un mondo nuovo che piano piano è diventato mio.',
    translation: 'Un mundo nuevo que poco a poco se convirtió en mío.'
  },
  {
    title: 'Amicizie senza confini ♡',
    caption: 'Amistades sin fronteras',
    note: 'Persone incontrate per caso, diventate importanti per sempre.',
    translation: 'Personas que conocí por casualidad y que se volvieron importantes para siempre.'
  },
  {
    title: 'Sole, risate e libertà',
    caption: 'Sol, risas y libertad',
    note: 'Quei giorni in cui tutto sembrava possibile.',
    translation: 'Esos días en los que todo parecía posible.'
  },
  {
    title: 'Questi giorni resteranno con me',
    caption: 'Estos días siempre estarán conmigo',
    note: 'Ci sono ricordi che il tempo non potrà mai cancellare.',
    translation: 'Hay recuerdos que el tiempo nunca podrá borrar.'
  },
  {
    title: 'Una parentesi indimenticabile',
    caption: 'Un paréntesis inolvidable',
    note: 'Un piccolo pezzo di vita che vorrei conservare per sempre.',
    translation: 'Un pequeño trocito de vida que quisiera conservar para siempre.'
  }
]

const categories = [
  { id: 'Tutte', label: 'Tutte le foto' },
  { id: 'Anna', label: 'Io ♡' },
  { id: 'Viaggi', label: 'Viaggi' },
  { id: 'Amici', label: 'Amici' },
  { id: 'Insieme', label: 'Insieme' }
]

export default function Album() {
  const [category, setCategory] = useState('Tutte')
  const [selected, setSelected] = useState(null)

  const photos = photoFiles.map((file, index) => {
    const memory = memories[index % memories.length]

    return {
      file,
      index,
      title: memory.title,
      caption: memory.caption,
      note: memory.note,
      translation: memory.translation
    }
  })

  const filtered = category === 'Tutte'
    ? photos
    : photos

  const imagePath = file =>
    `${import.meta.env.BASE_URL}assets/photos/${file
      .split('/')
      .map(encodeURIComponent)
      .join('/')}`

  return (
    <main className="album-page">

      {/* CABECERA */}
      <div className="album-heading">
        <span className="eyebrow">
          IL MIO PICCOLO MONDO ♡
        </span>

        <h1>
          Piccoli <em>ricordi</em>
        </h1>

        <p>
          Ogni foto nasconde una storia.
          <br />
          Cada fotografía guarda una historia.
        </p>

        <span className="photo-count">
          {photos.length} momenti da custodire ✿
        </span>
      </div>

      {/* FILTROS */}
      <div className="album-filters">
        {categories.map(item => (
          <button
            key={item.id}
            className={category === item.id ? 'filter-active' : ''}
            onClick={() => setCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* GALERÍA */}
      <div className="polaroid-grid">
        {filtered.map((photo, index) => (
          <button
            className="polaroid"
            key={photo.file}
            onClick={() => setSelected(photo)}
            aria-label={`Apri ${photo.title}`}
          >
            <img
              src={imagePath(photo.file)}
              alt={photo.caption}
              loading="lazy"
            />

            <div className="polaroid-caption">
              <h3>{photo.title}</h3>
              <p>{photo.caption}</p>
              <small>España · Erasmus ♡</small>
            </div>
          </button>
        ))}
      </div>

      {/* VENTANA DE FOTO AMPLIADA */}
      {selected && (
        <div
          className="photo-modal"
          onClick={() => setSelected(null)}
        >
          <button
            className="modal-close"
            onClick={() => setSelected(null)}
            aria-label="Chiudi"
          >
            ×
          </button>

          <div
            className="modal-content"
            onClick={event => event.stopPropagation()}
          >
            <img
              src={imagePath(selected.file)}
              alt={selected.title}
            />

            <h2>{selected.title}</h2>

            <p>{selected.caption}</p>

            <div className="memory-note">
              <p>{selected.note}</p>
              <p>{selected.translation}</p>
            </div>

            <a
              href={imagePath(selected.file)}
              download={selected.file}
              className="main-button"
            >
              ↓ Scarica la foto
            </a>
          </div>
        </div>
      )}

      {/* FRASE FINAL */}
      <div className="album-ending">
        <span>♡</span>
        <h2>
          Non era solo un’estate...
        </h2>
        <p>
          Era un insieme di momenti che porterò
          sempre nel cuore.
        </p>
        <p>
          No fue solamente un verano...
          <br />
          Fue una colección de momentos que guardaré siempre.
        </p>
      </div>

    </main>
  )
}
