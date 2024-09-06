import steps from '../assets/landing/steps.svg';
import hero from '../assets/landing/hero.png';
const Steps = () => {
    return (
        <section className="steps">
            <div className="block">
                <div className="txt-steps">
                    <h1>Etapas da competição</h1>
                </div>

                <div className="step">
                    <img src={steps} alt="step" />
                </div>

            </div>

            <div className="hero">
                <img src={hero} alt="" />
            </div>

            <div className="blur-3"></div>


        </section>
    )
}

export default Steps;