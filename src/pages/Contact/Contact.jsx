import './Contact.css'
import Button from '../../components/Button/Button'

const Contact = () => {
  return (
    <section className="ct-page">
      <h1 className="ct-title">¿Hablamos?</h1>
      <h2 className=''>
        daluuz.fernandez.carmen@gmail.com
      </h2>
      <Button to='/aboutme' title="¿Hablamos'"></Button>
    </section>
  )
}

export default Contact
