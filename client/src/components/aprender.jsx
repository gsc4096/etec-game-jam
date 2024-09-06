import jogo from '../assets/landing/controle.svg'
import monitor from '../assets/landing/monitor.svg'
import prot from '../assets/landing/prototipo.svg'

const Aprender = () => {
    return (
        <section>

            <div className="txt-apre">
                <h1>O que você vai aprender</h1>
            </div>

            <div className="card">
                <div className="jogo">
                    <img src={jogo} alt="" />
                    <h2>Fazer um jogo do zero</h2>
                    <p>Você aprenderá a fazer um jogo do zero, utilizando várias técnicas diferentes</p>
                </div>
                <div className="cod">
                    <img src={monitor} alt="" />
                    <h2 id="top2">Codar em c++</h2>
                    <p>Você aprenderá a desenvolver jogos usando c++ com Engine Unreal 5</p>
                </div>
                <div className="prot">
                    <img src={prot} alt="" />
                    <h2 id="top">Fazer um protótipo jogavél</h2>
                    <p>Você irá sair dessa GameJam com um jogo em mãos</p>
                </div>
            </div>
            <div className="blur-2"></div>
        </section>
    )
}

export default Aprender;