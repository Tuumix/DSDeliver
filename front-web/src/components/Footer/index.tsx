import React from 'react';
import {ReactComponent as Youtube} from '../../assets/svg/Instagram.svg';
import {ReactComponent as Instagram} from '../../assets/svg/Instagram.svg';
import {ReactComponent as LinkedIn} from '../../assets/svg/Linkedin.svg';
import { 
    MainFooter,
    FooterIcons 
} from './styles';

function Footer() {
    return (
        <MainFooter>
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <FooterIcons>
                <a href="https://www.youtube.com/channel/UCWVYsWuXQXRPSrISs4KZYhw" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.instagram.com/?hl=pt-br">
                    <Instagram />
                </a>
                <a href="https://www.linkedin.com/in/wellington-hiroshi-takano/">
                    <LinkedIn />
                </a>
            </FooterIcons>
        </MainFooter>
    )
}

export default Footer;