import logo from '../assets/landing/Logo.svg';
import login from '../assets/landing/login-icon.svg';

const Header = () => {
    return (
        <header>
            <nav id="nav-bar">
                <i id="nav-logo"><img src={logo} alt="logo" /></i>

                <ul id="nav_list">
                    <li className="nav-item active">
                        <a href=".">Início</a>
                    </li>
                    <li className="nav-item">
                        <a href=".">Regulamento</a>
                    </li>
                    <li className="nav-item">
                        <a href="#testimonials">Como funciona?</a>
                    </li>
                </ul>
            </nav>
            <div className="bnt">
                <a href="/login" className="btn-plat"><img src={login} alt="login" /></a>
            </div>
        </header>
    );
}

export default Header;
