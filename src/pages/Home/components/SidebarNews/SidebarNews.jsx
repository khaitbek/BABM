import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { newsApi } from "../../../../api";
import { StyledPostTime, StyledPostTimeWrapper, StyledPostTitle } from "../../../../components/News/news-styles";
import { TextContainer } from "../../../../components/TextContainer/TextContainer";
import StyledSidebar, { StyledSidebarNewsItem, StyledSidebarNewsList, StyledSidebarTopText } from "./sidebar-news.styles";
import lang from "../../../../data/lang";
import { useTranslation } from "react-i18next";

export default function SidebarNews() {
  const { t,i18n } = useTranslation();
  const navigate = useNavigate();
  const { data: news, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      return await (await newsApi.getAll()).data.content;
    },
    staleTime: 50000
  });
  if (isLoading) return <h2>Loading ...</h2>
  if (error) return <h2>Hozirda yangiliklar mavjud emas...</h2>

  return (
    <StyledSidebar className="pt-[80px]">
      <StyledSidebarTopText>
        {t("other_news")}
      </StyledSidebarTopText>
      <StyledSidebarNewsList>
        {
          news.map((post) => (
            <StyledSidebarNewsItem onClick={() => {
              navigate(`/news/${post.id}`, {
                state: post
              })
            }} key={crypto.randomUUID()}>

              <TextContainer maxWidth={'100%'} marginStart={'15px'}>
                <StyledPostTimeWrapper>
                  <StyledPostTime dateTime={`2023.01.18`}>
                    {`${new Date().getHours()}:${new Date().getMinutes()}`} | {`2023.01.18`}
                  </StyledPostTime>
                </StyledPostTimeWrapper>
                <StyledPostTitle>
                  {i18n.language === 'uz' ? post.titleUz : post.titleRu}
                </StyledPostTitle>
              </TextContainer>
            </StyledSidebarNewsItem>
          ))
        }
      </StyledSidebarNewsList>
    </StyledSidebar>
  )
}
