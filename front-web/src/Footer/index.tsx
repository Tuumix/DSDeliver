import './styles.css'
import {ReactComponent as Youtube} from './Youtube.svg';
import {ReactComponent as Instagram} from './Instagram.svg';
import {ReactComponent as LinkedIn} from './Linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCWVYsWuXQXRPSrISs4KZYhw" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.instagram.com/?hl=pt-br">
                    <Instagram />
                </a>
                <a href="https://www.linkedin.com/in/wellington-hiroshi-takano/">
                    <LinkedIn />
                </a>
            </div>
        </footer>
    )
}

export default Footer;