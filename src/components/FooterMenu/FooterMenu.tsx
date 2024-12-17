import React from 'react'
import './FooterMenu.css'
import { useTranslation } from "react-i18next";

function FooterMenu() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    return(
        <div className="footermenu">
            <div className="footermenu-menu">
                <a className="footermenu-menu-item" href="#about">
                    {t('About')}
                </a>
                <a className="footermenu-menu-item" href="#experience">
                    {t('Experience')}
                </a>
                <a className="footermenu-menu-item" href="#skills">
                    {t('Skills')}
                </a>
                <a className="footermenu-menu-item" href="#projects">
                    {t('Projects')}
                </a>
                <a className="footermenu-menu-item" href="#contact">
                    {t('Contact')}
                </a>
            </div>
        </div>
    )
}

export default FooterMenu