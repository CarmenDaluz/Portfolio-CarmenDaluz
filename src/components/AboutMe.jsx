import './AboutMe.css'
import Button from '../components/Button/Button'
import AboutMeCard from './AboutMeCard/AboutMeCard'



const AboutMe = () => {
  const stack = ['React', 'JavaScript', 'CSS', 'HTML5', 'Node.js', 'Express.js', 'MySQL', 'Git']
  const audiovisualSkills = ['Premiere', 'After Effects', 'DaVinci', 'Photoshop', 'Cinema 4D.']
  const softSkills =['empática', 'colaborativa', 'creativa','responsable', 'curiosa']

  return (

    <section className="am-page">
      <h1 className="am-title">About me :)</h1>

      <div className="am-grid">
        <AboutMeCard 
          title='De donde vengo ▼'
          desc1='Estudié Imagen en una escuela de Cine en Galicia. Durante años trabajé en audiovisual: detrás de la cámara y delante de la pantalla de edición. 
          Aprendí a ver el mundo de otra manera, el detalle técnico y el resultado visual son inseparables, algo que sigo aplicando desde el código.'
          desc2=
            {<ul className="am-stack">
              {audiovisualSkills.map((tech) => (
                <li key={tech} className="am-pill">{tech}</li>
              ))}
            </ul>}
          
        ></AboutMeCard>
        
        <AboutMeCard 
          title='Donde estoy ahora ▼
'
          desc1='Decidí cambiar del mundo audiovisual al tech, ya que antes solo construía piezas visuales, ahora con código construyo herramientas que resuelven problemas reales. Acabo de terminar un bootcamp de Desarrollo Web donde aprendí fundamentos y a entender la programación. Ahora continúo con mi aprendizaje, con motivación y con espectativas de lo que viene a continuación.'
          desc2= 
            {<ul className="am-stack">
              {stack.map((tech) => (
                <li key={tech} className="am-pill">{tech}</li>
              ))}
            </ul>}
        ></AboutMeCard>

        <AboutMeCard 
          title='Qué me diferencia ▼
'
          desc1='Soy una persona multidisciplinar: combino criterio visual, capacidad técnica y muchas ganas de continuar aprendiendo. Mi empatía, actitud colaborativa y mi gran capacidad de concentrarme en mis metas, me ayudan a trabajar bien en equipo y en la dirección correcta.'
          desc2= {<ul className="am-stack">
              {softSkills.map((tech) => (
                <li key={tech} className="am-pill">{tech}</li>
              ))}
            </ul>}
          
        ></AboutMeCard>

        <AboutMeCard 
          title='Lo que busco ▼
'
          desc1='Busco un equipo donde haya espacio para crecer y
            equivocarse. Quiero aportar desde el primer día, con curiosidad,
            con ganas y con todas mis habilidades, mientras sigo aprendiendo de
            personas con más experiencia.'
          desc2=' Me importa trabajar en productos con propósito, en un entorno donde
            la comunicación y el cuidado del detalle sean valores compartidos.'
                  
        ></AboutMeCard>

      </div>
      
      <Button to='/aboutme' title="Let's see my CV"></Button>
    </section>
  
  )
}

export default AboutMe
