import { React, useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useTranslation } from "react-i18next";

import '../../sections/Experience/Experience.css'

const ExperienceCard = ({
    company,
    title,
    textDuration,
    dateDuration,
    description,
    icons,
}) => {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped((prevState) => !prevState);
    };

    return (
        <div className={`experience-card container ${isFlipped ? "flipped" : ""}`}>
            <div className={`experience-card front`}>
                <div className="experience-card content">
                    <div className="experience-card-company">{company}</div>
                    <h2 className="experience-card-title">{title}</h2>
                    <div className="experience-card-duration">
                        <span className="experience-card-duration-text">{t(textDuration)}</span>
                        <span className="experience-card-duration-date">
                            {t(dateDuration)}
                        </span>
                    </div>
                    <div className="experience-card-description">
                        { description.map((desc) => (
                            <p dangerouslySetInnerHTML={{ __html: t(desc) }}></p>
                        ))}
                    </div>
                    <button className="experience-card-button" onClick={toggleFlip}>
                        Stack <span><MdKeyboardArrowRight /></span>
                    </button>
                </div>
            </div>
            <div className={`experience-card back`}>
                <div className="experience-card content">
                    {/* <h2 className="experience-card-title">Skills</h2> */}
                    <div className="experience-card-skills">
                        { icons.map((iconObj) => (
                            <div>
                                <iconObj.icon /> <span>{iconObj.iconDesc}</span>
                            </div>
                        ))}
                    </div>
                    <button className="experience-card-button" onClick={toggleFlip}>
                        <span><MdKeyboardArrowLeft /></span> {t('Details')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;