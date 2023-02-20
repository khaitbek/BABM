import React from 'react'
import { useTranslation } from "react-i18next"
import StyledSocial, { StyledSocialItem, StyledSocialLink, StyledSocialList, StyledSocialTitle } from "./social.styles"

export default function Social() {
    const { t } = useTranslation();
    return (
        <StyledSocial>
            <StyledSocialTitle>
                {t("share")}
            </StyledSocialTitle>
            <StyledSocialList>
                <StyledSocialItem>
                    <StyledSocialLink href="https://facebook.com" target="blank">
                        Facebook
                    </StyledSocialLink>
                </StyledSocialItem>
                <StyledSocialItem>
                    <StyledSocialLink href="https://instagram.com" target="blank">
                        Instagram
                    </StyledSocialLink>
                </StyledSocialItem>
                <StyledSocialItem>
                    <StyledSocialLink href="https://telegram.org" target="blank">
                        Telegram
                    </StyledSocialLink>
                </StyledSocialItem>
            </StyledSocialList>
        </StyledSocial>
    )
}
