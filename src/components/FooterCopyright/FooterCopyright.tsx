import React from 'react'
import { useTranslation } from "react-i18next";
import './FooterCopyright.css'

function FooterCopyright() {
    const { t, i18n: {changeLanguage, language} } = useTranslation();

    return (
        <div className="footer-copyright">
            {t('Copyright © 2024 Luigi Paglionico. All Rights Reserved.')}
        </div>
    )
}

export default FooterCopyright;