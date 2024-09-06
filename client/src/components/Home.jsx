
import Hero from '../assets/landing/heros.svg';


const Home = () => {
    return (
        <section id="home">
            <div className="blur"></div>
            <div id="box-txt">
                <h1 className="title"> Já pensou em fazer
                    <br /> um Game?
                </h1>

                <p className="description">
                    A Etec GameJam é uma ótima oportunidade
                    para você aprender e executar um jogo.
                </p>

                <div className="btn-home">
                    <a href="." className="sub-btn">Inscreva-se</a>

                    <a href="." className="ins-btn">Já me inscrevi</a>
                </div>
            </div>
            <div className="banner">
                <img src={Hero} alt="Heros" />
            </div>
        </section>

    )
}

export default Home;