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
    languages,
    websiteUrl,
    githubUrl
}) => {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    return (
        <div className="projects-box">
            <div className="projects-box-img">
                <img src={imgSrc} />
            </div>
            <h2 className="projects-box-date">{t(creationDateMonth)} {creationDateYear}</h2>
            <h2 className="projects-box-title">{name}</h2>
            <h2 className="projects-box-description">{t(description)}</h2>
            <div className="projects-box-links">
                <a href={githubUrl} target="_blank" className="projects-box-links-button">
                    <FaGithub /> <span>GitHub</span>
                </a>
                {websiteUrl && <a href={websiteUrl} target="_blank" className="projects-box-links-button">
                    <FaExternalLinkAlt /> <span>{t('Visit')}</span>
                </a>}
            </div>
        </div>
    )
}

export default ProjectCard;