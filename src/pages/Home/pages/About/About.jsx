import React from 'react'
import { useTranslation } from "react-i18next";
import BackButton from "../../../../components/BackButton";
import { StyledContainer, StyledDiv } from "../../../../styles/global";
import BreadCrumb from "../../components/BreadCrumb";
import { StyledAboutImg, StyledAboutText, StyledAboutTitle } from "./about.styles";
import aboutImage from "/about.png";

export default function About() {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <BreadCrumb links={[{ prev: true, name: "navigation.school" }, { prev: false, name: "navigation.about_school" }]} />

            <StyledAboutImg src={aboutImage} width={1156} height={425} alt="“BARKAMOL AVLOD” BILAN YURT KELAJAGI SARI" />
            <StyledAboutTitle>
                {t("about.title")}
            </StyledAboutTitle>
            <StyledAboutText>
                {t("about.text")}
            </StyledAboutText>
            <BackButton />
        </StyledContainer>

    )
}
