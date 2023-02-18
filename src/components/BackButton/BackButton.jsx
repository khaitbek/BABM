import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from "../Button/Button"
import { StyledButton } from "../Button/button.styles";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    // <Button type="button" variant="danger" padding="17px 26px" borderRadius="24px">
    //   &#f1e9f321; Ortga
    // </Button>
    <StyledButton onClick={() => {
      navigate(-1);
    }} className="flex items-center justify-center mb-24 font-medium text-[17px] leading-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} type="button" style={{
      background: "#FF2059",
      // color:"#fff"
    }} padding={"17px 26px"} borderRadius="24px" >
      &#8592; Ortga
    </StyledButton>
  )
}
