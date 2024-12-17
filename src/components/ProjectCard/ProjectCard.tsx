import React from 'react'
import '../../sections/Projects/Projects.css'
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";



const ProjectCard = ({
    name,
    description,
    imgSrc,
    creationDateYear,
    creationDateMonth,
    languages
}) => {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    return (
        <div className="projects-box">
            <div className="projects-box-img"></div>
            <h2 className="projects-box-date">{t(creationDateMonth)} {creationDateYear}</h2>
            <h2 className="projects-box-title">{name}</h2>
            <h2 className="projects-box-description">{t(description)}</h2>
            <div className="projects-box-links">
                <a href="https://github.com/LuigiP2404" target="_blank" className="projects-box-links-button">
                    <FaGithub /> <span>GitHub</span>
                </a>
                <a href="#" className="projects-box-links-button">
                    <FaExternalLinkAlt /> <span>{t('Visit')}</span>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;