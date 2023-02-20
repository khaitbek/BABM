import React from 'react'
import { useTranslation } from "react-i18next";
import BackButton from "../../../../components/BackButton";
import { TextContainer } from "../../../../components/TextContainer/TextContainer";
import { StyledContainer, StyledDiv } from "../../../../styles/global"
import BreadCrumb from "../../components/BreadCrumb";
import { StyledSingleStuff, StyledSingleStuffContact, StyledSingleStuffImg, StyledSingleStuffSocialImg, StyledSingleStuffSocialItem, StyledSingleStuffSocialLink, StyledSingleStuffSocials, StyledSingleStuffText, StyledSingleStuffTitle, StyledStuffContact, StyledStuffImg, StyledStuffItem, StyledStuffList, StyledStuffText, StyledStuffTitle } from "./staff.styles"
import facebookImg from "/facebook.svg";
import instagramImg from "/instagram.svg";
import telegramImg from "/telegram.svg";
export default function Staff() {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <BreadCrumb links={[{ prev: true, name: "navigation.school" }, { prev: false, name: "navigation.staff" }]} />

            <StyledSingleStuff>
                <StyledSingleStuffImg src="https://via.placeholder.com/300x400" width={300} height={400} alt="Mirsagatova Tamara Maxamatovna" />
                <StyledDiv>
                    <TextContainer maxWidth="320px">
                        <StyledSingleStuffTitle>
                            Mirsagatova
                            Tamara
                            Maxamatovna
                        </StyledSingleStuffTitle>
                        <StyledSingleStuffText>
                            {t("CEO")}
                        </StyledSingleStuffText>
                        <StyledSingleStuffContact>
                            {t("phone")}: +998 71 237 34 22 <br />
                            {t("footer.form.email")}: info@barkamolavlod.uz
                        </StyledSingleStuffContact>
                    </TextContainer>
                    <StyledSingleStuffSocials>
                        <StyledSingleStuffSocialItem>
                            <StyledSingleStuffSocialLink href="https://facebook.com">
                                <StyledSingleStuffSocialImg src={facebookImg} />
                            </StyledSingleStuffSocialLink>
                        </StyledSingleStuffSocialItem>
                        <StyledSingleStuffSocialItem>
                            <StyledSingleStuffSocialLink href="https://instagram.com">
                                <StyledSingleStuffSocialImg src={instagramImg} />
                            </StyledSingleStuffSocialLink>
                        </StyledSingleStuffSocialItem>
                        <StyledSingleStuffSocialItem>
                            <StyledSingleStuffSocialLink href="https://telegram.org">
                                <StyledSingleStuffSocialImg src={telegramImg} />
                            </StyledSingleStuffSocialLink>
                        </StyledSingleStuffSocialItem>
                    </StyledSingleStuffSocials>
                </StyledDiv>
            </StyledSingleStuff>

            <StyledStuffList>
                <StyledStuffItem>
                    <StyledStuffImg src="https://via.placeholder.com/250x333" width={250} height={333} />
                    <StyledStuffTitle>
                        Mirsagatova Tamara Maxamatovna
                    </StyledStuffTitle>
                    <StyledStuffText>
                        {t("CEO")}

                    </StyledStuffText>
                    <StyledStuffContact>
                        {t("phone")}: +998 71 237 34 22
                        {t("footer.form.email")}: info@barkamolavlod.uz
                    </StyledStuffContact>
                </StyledStuffItem>
                <StyledStuffItem>
                    <StyledStuffImg src="https://via.placeholder.com/250x333" width={250} height={333} />
                    <StyledStuffTitle>
                        Mirsagatova Tamara Maxamatovna
                    </StyledStuffTitle>
                    <StyledStuffText>
                        {t("CEO")}

                    </StyledStuffText>
                    <StyledStuffContact>
                        {t("phone")}: +998 71 237 34 22
                        {t("footer.form.email")}: info@barkamolavlod.uz
                    </StyledStuffContact>
                </StyledStuffItem>
                <StyledStuffItem>
                    <StyledStuffImg src="https://via.placeholder.com/250x333" width={250} height={333} />
                    <StyledStuffTitle>
                        Mirsagatova Tamara Maxamatovna
                    </StyledStuffTitle>
                    <StyledStuffText>
                        {t("CEO")}

                    </StyledStuffText>
                    <StyledStuffContact>
                        {t("phone")}: +998 71 237 34 22
                        {t("footer.form.email")}: info@barkamolavlod.uz
                    </StyledStuffContact>
                </StyledStuffItem>
                <StyledStuffItem>
                    <StyledStuffImg src="https://via.placeholder.com/250x333" width={250} height={333} />
                    <StyledStuffTitle>
                        Mirsagatova Tamara Maxamatovna
                    </StyledStuffTitle>
                    <StyledStuffText>
                        {t("CEO")}

                    </StyledStuffText>
                    <StyledStuffContact>
                        {t("phone")}: +998 71 237 34 22
                        {t("footer.form.email")}: info@barkamolavlod.uz
                    </StyledStuffContact>
                </StyledStuffItem>
            </StyledStuffList>
            <BackButton />
        </StyledContainer>
    )
}
