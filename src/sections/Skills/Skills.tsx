import React from 'react'
import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaGitAlt, FaReact, FaGithub, FaJira, FaMagento } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { SiMysql, SiTypescript, SiJira } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { GrGraphQl } from "react-icons/gr";
import { TbApi } from "react-icons/tb";

import './Skills.css'

function Skills() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();

    return (
        <div className="skills" id="skills">
            <p className="section-intro-text">{t('Discover My')}</p>
            <h2 className="section-title">{t('Skills')}</h2>
            <p className="skills-paragraph">
                {t("During these years of work I have learned and improved a lot of skills. Even though I'm a Front-End Developer I have some basic Back End knowledges since I had the opportunity to work closely with the Back End team in my previous company.")}
            </p>
            <div className="skills-box-container">
                <div className="skills-box">
                    <div className="skils-box-section">
                        <h2 className="skills-box-section-title">
                            {t('Programming Languages')}
                        </h2>
                        <div className="skills-box-section-languages">
                            <div className="skills-box-section-languages-item">
                                <FaHtml5 /> <span>HTML</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <FaCss3Alt /> <span>CSS</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <IoLogoJavascript /> <span>JavaScript</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <SiTypescript /> <span>TypeScript</span>
                            </div>
                        </div>
                    </div>
                    <div className="skils-box-section">
                        <h2 className="skills-box-section-title">
                            {t('Frameworks & Libraries')}
                        </h2>
                        <div className="skills-box-section-languages">
                            <div className="skills-box-section-languages-item">
                                <FaSass /> <span>SASS</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <DiJqueryLogo /> <span>jQuery</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <IoLogoVue /> <span>VueJS</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <FaReact /> <span>ReactJS</span>
                            </div>
                        </div>
                    </div>
                    <div className="skils-box-section">
                        <h2 className="skills-box-section-title">
                            {t('Tools')}
                        </h2>
                        <div className="skills-box-section-languages">
                            <div className="skills-box-section-languages-item">
                                <VscAzureDevops /> <span>DevOps</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <FaGitAlt /> <span>Git</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <FaGithub /> <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                    <div className="skils-box-section">
                        <h2 className="skills-box-section-title">
                            {t('Methodologies')}
                        </h2>
                        <div className="skills-box-section-languages">
                            <div className="skills-box-section-languages-item">
                                <SiJira /> <span>Agile</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <FaJira /> <span>DevOps</span>
                            </div>
                        </div>
                    </div>
                    <div className="skils-box-section">
                        <h2 className="skills-box-section-title">
                            {t('Other')}
                        </h2>
                        <div className="skills-box-section-languages">
                            <div className="skills-box-section-languages-item">
                                <GrGraphQl /> <span>GraphQL</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <FaMagento /> <span>Magento</span>
                            </div>
                            <div className="skills-box-section-languages-item">
                                <TbApi /> <span>APIs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills