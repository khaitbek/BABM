import React from 'react'
import BackButton from "../../../../components/BackButton";
import { StyledContainer, StyledDiv } from "../../../../styles/global"
import { StyledAboutImg, StyledAboutTitle } from "../About/about.styles";
import systemImage from "/system.png";
export default function School() {
    return (
        <StyledContainer>
            <StyledAboutTitle className="mt-4 mb-12 font-semibold text-[32px] leading-8">
                Toshkent shahar “Barkamol Avlod” bolalar maktabining tuzilmasi
            </StyledAboutTitle>
            <StyledAboutImg className="object-fill" src={systemImage} width={1433} height={680} alt="Toshkent shahar “Barkamol Avlod” bolalar maktabining tuzilmasi" />
            <BackButton />
        </StyledContainer>
    )
}
