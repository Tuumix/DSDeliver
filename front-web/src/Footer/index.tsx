import './styles.css'
import {ReactComponent as Youtube} from './Youtube.svg';
import {ReactComponent as Instagram} from './Instagram.svg';
import {ReactComponent as LinkedIn} from './Linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="" target="_new">
                    <Youtube />
                </a>
                <a href="">
                    <Instagram />
                </a>
                <a href="">
                    <LinkedIn />
                </a>
            </div>
        </footer>
    )
}

export default Footer;