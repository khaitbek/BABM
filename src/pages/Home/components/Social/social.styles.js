import styled from "styled-components";

const StyledSocial = styled.div.attrs({ className: "p-6 bg-[#012245] rounded-[25px]" })`
    padding-bottom: 35px;
`;

export const StyledSocialTitle = styled.h2.attrs({ className: "font-medium text-lg leading-[18px] text-white mb-6" })``;

export const StyledSocialList = styled.ul.attrs({ className: "flex items-center gap-6" })``;
export const StyledSocialItem = styled.li.attrs({ className: "" })`
   &:nth-child(1) a {
        background-image: url("/facebook.svg");
    }
    &:nth-child(2) a {
        background-image: url("/instagram.svg");
    }
    &:nth-child(3) a {
        background-image: url("/telegram.svg");
    }
`;

export const StyledSocialLink = styled.a.attrs({ className: "font-medium text-base leading-[18px] text-neutral-700 pl-[52px] pr-[25px] py-4 rounded-[16px] bg-white bg-no-repeat" })`
     background-position: left 15px center;
    background-size: 25px;
    
`;

export default StyledSocial