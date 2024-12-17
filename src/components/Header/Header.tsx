import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from "react-i18next";
import enFlag from '../../assets/uk-flag.svg'
import itFlag from '../../assets/it-flag.svg'
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import './Header.css'

function Header() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const [showLanguageSelector, setShowLanguageSelector] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleChangeLanguage = (language: string) => {
        changeLanguage(language);
        setCurrentLanguage(language);
    }

    const toggleLanguageSelector = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowLanguageSelector((prev) => !prev)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowLanguageSelector(false);
        }
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu((prev) => !prev);
    }

    useEffect(() => {
            if (showLanguageSelector) {
                document.addEventListener('click', handleClickOutside);
            } else {
                document.removeEventListener('click', handleClickOutside);
            }
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }, [showLanguageSelector]);

    return(
        <div className="header">
            <div className="header-menu">
                <a className="header-menu-item" href="#about">
                    {t('About')}
                </a>
                <a className="header-menu-item" href="#experience">
                    {t('Experience')}
                </a>
                <a className="header-menu-item" href="#skills">
                    {t('Skills')}
                </a>
                <a className="header-menu-item" href="#projects">
                    {t('Projects')}
                </a>
                <a className="header-menu-item" href="#contact">
                    {t('Contact')}
                </a>
                <a className="header-menu-item language-selector" onClick={toggleLanguageSelector}>
                    { currentLanguage == 'en' ?
                    <img src={enFlag} /> :
                    <img src={itFlag} /> }
                    <span>{showLanguageSelector ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
                    {showLanguageSelector &&
                    <div ref={dropdownRef} className="language-selector-box">
                        <button className="language-selector-box-item" onClick={() => handleChangeLanguage('en')}>
                            <img src={enFlag} /> <span>English</span> { currentLanguage === 'en' && <span className="active-language"><FaCheck /></span>}
                        </button> 
                        <button className="language-selector-box-item" onClick={() => handleChangeLanguage('it')}>
                            <img src={itFlag} /> <span>Italian</span> { currentLanguage === 'it' && <span className="active-language"><FaCheck /></span>}
                        </button>
                    </div>
                    }
                </a>
            </div>
            <div className="header-menu-mobile">
                <a className="header-menu-mobile-menu" onClick={() => toggleMobileMenu()}>
                    <IoMenu />
                </a>
            </div>
            <div className={`header-menu-mobile-container ${showMobileMenu ? 'show' : ''}`}>
                <a className="header-menu-mobile-container-close" onClick={() => toggleMobileMenu()}>
                    <RxCross2 />
                </a>
                <a className="header-menu-mobile-item" href="#about">
                    {t('About')}
                </a>
                <a className="header-menu-mobile-item" href="#experience">
                    {t('Experience')}
                </a>
                <a className="header-menu-mobile-item" href="#skills">
                    {t('Skills')}
                </a>
                <a className="header-menu-mobile-item" href="#projects">
                    {t('Projects')}
                </a>
                <a className="header-menu-mobile-item" href="#contact">
                    {t('Contact')}
                </a>
                <a className="header-menu-mobile-item language-selector" onClick={toggleLanguageSelector}>
                    { currentLanguage == 'en' ?
                    <img src={enFlag} /> :
                    <img src={itFlag} /> }
                    <span>{showLanguageSelector ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
                    {showLanguageSelector &&
                    <div ref={dropdownRef} className="language-selector-box">
                        <button className="language-selector-box-item" onClick={() => handleChangeLanguage('en')}>
                            <img src={enFlag} /> <span className="language-selector-box-item-text">English</span> { currentLanguage === 'en' && <span className="active-language"><FaCheck /></span>}
                        </button> 
                        <button className="language-selector-box-item" onClick={() => handleChangeLanguage('it')}>
                            <img src={itFlag} /> <span className="language-selector-box-item-text">Italian</span> { currentLanguage === 'it' && <span className="active-language"><FaCheck /></span>}
                        </button>
                    </div>
                    }
                </a>
            </div>
        </div>
    )
}

export default Header