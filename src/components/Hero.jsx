import { Link } from 'react-router-dom'
import './Hero.css'
import '../components/Button/Button'
import Button from '../components/Button/Button'


const Hero = () => {


    return (
        <>
            <section className="heroContainer">
                <div className='textHeroContainer'>
                    <img className='imgCode' src="/codeimg.png" alt="retro window web paint" />
                    
                    <h1 >¡Hola! My name is Carmen</h1>

                    <h2>FULL-STACK WEB DEVELOPER | Visual Thinker </h2>
                    
                    <p>Developing, learning and designing with code.</p>
                    
                    <Button to='/aboutme' title= 'About me'></Button>
                  
                </div>

                
                <div className="terminal-window">
                    <div className="terminal-bar">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="terminal-content">
                        <div className='terminal'>
                            <p className="colorTerminal">  Carmen@CHAREN-DEV:~$</p>
                            <p className="nine typerwriter">    "Good design is good code — and vice versa." </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;