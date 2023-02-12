import styled from "styled-components";

export const StyledPartner = styled.div.attrs({ className: "flex flex-col justify-between h-full" })`
    & img{
        max-width:unset;
        margin-inline:auto;
        /* height:100px; */
        object-fit:contain;
        height:100%;
        height:100px;
    }

`
export const StyledPartnerTitle = styled.h3.attrs({ className: "font-medium mt-4 text-center" })`
    

`