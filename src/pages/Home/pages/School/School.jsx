import React from 'react'
import { useTranslation } from "react-i18next";
import BackButton from "../../../../components/BackButton";
import { StyledContainer, StyledDiv } from "../../../../styles/global"
import BreadCrumb from "../../components/BreadCrumb";
import { StyledAboutImg, StyledAboutTitle } from "../About/about.styles";
import systemImage from "/system.png";
export default function School() {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <BreadCrumb links={[{ prev: true, name: "navigation.school" }, { prev: false, name: "navigation.system" }]} />

            <StyledAboutTitle className="mt-4 mb-12 font-semibold text-[32px] leading-8">
                {t("system.title")}
            </StyledAboutTitle>
            <StyledAboutImg className="object-fill" src={systemImage} width={1433} height={680} alt="Toshkent shahar “Barkamol Avlod” bolalar maktabining tuzilmasi" />
            <BackButton />
        </StyledContainer>
    )
}
