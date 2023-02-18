import { useQuery } from "@tanstack/react-query"
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { Footer } from "../../../components/Footer"
import Header from "../../../components/Header"
import { StyledApp, StyledContainer, StyledDiv, StyledFlexWrapper } from "../../../styles/global"
import SidebarNews from "../components/SidebarNews"

export default function NewsPage() {
  const navigate = useNavigate();
  const { data: news, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      return await (await newsApi.getAll()).data.content;
    },
    staleTime: 50000
  });
  console.log(news?.[0].id);
  useEffect(() => {
    if (news) {
      navigate(`${news?.[0]?.id}`, {
        state: news?.[0]
      });
    }
  }, [news?.length]);
  return (<StyledContainer>
    <StyledFlexWrapper>
      <Outlet />
      <SidebarNews />
    </StyledFlexWrapper>
  </StyledContainer>
  )
}
