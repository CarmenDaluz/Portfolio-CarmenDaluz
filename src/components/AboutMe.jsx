import './AboutMe.css'

const stack = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Express.js', 'MySQL']

const AboutMe = () => {
  return (
    <section className="am-page">
      <h1 className="am-title">About me</h1>

      <div className="am-grid">

        <article className="am-card am-card--half">
          <h2>De donde vengo</h2>
          <p>
            Vengo del mundo audiovisual. Durante años trabajé en producción de
            vídeo, edición, eventos en directo y producciones internacionales.
          </p>
          <p>
            Ese entorno me enseñó a trabajar bajo presión, a comunicar ideas
            visualmente y a entender que los detalles importan.
          </p>
        </article>

        <article className="am-card am-card--half">
          <h2>Donde estoy ahora</h2>
          <p>
            Acabo de terminar el bootcamp de desarrollo web de{' '}
            <strong>Adalab</strong>, donde aprendí a construir aplicaciones
            full-stack desde cero.
          </p>
          <ul className="am-stack">
            {stack.map((tech) => (
              <li key={tech} className="am-badge">{tech}</li>
            ))}
          </ul>
        </article>

        <article className="am-card am-card--full">
          <h2>Qué me diferencia</h2>
          <p>
            Tengo un perfil multidisciplinar que combina criterio visual,
            sensibilidad hacia la experiencia de usuario y capacidad técnica.
            No solo escribo código que funciona — pienso en cómo se siente
            usarlo.
          </p>
          <p>
            La empatía que desarrollé trabajando con equipos creativos y
            clientes me ayuda a entender qué necesita realmente un producto,
            más allá de los requisitos.
          </p>
        </article>

        <article className="am-card am-card--full">
          <h2>Lo que busco</h2>
          <p>
            Busco un equipo donde los juniors tengan espacio para crecer y
            equivocarse. Quiero aportar desde el primer día — con curiosidad,
            con ganas y con todo lo que ya sé — mientras sigo aprendiendo de
            personas con más experiencia.
          </p>
          <p>
            Me importa trabajar en productos con propósito, en un entorno donde
            la comunicación y el cuidado del detalle sean valores compartidos.
          </p>
        </article>

      </div>
    </section>
  )
}

export default AboutMe
