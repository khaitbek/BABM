import React, { useEffect, useLayoutEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { token } from "../../api";
import { StyledMain } from "../../styles/global";
import Sidebar from "./components/Sidebar";
import { StyledSidebar } from "./components/Sidebar/sidebar.styles";

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("babm_token")) navigate("/login");
  }, []);
  return (
    <>
      <Sidebar />
      <StyledMain className="pl-[220px]">
        <Outlet />
      </StyledMain>
    </>
  )
}
