import React from 'react'
import { useTranslation } from "react-i18next";
import { RiMedalFill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import './About.css'

function About() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();

    return (
        <div className="about" id="about">
            <p className="section-intro-text">{t('Get To Know More')}</p>
            <h2 className="section-title">{t('About Me')}</h2>
            <div className="about-container">
                <div className="about-boxes-container">
                    <div className="about-box">
                        <div className="about-box-icon">
                            <MdComputer />
                        </div>
                        <span className="about-box-title">
                            {t('Experience')}
                        </span>
                        <span className="about-box-text">
                            {t('4+ Years')}
                        </span>
                        <span className="about-box-text">
                            {t('Front End Development')}
                        </span>
                    </div>
                    <div className="about-box">
                        <div className="about-box-icon">
                            <RiMedalFill />
                        </div>
                        <span className="about-box-title">
                            {t('Education')}
                        </span>
                        <span className="about-box-text">
                            Diploma
                        </span>
                        <span className="about-box-text">
                            I.T.E.S. Lenoci
                        </span>
                    </div>
                </div>
                <div className="about-paragraph">
                    {t(`I am a highly motivated and adaptable Front-End Developer with over three years of professional experience in building and optimizing web applications. I have worked on both small-scale projects and large international collaborations, enhancing my technical expertise and teamwork skills. My technical stack includes HTML, CSS, SASS, JavaScript, TypeScript, VueJS, ReactJS (a few months experience here) and Agile methodologies, among others. I thrive in dynamic environments, enjoy solving complex problems, and am committed to continuous learning. Currently seeking opportunities across Europe to expand my professional experience, improve my English prociency, and embrace new cultural challenges.`)}
                </div>
            </div>
        </div>
    )
}

export default About