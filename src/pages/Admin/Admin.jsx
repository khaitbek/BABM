import React, { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { token } from "../../api";
import { StyledMain } from "../../styles/global";
import { StyledAddButton } from "./admin.styles";
import Sidebar from "./components/Sidebar";
import { StyledSidebar } from "./components/Sidebar/Sidebar/sidebar.styles";

export default function Admin() {
  const navigate = useNavigate();
  const { pathname, hash, key, search, state } = useLocation();
  useEffect(() => {
    if (!localStorage.getItem("babm_token")) navigate("/login");
    else {
      navigate("courses", {
        state: {
          addItemRoute: "course"
        }
      });
    }
  }, []);
  return (
    <>
      <Sidebar />
      <StyledMain className="pl-[220px]">
        <Outlet />
        <StyledAddButton onClick={() => {
          navigate(`/add/${state.addItemRoute}`);
        }}>
          Qo'shish
        </StyledAddButton>
      </StyledMain>
    </>
  )
}
