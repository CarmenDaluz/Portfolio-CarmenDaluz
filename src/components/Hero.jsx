import { Link } from 'react-router-dom'
import './Hero.css'



const Hero = () => {


    return (
        <>
            <section className="LPcontainer">
                <div>
                    <h1 >Hello my name is Carmen!</h1>
                    <h2>FULL-STACK WEB DEVELOPER | Visual Thinker </h2>
                    
                    <p>Developing, learning and designing with code.</p>
                    <Link to="/aboutme" className="text-deco-NO">
                        <button class="cssbuttons-io-button">
                        Get started
                            <div class="icon">
                                <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </button>

                        
                    </Link>

                    <p className="nine typerwriter">  "Good design is good code — and vice versa." </p>
                </div>

                <img className='imgCode' src="/codeimg.png" alt="retro window web paint" />
            </section>
        </>
    )
}

export default Hero;