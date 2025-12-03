import React from 'react'
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaGitAlt, FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard.tsx';
import './Experience.css'
import { IconType } from 'react-icons';

interface ExperienceInterface {
    company: String,
    title: String,
    textDuration: String,
    dateDuration: String,
    description: String[],
    icons: IconTypeDesc[]
}

interface IconTypeDesc {
    icon: IconType,
    iconDesc: String
}

function Experience() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();

    const experiences: ExperienceInterface[] = [
        {
            company: 'TS Innovation',
            title: 'Full Stack Developer',
            textDuration: '3 months',
            dateDuration: 'Mar 2021 - Jun 2021',
            description: [t('Development of any kind of website for customers, from landing pages to eCommerce websites.')],
            icons: [
                {
                    icon: FaHtml5,
                    iconDesc: 'HTML'
                },
                {
                    icon: FaSass,
                    iconDesc: 'SASS'
                },
                {
                    icon: IoLogoJavascript,
                    iconDesc: 'JavaScript'
                },
                {
                    icon: FaPhp,
                    iconDesc: 'PHP'
                },
                {
                    icon: SiMysql,
                    iconDesc: 'MySQL'
                },
                {
                    icon: FaWordpress,
                    iconDesc: 'WordPress'
                },
            ]
        },
        {
            company: 'Agriverse',
            title: 'Front End Developer',
            textDuration: '1 Year 11 Months',
            dateDuration: 'Sep 2021 - Aug 2023',
            description: [t(`Front-End Development of the company's website (<a href='https://www.agriverse.it' target='_blank'>https://www.agriverse.it</a>) and of a management software (webapp) for agricultural companies.`), t(`Development of micro front-end services.`)],
            icons: [
                {
                    icon: FaHtml5,
                    iconDesc: 'HTML'
                }, {
                    icon: FaSass,
                    iconDesc: 'SASS'
                }, {
                    icon: IoLogoJavascript,
                    iconDesc: 'JavaScript'
                }, {
                    icon: SiTypescript,
                    iconDesc: 'TypeScript'
                },
                {
                    icon: DiJqueryLogo,
                    iconDesc: 'jQuery'
                },
                {
                    icon: IoLogoVue,
                    iconDesc: 'VueJS'
                },
                {
                    icon: FaReact,
                    iconDesc: 'ReactJS'
                },
                {
                    icon: FaGitAlt,
                    iconDesc: 'Git'
                },
                {
                    icon: FaWordpress,
                    iconDesc: 'WordPress'
                },
            ]
        },
        {
            company: 'Accenture',
            title: 'Front End Developer',
            textDuration: '2+ Years',
            dateDuration: 'Oct 2023 - Current',
            description: [t('Front-End Development of an eCommerce with Magento integration (GraphQL)'), t("I've worked with an international team, with the use of English language as primary language, and an Agile methodology")],
            icons: [
                {
                    icon: FaHtml5,
                    iconDesc: 'HTML'
                },
                {
                    icon: FaSass,
                    iconDesc: 'SASS'
                },
                {
                    icon: IoLogoJavascript,
                    iconDesc: 'JavaScript'
                },
                {
                    icon: SiTypescript,
                    iconDesc: 'TypeScript'
                },
                {
                    icon: IoLogoVue,
                    iconDesc: 'Vue'
                },
                {
                    icon: FaGitAlt,
                    iconDesc: 'Git'
                },
            ]
        },
    ]

    const [experiencesVisible, updateExperiencesVisible] = useState<ExperienceInterface[]>([])
    const [currentExperiencesVisible, updateCurrentExperiencesVisible] = useState<number>(0)
    const [animationIndexes, setAnimationIndexes] = useState<number[]>([]);

    const showNext = (index: number) => {
        let currentExperiencesVisibleNumber = currentExperiencesVisible
        if (index === currentExperiencesVisible - 1) {
            updateCurrentExperiencesVisible(currentExperiencesVisibleNumber + 1)
            const newArray = [...experiencesVisible, experiences[currentExperiencesVisibleNumber]];
            updateExperiencesVisible(newArray);
            setAnimationIndexes((prev) => [...prev, currentExperiencesVisibleNumber]);
            setTimeout(() => {
                setAnimationIndexes((prev) => prev.filter((i) => i !== currentExperiencesVisibleNumber));
            }, 500);
        }
    }

    return (
        <div className="experience" id="experience">
            <p className="section-intro-text">{t('Explore My')}</p>
            <h2 className="section-title">{t('Experience 2')}</h2>
            <div className="experience-cards-container">
                {
                    experiencesVisible.length > 0
                        ? experiencesVisible.map((experience, index) => (
                            <React.Fragment key={index}>
                                <div className={`experience-card-container ${animationIndexes.includes(index) ? 'fade-in' : ''}`}>
                                    <ExperienceCard
                                        company={experience.company}
                                        title={experience.title}
                                        textDuration={experience.textDuration}
                                        dateDuration={experience.dateDuration}
                                        description={experience.description}
                                        icons={experience.icons}
                                    />
                                </div>
                                {index < experiences.length - 1 && <div className={`arrow-right ${animationIndexes.includes(index) ? 'fade-in' : ''}`}>
                                    <a onClick={() => showNext(index)} className="desktop"><MdKeyboardDoubleArrowRight /></a>
                                    <a onClick={() => showNext(index)} className="mobile"><MdKeyboardDoubleArrowDown /></a>
                                </div>}
                            </React.Fragment>
                        ))
                        : <button className="experience-card-empty-button" onClick={() => showNext(-1)}>{t('Find Out!')}</button>
                }
            </div>
        </div>
    )
}

export default Experience