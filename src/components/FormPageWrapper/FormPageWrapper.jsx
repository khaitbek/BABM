import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { StyledFormCloseButton } from "../../pages/Admin/pages/AdminForm/admin-form.styles"
import { StyledFullPageWrapper } from "../../styles/global"

export default function FormPageWrapper() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("babm_token")) navigate("/login");
  }, []);
  return (
    <StyledFullPageWrapper>
      <StyledFormCloseButton onClick={() => navigate("/admin")}>

      </StyledFormCloseButton>
      <Outlet />
    </StyledFullPageWrapper>
  )
}
