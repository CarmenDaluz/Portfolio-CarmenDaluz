import './LandingPage.css'


const LandingPage = () => {


    return (
        <>
            <section className="LPcontainer">
                <div>
                    <h1 >Hello my name is Carmen!</h1>
                    <h2>FRONTEND DEVELOPER</h2>
                    <p>Developing, learning and designing with code. <br /> Frontend developer · Visual thinker </p>
                    <p className="nine">  "Good design is good code — and vice versa." </p>                
                </div>

                <img className='imgCode' src="/codeimg.png" alt="retro window web paint" />
            </section>
        </>
    )
}

export default LandingPage;