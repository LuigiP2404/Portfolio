import React from 'react'
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";

import './Contact.css'

function Contact() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();

    return (
        <div className="contact" id="contact">
            <p className="section-intro-text">{t('Get In Touch')}</p>
            <h2 className="section-title">{t('Contact 2')}</h2>
            <div className="contact-box">
                <div className="contact-box-item">
                    <a href="mailto: luigipaglionicofed@gmail.com"><span><MdEmail /></span> luigipaglionicofed@gmail.com</a>
                </div>
                <div className="contact-box-item">
                    <a href="https://www.linkedin.com/in/luigi-paglionico-2551171b6/" target="_blank"><span><TiSocialLinkedin /></span> LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;