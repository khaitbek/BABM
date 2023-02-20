import React from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"
import { Button } from "../Button/Button"
import { StyledButton } from "../Button/button.styles";

export default function BackButton() {
  const { t, i18n } = useTranslation();
  console.log(i18n);
  const navigate = useNavigate();
  return (
    <StyledButton onClick={() => {
      navigate(-1);
    }} className="flex items-center justify-center mb-24 font-medium text-[17px] leading-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} type="button" style={{
      background: "#FF2059",
    }} padding={"17px 26px"} borderRadius="24px" >
      &#8592; {t("back")}
    </StyledButton>
  )
}
