import React from 'react'
import { useTranslation } from "react-i18next";
import headerLogo from '../../assets/whitelogo.png'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Main.css'

function Main() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();

    return (
        <div className="main">
            <div className="main-left">
                <div className="bubble-container">
                    <div className="bubble">
                        <img src={headerLogo} className="header-logo" alt="logo" />
                    </div>
                </div>
            </div>
            <div className="main-right">
                <span className="small-text">{t("Hello I'm")}</span>
                <h1 className="name">Luigi Paglionico</h1>
                <span className="medium-text">Front End Developer</span>
                <div className="main-right-buttons-container btns">
                    <a className="CV-button button" download href={language === 'en' ? '/Portfolio/CV-PaglionicoLuigi-EN.pdf' : '/Portfolio/CV-PaglionicoLuigi-IT.pdf'}>
                        {t("Download CV")}
                    </a>
                    <a href="#contact" className="contact-button button">
                        {t("Contact info")}
                    </a>
                </div>
                <div className="main-right-buttons-container">
                    <a className="social-button linkedin" target="_blank" href="https://www.linkedin.com/in/luigi-paglionico-2551171b6/">
                        <FaLinkedin />
                    </a>
                    <a className="social-button github" target="_blank" href="https://github.com/LuigiP2404">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Main