import React from 'react'
import { EyeIcon } from "../../../utils"
import { useLocation, useParams } from "react-router-dom"
import { StyledPostImage, StyledPostText, StyledPostTime, StyledPostTimeWrapper, StyledPostTitle } from "../../../components/News/news-styles";
import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../../../api";
import { StyledDiv } from "../../../styles/global";
import BreadCrumb from "../components/BreadCrumb";
import Social from "../components/Social";
import BackButton from "../../../components/BackButton";
import { useTranslation } from "react-i18next";

export default function SingleNews() {
    const { id } = useParams();
    const { state } = useLocation();
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const { bodyUz, sourceUz, titleUz, titleRu } = state;
    return (
        <StyledDiv className="py-[80px]">
            <BreadCrumb links={
                [
                    {
                        prev: true,
                        name: "navigation.info"
                    },
                    {
                        prev: false,
                        name: "news.news_title",
                    },
                ]
            } />
            <StyledPostTitle className="font-medium text-[32px] leading-8">
                {currentLang === "uz" ? titleUz : titleRu}
            </StyledPostTitle>
            <StyledPostTimeWrapper>
                <StyledPostTime className="flex items-center p-0" dateTime={`2023.01.18`}>
                    {`${new Date().getHours()}:${new Date().getMinutes()}`} | {`2023.01.18`}
                    <EyeIcon />
                    {id}
                </StyledPostTime>
            </StyledPostTimeWrapper>
            <StyledPostImage src="https://via.placeholder.com/500x380" alt={bodyUz} />
            <StyledPostText className="font-thin mb-8">
                {currentLang === "uz" ? state.bodyUz : state.bodyRu}
            </StyledPostText>
            <BackButton />
            <Social />
        </StyledDiv>
    )
}
