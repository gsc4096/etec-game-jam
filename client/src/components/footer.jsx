import etec from '../assets/landing/etec.svg'
import logo from '../assets/landing/Logo-white.svg'
import tiktok from '../assets/landing/tiktok.svg'
import insta from '../assets/landing/insta.svg'
import yt from '../assets/landing/yt.svg'

const Footer = () => {
    return (
        <section className="footer">
            <div className="links">
                <div className="tiktok">
                    <img src={tiktok} alt="" />
                    <a href=".">@abdias.gamejam</a>
                </div>

                <div className="instagram">
                    <img src={insta} alt="" />

                    <a href=".">@abdias.gamejam</a>
                </div>

                <div className="youtube">
                    <img src={yt} alt="" />

                    <a href=".">@abdias.gamejam</a>
                </div>
            </div>

            <div className="botao">
                <h5>Você é jurado ou professor?</h5>
                <a href=".">Entre por aqui</a>
            </div>

            <div className="images">
                <img src={logo} alt="" />
                <img src={etec} alt="" />
            </div>
        </section>
    )
}

export default Footer;