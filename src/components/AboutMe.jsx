import './AboutMe.css'
import Button from '../components/Button/Button'
import ProjectsCard from '../components/Projects-Card/ProjectsCard'



const AboutMe = () => {
  const stack = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Express.js', 'MySQL']


  return (

    <section className="am-page">
      <h1 className="am-title">About me</h1>

      <Button title='My CV'></Button>

      <div className="am-grid">
        <ProjectsCard 
          title='De donde vengo'
          desc1=' Vengo del mundo audiovisual. Durante años trabajé en producción de
          vídeo, edición, eventos en directo y producciones internacionales.'
          desc2='Ese entorno me enseñó a trabajar bajo presión, a comunicar ideas
          visualmente y a entender que los detalles importan.'
          
        ></ProjectsCard>
        
        <ProjectsCard 
          title='Donde estoy ahora'
          desc1=' Acabo de terminar el bootcamp de desarrollo web de Adalab, donde aprendí a construir aplicaciones full-stack desde cero.'
          desc2= 
            {<ul className="am-stack">
              {stack.map((tech) => (
                <li key={tech} className="am-badge">{tech}</li>
              ))}
            </ul>}
        ></ProjectsCard>

        <ProjectsCard 
          title='Qué me diferencia'
          desc1='Tengo un perfil multidisciplinar que combina criterio visual,
          sensibilidad hacia la experiencia de usuario y capacidad técnica.
          No solo escribo código que funciona — pienso en cómo se siente
          usarlo.'
          desc2=' La empatía que desarrollé trabajando con equipos creativos y
          clientes me ayuda a entender qué necesita realmente un producto,
          más allá de los requisitos.'
          
        ></ProjectsCard>

        <ProjectsCard 
          title='Lo que busco'
          desc1='Busco un equipo donde los juniors tengan espacio para crecer y
            equivocarse. Quiero aportar desde el primer día — con curiosidad,
            con ganas y con todo lo que ya sé — mientras sigo aprendiendo de
            personas con más experiencia.'
          desc2=' Me importa trabajar en productos con propósito, en un entorno donde
            la comunicación y el cuidado del detalle sean valores compartidos.'
                  
        ></ProjectsCard>
        
      </div>
    </section>
  
  )
}

export default AboutMe
