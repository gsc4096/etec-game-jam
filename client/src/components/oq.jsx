
import pc from '../assets/landing/pc.svg';

const Info = () => {
    return (
        <section className="info">

            <div className="img-monitor">
                <img src={pc} alt="pc" />
            </div>
            <div className="txt-info">
                <h1 className="title-info">O que é uma GameJam?</h1>
                <p className="description-info">Uma Game Jam é um evento onde desenvolvedores de jogos se reúnem para criar jogos em um período de tempo limitado. Durante a Game Jam, os participantes trabalham em equipes ou individualmente para criar um jogo a partir do zero, seguindo um tema específico ou desafio proposto pelos organizadores. Esses eventos são ótimas oportunidades para os desenvolvedores exercitarem sua criatividade, aprenderem novas habilidades . No final da Game Jam, os jogos são geralmente apresentados e avaliados, muitas vezes com prêmios para os melhores projetos. </p>
            </div>

        </section>


    )
}

export default Info;