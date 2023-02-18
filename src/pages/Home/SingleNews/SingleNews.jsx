import React from 'react'
import { EyeIcon } from "../../../utils"
import { useLocation, useParams } from "react-router-dom"
import { StyledPostImage, StyledPostText, StyledPostTime, StyledPostTimeWrapper, StyledPostTitle } from "../../../components/News/news-styles";
import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../../../api";
import { StyledDiv } from "../../../styles/global";

export default function SingleNews() {
    const { id } = useParams();
    const { state } = useLocation();
    const { bodyUz, sourceUz, titleUz } = state;
    return (
        <StyledDiv className="py-[80px]">
            <StyledPostTitle className="font-medium text-[32px] leading-8">
                {titleUz}
            </StyledPostTitle>
            <StyledPostTimeWrapper>
                <StyledPostTime className="flex items-center p-0" dateTime={`2023.01.18`}>
                    {`${new Date().getHours()}:${new Date().getMinutes()}`} | {`2023.01.18`}
                    <EyeIcon />
                    {id}
                </StyledPostTime>
            </StyledPostTimeWrapper>
            <StyledPostImage src="https://via.placeholder.com/500x380" alt={bodyUz} />
            <StyledPostText className="font-thin">
                {bodyUz}
            </StyledPostText>
        </StyledDiv>
    )
}
