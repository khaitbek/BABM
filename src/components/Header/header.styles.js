import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header.attrs({
    className: "absolute border border-[3px] bg-white"
})`
    z-index:10;
    top:30px;
    left:0;
    right:0;
    width: 100%;
    filter: drop-shadow(0px 5px 15px rgba(112, 144, 176, 0.2));
`;

export const StyledHeaderWrapper = styled.header.attrs({
    className: "flex items-center justify-between"
})``;

export const StyledSiteLogo = styled(Link).attrs({
    className: ""
})``;
export const StyledSiteLogoImg = styled.img.attrs({
    className: "w-[187px] h-[50px]"
})``;