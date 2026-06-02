import { Link } from 'react-router-dom'
import './Hero.css'
import '../components/Button/Button'
import Button from '../components/Button/Button'


const Hero = () => {


    return (
        <>
            <section className="heroContainer">
                <div className='textHeroContainer'>
                    <h1 >¡Hola! My name is Carmen</h1>

                    <h2>FULL-STACK WEB DEVELOPER | Visual Thinker </h2>
                    
                    <p>Developing, learning and designing with code.</p>
                    <Button title= 'About me'></Button>
                  
                    <div className='terminal'>
                        <p className="">  Carmen@CHAREN-DEV:~$</p>
                        <p className="nine typerwriter">    "Good design is good code — and vice versa." </p>
                    </div>
                </div>

                <img className='imgCode' src="/codeimg.png" alt="retro window web paint" />
            </section>
        </>
    )
}

export default Hero;